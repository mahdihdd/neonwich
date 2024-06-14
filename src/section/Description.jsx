import React, { useEffect, useRef } from "react";
import { usePost } from "../context/PostProvider";
import RevealLtr from "../components/animation/RevealLtr";
import RevealRtl from "../components/animation/RevealRtl";
export default function Description() {
  const { descript } = usePost();

  return (
    <div
      ref={descript}
      className="reveal flex flex-col md:flex-row gap-[200px] mt-10 justify-center items-center h-[680px] border-2 rounded-xl m-3"
    >
      <RevealLtr>
        <div>image</div>
      </RevealLtr>

      <RevealRtl>
        <p className="text-right">
          hello my name is the mahdi haddad, I am a front end developer, I
          studied at IKIU, I am happy
        </p>
      </RevealRtl>
    </div>
  );
}
