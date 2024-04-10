import React from "react";
import Form from "./Form";

function SignUp() {
  return (
    <section className="form grid md:grid-cols-5">
      <div className="left hidden md:block md:col-span-2"></div>
      <div className="col-span-3">
        <p className="signin">
          Already a member?{" "}
          <a className="blue" href="/">
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
