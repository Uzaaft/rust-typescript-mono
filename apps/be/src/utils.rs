/// Custom macro that checks for the existence of a variable in the environment
#[macro_export]
macro_rules! get_env_var {
    ($var_name:ident) => {
        match std::env::var(stringify!($var_name)) {
            Ok(val) => val,
            Err(_) => panic!("{} must be set", stringify!($var_name)),
        }
    };
}
