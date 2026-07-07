import { type RouteConfig, index, layout, prefix, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"), // route functiunu kullnamis oluyor aslinda react routerdan 

  // singel route iki tane parrameter aliyor  url ve path kismini  componenint yolu 
  route("/about", "routes/about.tsx"),
  // layout ortak kullanim  ortak ui 
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

 // post prefix de ise ortak url kullandigimzi icin 
 // posts/id
 // posts/new
 // url, childerenler 

 ...prefix("posts", [
    index("routes/posts.tsx"),
    route(":id" , "routes/post-detail.tsx"),
    route("new", "routes/post-new.tsx")
 ])
,

 // Asterixs 

route("*", "routes/not-found.tsx")



] satisfies RouteConfig;
