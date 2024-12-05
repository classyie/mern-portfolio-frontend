import React from 'react'
import SecotionTitle from '../../Components/SecotionTitle';

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
    </div>
  )
}

export default Contact;
