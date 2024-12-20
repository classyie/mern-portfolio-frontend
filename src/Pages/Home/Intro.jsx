import React from "react";

function Intro() {
  return (
    <div className="h-[80vh] bg-primary flex flex-col items-start justify-center gap-8 py-10">
      <h1 className="text-white">Hi, I am</h1>
      <h1 className="text-7xl sm:text-3xl text-secondary font-semibold">
        Harshit Pandey
      </h1>
      <h1 className="text-6xl sm:text-3xl text-white font-semibold">
        I am learning by building things.
      </h1>
      <p className="text-white w-2/3">
        I am a full stack developer. Currently working as React Developer.
      </p>
      <button
        className="border-2 border-tertiary text-tertiary px-10 py-3 rounded"
        onClick={() => window.open("https://codexarena.com/", "_blank")}
      >
        Get Started
      </button>
    </div>
  );
}

export default Intro;
