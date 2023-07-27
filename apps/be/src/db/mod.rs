//! Database utils

use std::str::FromStr;
use std::sync::OnceLock;

use sqlx::{ConnectOptions, PgConnection};

/// Shared database connection pool
static DB_POOL: OnceLock<sqlx::PgPool> = OnceLock::new();

/// Initialize the database connection pool
pub async fn initialize_db<S: AsRef<str>>(url: S) -> sqlx::Result<()> {
    let opts = sqlx::postgres::PgConnectOptions::from_str(url.as_ref())?
        .log_statements(log::LevelFilter::Debug);

    // Connect to the pool and set it
    let pool = sqlx::pool::PoolOptions::new()
        .max_connections(5)
        .connect_with(opts)
        .await?;
    DB_POOL.set(pool.clone()).unwrap();

    // Apply migrations
    tracing::info!("Applying database migrations");
    sqlx::migrate!().run(&pool).await?;

    Ok(())
}

/// Get a clone of the connection pool to the database.
///
/// Will panic if the pool is not initialized with [`initialize_db`].
pub fn get_pool() -> &'static sqlx::PgPool {
    DB_POOL.get().unwrap()
}
