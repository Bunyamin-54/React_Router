import React from "react";
import { Form, Link, redirect } from "react-router";
import type { Route } from "./+types/posts";

const posts = [
  {
    id: 1,
    title: "Post 1",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?",
  },
  {
    id: 2,
    title: "Post 2",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?",
  },
  {
    id: 3,
    title: "Post 3",
    content:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nemo cupiditate hic reiciendis quo sapiente veritatis laborum libero! Aliquid totam consectetur officiis fuga impedit cum debitis ut deserunt molestiae iure repudiandae assumenda velit quasi ipsa iusto, praesentium laboriosam excepturi optio aliquam neque et vitae odio! Architecto beatae a harum rerum repudiandae?",
  },
];

const BASE_URL = "https://6a4d62d1e1cf82a4a17e544d.mockapi.io/Blogs"

 export async function loader() {
   const res = await fetch(BASE_URL);

  //  console.log("loader data:", res);
   return res.json();
  //return posts
 }

export async function action({request}: Route.ActionArgs){

const formData = await request.formData()
const name = formData.get("name")
const title = formData.get("title")

// console.log("action form data ", {name, title})

const res = await fetch(`${BASE_URL}`, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ name, title }),
});

return redirect("/posts")
}
  
export default function PostPage({loaderData, actionData, params, matches}: Route.ComponentProps) {

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1>Posts</h1>
      <Form
        method="post"
        navigate={false}
        action="/posts"
        className="flex flex-col gap-2"
      >
        <input type="text" name="name" placeholder="Enter post name" />
        <input type="text" name="title" placeholder="Enter post title" />
        <button type="submit" className="bg-amber-600">Add Post</button>
      </Form>
      {loaderData?.map((post: any) => (
        <div key={post.id} className="flex flex-col items-center">
          <Link
            to={`/posts/${post.id}`}
            className="underline underline-offset-2"
          >
            - {post.name}
          </Link>
        </div>
      ))}
    </div>
  );
}


