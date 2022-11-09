import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Contexts/AuthContext";
import { Helmet } from "react-helmet-async";

// This is Register Page
const Register = () => {
  const { user, createUser, updateUserProfile } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        handleUpdateUserProfile(name, photo);
      })
      .catch((error) => console.log(error));
  };

  const handleUpdateUserProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((e) => console.log(e));
  };
  return (
    <div>
      <Helmet>
        <title>Register-Photo Phactory</title>
      </Helmet>
      <div className="flex flex-col items-center min-h-screen pt-6 sm:justify-center sm:pt-0">
        <div>
          <a href="/">
            <h3 className="text-4xl font-bold text-purple-600">Register</h3>
          </a>
        </div>
        <div className="w-full px-6 py-4 mt-6 overflow-hidden bg-fuchsia-500 shadow-md sm:max-w-lg sm:rounded-lg">
          <form onSubmit={handleSubmit}>
            {/* Input Fuild for Full Name */}
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Full Name
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="name"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            {/* Input Fuild for photo url */}
            <div className="mt-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Photo URL
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="text"
                  name="photo"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"               
                />
              </div>
            </div>

            {/* Input Fuild for Email */}
            <div className="mt-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Email
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="email"
                  name="email"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            {/* Input Fuild for Password */}
            <div className="mt-4">
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 undefined"
              >
                Password
              </label>
              <div className="flex flex-col items-start">
                <input
                  type="password"
                  name="password"
                  className="block w-full mt-1 p-2 border-gray-300 rounded-md shadow-lg focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                  required
                />
              </div>
            </div>

            {/* Register Button */}
            <div className="flex items-center mt-4">
              <button className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-purple-700 rounded-md hover:bg-purple-600 focus:outline-none focus:bg-purple-600">
                Register
              </button>
            </div>
          </form>
          <div className="mt-4 text-grey-600">
            Already have an account?{" "}
            <Link to="/login">
              <button className="text-purple-600 hover:underline" href="#">
                Log in
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
