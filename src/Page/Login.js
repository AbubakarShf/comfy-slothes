import React, { useState } from "react";
import { signInWithPopup, signOut } from "firebase/auth";
import {
  auth,
  googleProvider,
  twitterProvider,
} from "../backend/firebaseConfig";

const Login = () => {
  const [isLogin, setIsLogin] = useState(false);

  const handleSignInWithGoogle = () => {
    // alert("working");
    signInWithPopup(auth, googleProvider).catch((err) =>
      console.log(err.message)
    );
  };
  const handleSignInWithTwitter = () => {
    // alert("working");
    signInWithPopup(auth, twitterProvider).catch((err) =>
      console.log(err.message)
    );
  };
  return (
    <div className="py-44">
      <div className="border-2   md:max-w-sm max-w-[250px]   mt-20 mx-auto">
        <div className="text-center bg-gray-100 py-10 px-6 mb-3">
          <h1 className="mb-4 text-2xl font-bold">Logo</h1>

          <p className="text-2xl">React Store Testing</p>
        </div>
        <div className="flex flex-row justify-between justify-around mb-6">
          <div>
            <button className="text-xl bg-blue-600 px-3 text-white py-2 rounded-lg">
              Login
            </button>
          </div>
          <div>
            <button className="text-xl bg-blue-600 px-3 text-white py-2 rounded-lg">
              Sign Up
            </button>
          </div>
        </div>
        <div className="flex flex-col justify-center text-center ">
          <div>
            <button
              onClick={handleSignInWithGoogle}
              className="border-2 px-10 "
            >
              Sign up with google
            </button>
          </div>
          <div>
            <button
              onClick={handleSignInWithTwitter}
              className="mt-4 border-2 px-10 "
            >
              Sign up with Twitter
            </button>
          </div>
        </div>
        <form className="flex flex-col  p-4 mb-10 justify-center items-center">
          <input
            className="mb-5 border-2 py-2 p-2 w-[220px] "
            type="Username"
            placeholder="Username"
          />
          <input
            type="password "
            placeholder="password"
            className="py-2 border-2 p-2 w-[220px] "
          />
          <button
            className="mt-4 text-center bg-blue-700 text-white py-2 w-[220px] 
            cursor-pointer"
          >
            Sign Up
          </button>
          <p className="text-white underline text-center cursor-pointer">
            {isLogin ? "Login" : "Sign "} ||
            <span onClick={() => setIsLogin(!isLogin)} className="text-myRed ">
              {isLogin ? " Login" : " Sign Up"} instead
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
