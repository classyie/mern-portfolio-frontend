import React from "react";

function LeftSider() {
  return (
    <div className="fixed left-0 bottom-0 px-10  sm:static ">
      <div className="flex flex-col justify-center items-center">
        <div className="flex flex-col gap-3  sm:flex-row">
          <i className="ri-facebook-circle-line text-gray-500"></i>
          <i className="ri-mail-fill text-gray-500"></i>
          <i className="ri-instagram-line text-gray-500"></i>
          <i className="ri-linkedin-box-line text-gray-500"></i>
          <a href="https://github.com/classyie"><i className="ri-github-line text-gray-500"></i></a>
        </div>
        <div className="w-[1px] h-40 bg-[#125f63] sm:hidden"></div>
      </div>
    </div>
  );
}

export default LeftSider;
