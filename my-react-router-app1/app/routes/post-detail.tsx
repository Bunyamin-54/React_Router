import type { Route } from "./+types/post-detail";


export default function PostDetailPage({params} : Route.ComponentProps) {

     console.log("params", params)
  return (
    <div>post-detail - {params.id}</div>
  )
}