import React from "react";
import dribble from "../assets/images/dribble.png";
import { FaSuitcase, FaSearchengin, FaUser } from "react-icons/fa6";

function Navbar() {
  return (
    <section>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-full flex flex-wrap items-center justify-start">
          <a href="/" className="flex items-center rtl:space-x-reverse">
            <img
              src={dribble}
              className="self-center mx-4 h-28"
              alt="Dribble Logo"
            />
          </a>
          <div
            className="items-center inline text-sm ml-10 justify-end w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/verify"
                  className="block py-2 px-3 text-gray-600 rounded md:p-0"
                  aria-current="page"
                >
                  Inspiration
                </a>
              </li>
              <li>
                <a
                  href="/verify"
                  className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Find Work
                </a>
              </li>
              <li>
                <a
                  href="/verify"
                  className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Learn Design
                </a>
              </li>
              <li>
                <a
                  href="/verify"
                  className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Go Pro
                </a>
              </li>
              <li>
                <a
                  href="/verify"
                  className="block py-2 px-3 text-gray-600 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Hire Designers
                </a>
              </li>
            </ul>
          </div>
          <div
            className="items-center inline text-sm ml-auto justify-between md:justify-end w-full md:flex md:w-auto md:order-1"
            id="navbar-user"
          >
            <ul className="flex items-center justify-end md:flex-row space-x-4">
              <li>
                <div className="flex items-center bg-gray-200 rounded-full shadow-sm">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-32 py-2 px-4 bg-gray-200 rounded-full leading-tight focus:outline-none"
                  />
                  <button className="flex items-center justify-center h-full px-4">
                    <FaSearchengin className="h-8 text-gray-400" />
                  </button>
                </div>
              </li>
              <li>
                <FaSuitcase className="text-gray-500 size-8">
                  {/* <a
                    href="/verify"
                    className="block py-1 px-2 text-white rounded text-md"
                  ></a> */}
                </FaSuitcase>
              </li>
              <li>
                <div className="rounded-full h-12 w-12 flex justify-center bg-gray-200">
                  <FaUser className="h-12 text-gray-500">
                    {/* <a
                      href="/verify"
                      className="block py-1 px-2 text-white rounded text-md"
                    ></a> */}
                  </FaUser>
                </div>
              </li>
              <li>
                <button className="rounded-lg h-12 w-24 bg-pink-600">
                  <a
                    href="/verify"
                    className="block py-1 px-2 text-white rounded text-md"
                  >
                    Upload
                  </a>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </section>
  );
}

export default Navbar;
