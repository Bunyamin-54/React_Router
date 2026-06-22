import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
    
    
index("routes/home.tsx"), 

// singel route 
 route("/about", "routes/about.tsx"), 
// layout
layout("layouts/auth-layout.tsx", [

    route("/login", "routes/login.tsx"),
    route("/register", "routes/register.tsx")


])

] satisfies RouteConfig;
