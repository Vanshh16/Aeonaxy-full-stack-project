import React from "react";
import Form from "./Form";

function SignUp() {
  return (
    <section className="form grid grid-cols-5">
      <div className="left col-span-2"></div>
      <div className="col-span-3">
        <p className="signin">
          Already a member?{" "}
          <a className="blue" href="#">
            Sign in
          </a>
        </p>
        <div className="right">
          <Form />
        </div>
      </div>
    </section>
  );
}

export default SignUp;
