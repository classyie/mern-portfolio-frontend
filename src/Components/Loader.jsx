import React from "react";

function Loader() {
  return (
    <div className="h-screen flex items-center justify-center fixed inset-0 bg-primary">
      <div className="flex gap-5 text-6xl sm:text-3xl font-semibold">
        <h1 className="text-secondary H">H</h1>
        <h1 className="text-white P">P</h1>
        <h1 className="text-tertiary C">Codex</h1>
      </div>
    </div>
  );
}

export default Loader;
