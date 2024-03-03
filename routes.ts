/* an array of public routes @type {string[]} */
export const publicRoutes = ["/"];

// log in and goes to settings
export const authRoutes = ["/auth/login", "/auth/error", "/auth/register"];

/* routes that begin with this prefix are for auth only @type {string} */
export const apiAuthPrefix = "/api/auth";

export const DEFAULT_LOGIN_REDIRECT = "/settings";
