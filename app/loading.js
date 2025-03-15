import React from "react";

export default function loading() {
  return (
    <div className="flex flex-row gap-2 h-screen w-screen justify-center items-center">
      <div className="w-4 h-4 rounded-full bg-green-200 animate-bounce"></div>
      <div className="w-4 h-4 rounded-full bg-green-400 animate-bounce [animation-delay:-.3s]"></div>
      <div className="w-4 h-4 rounded-full bg-green-600 animate-bounce [animation-delay:-.5s]"></div>
    </div>
  );
}

