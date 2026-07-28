import { Link } from "react-router";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}
 // veri cekme icin kullnaidigmiz function react routerdaki  loader()
 
export async function loader() {
  const res = await fetch("https://6a4d62d1e1cf82a4a17e544d.mockapi.io/Blogs"); 
  return res.json()
}
export default function Home({loaderData, actionData, params, matches}: Route.ComponentProps) {
  return (
    <div className="container mx-auto p-4 text-center">
  
        <h1>Welcome to My Route with Props!</h1>
        <p>Loader Data: {JSON.stringify(loaderData)}</p>
        <p>Action Data: {JSON.stringify(actionData)}</p>
        <p>Route Parameters: {JSON.stringify(params)}</p>
        <p>Matched Routes: {JSON.stringify(matches)}</p>
    
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page content.</p>
      <div className="flex flex-col gap-4 mt-4">
        <Link to="/about" className="underline underline-offset-2">
          Go to About Page
        </Link>
        <Link to="/login" className="underline underline-offset-2">
          Go to Login Page
        </Link>
        <Link to="/register" className="underline underline-offset-2">
          Go to Register Page
        </Link>
      </div>
    </div>
  );
}
