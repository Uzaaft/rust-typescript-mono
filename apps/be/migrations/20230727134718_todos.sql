-- Add migration script here

-- SQL is from: https://github.com/launchbadge/sqlx/blob/main/examples/postgres/todos/migrations/20200718111257_todos.sql
CREATE TABLE IF NOT EXISTS todos
(
    id          BIGSERIAL PRIMARY KEY,
    description TEXT    NOT NULL,
    done        BOOLEAN NOT NULL DEFAULT FALSE
);
