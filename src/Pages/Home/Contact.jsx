import React from "react";
import SecotionTitle from "../../Components/SecotionTitle";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

function Contact() {
  const user = {
    name: "Harshit Pandey",
    gender: "Male",
    email: "harshitp.dev@gmail.com",
    mobile: "+91-9198237307",
    country: "India",
  };
  return (
    <div>
      <SecotionTitle title="Say Hello" />
      <div className="flex sm:flex-col items-center justify-between">
        <div className="flex flex-col gap-1 sm:pt-4 sm:p-5 pt-10 p-20 ">
          <p className="text-tertiary">{"{"}</p>
          {Object.keys(user).map((key) => (
            <p className="ml-5">
              <span className="text-tertiary">{key} : </span>
              <span className="text-tertiary">{user[key]}</span>
            </p>
          ))}
          <p className="text-tertiary">{"}"}</p>
        </div>

        <div className="h-[40vh] pr-40">
          <DotLottieReact
            src="https://lottie.host/d735b94d-78f0-4af3-962e-7613b442dcec/Tk4ur0v054.lottie"
            loop
            autoplay
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
