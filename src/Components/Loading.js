import React from "react";

const Loading = () => {
  return (
    <div className="text-black flex fixed left-1/2 top-1/2 text-4xl -translate-x-1/2 -translate-y-1/2">
      Loading
      <span className="block   ml-2 animate-wiggle animation-delay-5">.</span>
      <span className="block  animate-wiggle animation-delay-6">.</span>
      <span className="block  animate-wiggle animation-delay-7 ">.</span>
    </div>
  );
};

export default Loading;
