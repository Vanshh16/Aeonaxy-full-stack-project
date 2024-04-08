import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import dribble from "../assets/images/dribble.png";
import Image from "./Cloudinary/Cloudinary";
import { useEffect } from "react";

function SignUp1() {

  const location = useLocation();
  const data = location.state;
  
  const [publicId, setPublicId] = useState("");
  const [form, setForm] = useState(data);
  console.log(form);
  const navigate = useNavigate();
  function handleSubmit(event) {
    // event.preventDefault();
    navigate("/signup2", {state:form});
  }

  const returnPublicId = (id)=> {
    setPublicId(id);
  }
  useEffect(()=>{
    setForm({
    ...form,
    avatar:{
      public_id : publicId,
      url: `https://res.cloudinary.com/${process.env.REACT_APP_CLOUD_NAME}/image/upload/v1234567890/${publicId}`
    }
  });
  },[publicId, form])

  return (
    <section className="signup1">
      <img className="dribble h-24 w-24" alt="" src={dribble}></img>
      <form className="pt-20">
        <div className="space-y-10">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            Welcome! Let's create your profile
            <p className="mt-8">
              Let others get to know you better! You can do these later
            </p>
          </h1>
          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="col-span-full">
              <h2>Add an avatar</h2>
              {/* <div className="mt-2 flex rounded-lg px-1 py-10">
                <div className="text-left grid grid-cols-2">
                  <img className="h-40 w-40 text-gray-300" src={img} />
                  <div className="mt-14 flex text-md leading-6 text-gray-600">
                    <label
                      htmlFor="file-upload"
                      className="relative cursor-pointer rounded-lg bg-white font-semibold"
                    >
                      <span className="rounded-lg bg-white px-3 py-2 text-md font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
                        Choose image
                      </span>
                      <input
                        id="file-upload"
                        name="file-upload"
                        type="file"
                        className="sr-only"
                      />
                      <p className="pl-1 text-base mt-6 font-semibold text-gray">
                        &gt; Or choose one of our defaults
                      </p>
                    </label>
                  </div>
                </div>
              </div> */}
              <Image returnPublicId={returnPublicId} />
            </div>
          </div>

          <div className="pb-12">
            <h2 className="text-base font-semibold leading-7 text-gray-900">
              Add your location
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-4 sm:grid-cols-6">
              <div className="sm:col-span-3 border-b border-gray-900/10 pb-12">
                <div className="location">
                  <input
                    placeholder="Enter location"
                    type="text"
                    name="location"
                    id="location"
                    className="block w-full border-0 px-1 py-1.5 text-xl placeholder-gray-500 text-gray-900 shadow-sm sm:text-sm sm:leading-6 focus:border-0"
                    value={form?form.location:""}
                    onChange={(e) => {
                      setForm({ ...form, location: e.target.value });
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-1 pb-8 flex items-center justify-start">
          <button
            onClick={handleSubmit}
            type="submit"
            className="rounded-lg h-10 w-60 bg-pink-600 px-2 py-1 text-base font-semibold text-white shadow-sm hover:bg-indigo-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-800"
          >
            Next
          </button>
        </div>
      </form>
    </section>
  );
}

export default SignUp1;
