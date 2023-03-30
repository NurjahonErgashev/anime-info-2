import React from "react";
import spinner from "@/assets/Spinner.svg";
import Image from "next/image";

function Loading() {
  return (
    <div className="flex h-full w-full justify-center items-center fixed left-0 top-0 bg-black bg-opacity-40 z-50">
      <Image src={spinner} />
    </div>
  );
}

export default Loading;
