"use client"
const { default: GoogleLogin } = require("@/components/login/googleLogin");

function Home() {

  return (
    <>
      <GoogleLogin/>
    </>
  );
}

export default Home;