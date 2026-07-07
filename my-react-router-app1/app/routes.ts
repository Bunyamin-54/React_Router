import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),

  // singel route
  route("/about", "routes/about.tsx"),
  // layout
  layout("layouts/auth-layout.tsx", [
    route("/login", "routes/login.tsx"),
    route("/register", "routes/register.tsx"),
  ]),
// test
  // nested routes route(url , path, [children]),
  route("/dashboard", "routes/dashboard.tsx", [
    index("routes/dashboard-main.tsx"),
    route("stats", "routes/stats.tsx"),
    route("blogs", "routes/blogs.tsx"),
    route("settings", "routes/settings.tsx"),
  ]),
] satisfies RouteConfig;
