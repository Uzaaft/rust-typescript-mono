//! Minimal example of Poem + Rust + SQLX
#![deny(missing_docs)]
#![deny(clippy::missing_docs_in_private_items)]

mod db;
mod utils;

use anyhow::Result;
use mono_types;
use poem::{listener::TcpListener, Route, Server};
use poem_openapi::{param::Query, payload::PlainText, OpenApi, OpenApiService};

struct Api {
    db: sqlx::PgPool,
}

impl Api {
    /// Create a new instance of the API
    pub fn new(db: &sqlx::PgPool) -> Self {
        let db = db.clone();
        Self { db }
    }
}

#[OpenApi]
impl Api {
    #[oai(path = "/hello", method = "get")]
    async fn index(&self, name: Query<Option<String>>) -> PlainText<String> {
        match name.0 {
            Some(name) => PlainText(format!("hello, {name}!")),
            None => PlainText("hello!".to_string()),
        }
    }
}

#[tokio::main]
async fn main() -> Result<()> {
    dotenvy::dotenv()?;
    if std::env::var_os("RUST_LOG").is_none() {
        std::env::set_var("RUST_LOG", "poem=debug");
    }
    tracing_subscriber::fmt::init();
    // Get the DB url from the environment
    let db_url = get_env_var!(DATABASE_URL);
    db::initialize_db(db_url).await?;
    tracing::info!("Database poolinitialized");
    // Get the DB pool
    let db_pool = db::get_pool();
    // App port and url
    let app_port = get_env_var!(APP_PORT);
    let app_url = get_env_var!(APP_URL);
    let app_address = format!("{app_url}:{app_port}");
    tracing::info!("Starting app at {app_address}");
    // Create the API
    let api = Api::new(db_pool);

    let api_service =
        OpenApiService::new(api, "Hello World", "1.0").server("http://localhost:3001/api");
    let ui = api_service.swagger_ui();

    Server::new(TcpListener::bind(app_address))
        .run(Route::new().nest("/api", api_service).nest("/", ui))
        .await?;
    Ok(())
}
