use typeshare::typeshare;
use uuid::Uuid;

#[typeshare]
struct todo {
    id: Uuid,
    title: String,
    done: bool,
}
