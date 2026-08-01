import { futimes } from "fs";
import type { Route } from "./+types/post-detail";
import { redirect } from "react-router";

// api islemi icin loader() adinda olmali
// export edilmeli , arrov ve decleratiiv ikisinde calisir.

export const loader = () => {
  return "Hei";
};

export default function PostDetailPage({
  params,
  loaderData,
}: Route.ComponentProps) {
  console.log("params", params);
  return (
    <div>
      post-detail - {params.id}
      <p>loader data yukle : {JSON.stringify(loaderData)}</p>
    </div>
  );
}
