import React from "react";
import { usePost } from "../context/PostProvider";
export default function Order() {
  const {howOrder} = usePost()

  return (
    <div ref={howOrder} className="h-[700px] flex border-2 rounded-xl flex-col items-center m-3">
      <h1 className="mt-5">نحوه سفارش</h1>
    </div>
  );
}