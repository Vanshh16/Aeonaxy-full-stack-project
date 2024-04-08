import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Form() {
  const [form, setForm] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    avatar: {
      public_id: "",
      url: "",
    },
    location: "",
    work: false,
    hire: false,
    inspire: false,
  });

  const navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("abc");
    navigate("/signup1", {state:form});
  };

  return (
    <form className="signup-form">
      <h1>Sign up to Dribble</h1>
      <div className="space-y-12">
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.name}
                onChange={(e) => {
                  setForm({ ...form, name: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-3">
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Username
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.username}
                onChange={(e) => {
                  setForm({ ...form, username: e.target.value });
                }}
              />
            </div>
          </div>

          <div className="sm:col-span-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email address
            </label>
            <div className="mt-2">
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                value={form.email}
                onChange={(e) => {
                  setForm({ ...form, email: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="sm:col-span-4">
          <div className="flex items-center justify-between">
            <label
              htmlFor="password"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Password
            </label>
            <div className="text-sm">
              <a
                href="#"
                className="font-semibold text-indigo-600 hover:text-indigo-500"
              >
                Forgot password?
              </a>
            </div>
          </div>
          <div className="mt-2">
            <input
              id="password"
              name="password"
              type="password"
              placeholder="6+ characters"
              autoComplete="current-password"
              required
              className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              value={form.password}
              onChange={(e) => {
                setForm({ ...form, password: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="sm:col-span-4">
          <div className="mt-2">
            <input
              id="checkbox"
              name="checkbox"
              type="checkbox"
              className="block rounded-md border-0 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
          <div className="flex items-center justify-between">
            <p
              htmlFor="checkbox"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Creating an account means you're okay with our{" "}
              <span className="blue">Terms of Service, Privacy Policy,</span>{" "}
              and our default{" "}
              <span className="blue">Notification Settings.</span>
            </p>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-start">
        <button
          onClick={handleSubmit}
          type="submit"
          className="rounded-xl h-12 w-40 bg-pink-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Create Account
        </button>
      </div>
      <div className="flex items-center justify-between">
        <p className="block text-sm mt-4 font-small leading-6 text-gray">
          This site is protected by reCAPTCHA and the Google{" "}
          <span className="blue">Privacy Policy</span>
          and <span className="blue">Terms of Service</span> apply.
        </p>
      </div>
    </form>
  );
}
