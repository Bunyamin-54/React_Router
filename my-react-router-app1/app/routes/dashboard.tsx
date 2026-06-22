import React from "react";
import { Link, Outlet } from "react-router";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <aside className="w-64 bg-slate-900 text-slate-100 p-5 shadow-lg">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">Menu</h2>
        </div>
        <nav>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/stats"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Stats
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/blogs"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Blogs
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/settings"
                className="block px-4 py-3 text-slate-100 rounded-md transition-colors hover:bg-slate-700"
              >
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-5 bg-slate-50">
        <h1 className="text-3xl font-bold mb-4">Welcome to the App</h1>
        <p className="text-slate-800">
          Select a page from the sidebar to get started.
        </p>
        <Outlet />
      </main>
    </div>
  );
}
