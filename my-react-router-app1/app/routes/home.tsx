import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  return (
    <div className="container mx-auto p-4 text-center">
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <Link to="/about">Go to About Page</Link>
    </div>
  );
}
