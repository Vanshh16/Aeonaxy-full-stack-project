import React, { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import dribble from "../assets/images/dribble.png";
import card1 from "../assets/images/card1.png";
import card2 from "../assets/images/card2.png";
import card3 from "../assets/images/card3.png";
import axios from "axios";

function SignUp2() {
  const location = useLocation();
  const data = location.state;

  const [form, setForm] = useState(data);

  const navigate = useNavigate();
  const [isCard1Focused, setIsCard1Focused] = useState(false);
  const [isCard2Focused, setIsCard2Focused] = useState(false);
  const [isCard3Focused, setIsCard3Focused] = useState(false);

  const handleClick = () => {
    navigate("/signup1");
  };
  const handleSubmit = async (event) => {

    event.preventDefault();
    const response = await axios.post("http://localhost:4000/", form);
    console.log(form);
    console.log(response);
    navigate("/verify");
  };
  useEffect(() => {
    setForm({ ...form, work: isCard1Focused });
  }, [isCard1Focused, form]);
  useEffect(() => {
    setForm({ ...form, hire: isCard2Focused });
  }, [isCard2Focused, form]);
  useEffect(() => {
    setForm({ ...form, inspire: isCard3Focused });
  }, [isCard3Focused, form]);

  return (
    <section className="signup2">
      <img className="dribble h-24 w-24" alt="" src={dribble}></img>
      <div className="ret pb-6 items-left justify-start">
        <button
          onClick={handleClick}
          type="button"
          className="rounded-md h-14 w-14 bg-gray-100 px-2 py-1 text-xl font-semibold text-gray-500 shadow-sm transition-hover duration-300 ease-in-out hover:bg-gray-400 hover:text-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          &lt;
        </button>
      </div>

      <form
        className="pt-20"
        onSubmit={
          isCard1Focused || isCard2Focused || isCard3Focused
            ? handleSubmit
            : null
        }
      >
        <div className="space-y-10 mb-4">
          <h1 className="text-base font-semibold leading-7 text-gray-900">
            What brings you to Dribbble?
            <p className="mt-8">
              Select the options that best describe you. Don't worry, you can
              explore other options later.
            </p>
          </h1>
          <div className="grid lg:grid-cols-3 grid-cols-1 gap-y-4">
            {/* Card 1 */}
            <div
              className={`py-4 max-w-xs rounded-2xl border border-gray-300 overflow-hidden ${
                isCard1Focused
                  ? "border-pink-500 border-2"
                  : "border-gray-300 h-80"
              }`}
              onClick={() => setIsCard1Focused(!isCard1Focused)}
              tabIndex="0"
            >
              <img className="w-60 mx-auto" src={card1} alt="Placeholder" />
              <div className="px-6 py-4">
                <div className="font-black text-xl mb-2">
                  I'm a designer looking to share my work
                </div>
                <p
                  className={`text-gray-700 text-base transition-all duration-300 ease-in-out ${
                    isCard1Focused ? "opacity-100" : "hidden opacity-0"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vestibulum ullamcorper tortor eu ultrices.
                </p>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-400 bg-white transition-all checked:border-pink-600 checked:bg-pink-500"
                    checked={isCard1Focused}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>

            {/* Card 2 */}
            <div
              className={`py-4 max-w-xs rounded-2xl border border-gray-300 overflow-hidden ${
                isCard2Focused
                  ? "border-pink-500 border-2"
                  : "border-gray-300 h-80"
              }`}
              onClick={() => setIsCard2Focused(!isCard2Focused)}
              tabIndex="0"
            >
              <img className="w-60 mx-auto" src={card2} alt="Placeholder" />
              <div className="px-6 py-4">
                <div className="font-black text-xl mb-2">
                  I'm looking to hire a designer
                </div>
                <p
                  className={`text-gray-700 text-base transition-opacity duration-300 ease-in-out ${
                    isCard2Focused ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
                  vestibulum ullamcorper tortor eu ultrices.
                </p>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-400 bg-white transition-all checked:border-pink-600 checked:bg-pink-500 hover:scale-105 hover:before:opacity-0"
                    checked={isCard2Focused}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>

            {/* Card 3 */}
            <div
              className={`py-4 max-w-xs rounded-2xl border border-gray-300 overflow-hidden ${
                isCard3Focused
                  ? "border-pink-500 border-2"
                  : "border-gray-300 h-80"
              }`}
              onClick={() => setIsCard3Focused(!isCard3Focused)}
              tabIndex="0"
            >
              <img className="w-60 mx-auto" src={card3} alt="Placeholder" />
              <div className="px-6 py-4">
                <div className="font-black text-xl mb-2">
                  I'm looking for design inspiration
                </div>
                <p
                  className={`text-gray-700 text-base transition-opacity duration-300 ease-in-out ${
                    isCard3Focused ? "opacity-100" : "opacity-0 hidden"
                  }`}
                >
                  With over 7 million shots from a vast community of designers,
                  Dribbble is the leading source for design inspiration.
                </p>
              </div>
              <div className="inline-flex items-center">
                <label
                  className="relative flex items-center p-3 rounded-full cursor-pointer"
                  htmlFor="customStyle"
                >
                  <input
                    type="checkbox"
                    className="before:content[''] peer relative h-8 w-8 cursor-pointer appearance-none rounded-full border border-gray-400 bg-white transition-all checked:border-pink-600 checked:bg-pink-500 hover:scale-105 hover:before:opacity-0"
                    checked={isCard3Focused}
                  />
                  <span className="absolute text-white transition-opacity opacity-0 pointer-events-none top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 peer-checked:opacity-100">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      stroke="currentColor"
                      strokeWidth="1"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </label>
              </div>
            </div>
          </div>

          <div className="mt-8 space-y-5 pb-8 items-center justify-center">
            <p
              className={`text-black-300 font-bold text-base transition-opacity duration-300 ease-in-out
            ${
              isCard1Focused || isCard2Focused || isCard3Focused
                ? "opacity-100"
                : "opacity-0"
            }`}
            >
              Anything else? You can select multiple
            </p>
            <button
              type="submit"
              className={`rounded-lg h-10 w-60 px-2 py-1 text-base font-semibold text-white shadow-sm hover:bg-pink-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-800
               ${
                 isCard1Focused || isCard2Focused || isCard3Focused
                   ? "bg-pink-600"
                   : "bg-pink-300"
               }`}
            >
              Finish
            </button>
            <p
              className={`text-gray-400 text-sm transition-opacity duration-300 ease-in-out
            ${
              isCard1Focused || isCard2Focused || isCard3Focused
                ? "opacity-100"
                : "opacity-0"
            }`}
            >
              or Press <span className="font-black">RETURN</span>
            </p>
          </div>
        </div>
      </form>
    </section>
  );
}

export default SignUp2;
