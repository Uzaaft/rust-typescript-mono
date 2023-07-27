fn main() {
    std::process::Command::new("typeshare")
        .args([
            "--lang",
            "typescript",
            "./src/lib.rs",
            "--output-file",
            "./src/types.ts",
        ])
        .output()
        .ok();
}
