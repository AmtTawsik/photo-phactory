import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../App.css";
import bg from "../assects/bg-home.jpg";
import right from "../assects/right.jpg";
import DemoWork from "./DemoWork";
import FaQ from "./FaQ";
import Service from "./Service";

const Home = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/homeServices")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <>
      {/* Page Title */}
      <Helmet>
        <title>Home-Photo Phactory</title>
      </Helmet>
      {/* Bannar Section */}
      <section>
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url(${bg})`,
          }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-md">
              <h1 className="mb-5 text-5xl font-bold">Photo Phactory</h1>
              <p className="mb-5">
                Every romantic notion I’ve ever conjured up for a modern yet
                timeless sun-drenched wedding album is perfectly encapsulated in
                every image Jen Huang creates — from delicate details and décor
                to tantalizing food shots and couture-clad, gorgeous brides,
                Jen’s images have it all, and then some
              </p>
              <button className="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section>
        <h1 className="font-extrabold font-serif text-5xl text-teal-200 mb-5 mt-2 text-center">
          Services
        </h1>
        <div className="grid md:grid-cols-3 gap-6 my-7 w-11/12 mx-auto">
          {services.map((service) => (
            <Service key={service._id} service={service}></Service>
          ))}
        </div>
        <Link to="/services" className="flex justify-center mb-5">
          <button className="btn btn-active btn-accent px-10 hover:bg-lime-400">
            See All
          </button>
        </Link>
      </section>

      {/* About us Section */}
      <section>
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row">
            <img
              src={right}
              className="max-w-sm rounded-lg shadow-2xl"
              alt=""
            />
            <div className="p-10">
              <h1 className="text-5xl font-bold">About Us</h1>
              <p className="py-6">
                I approach photography with a romantic, fine art sensibility. My
                imagery is understated yet evocative, resulting from clear and
                polished creative direction that elicits light-filled, painterly
                portraits. My use of fresh and simple composition, and natural
                light has evolved from a deep love and respect for the old
                masters - Rembrandt, Vermeer, Botticelli. I am a fiercely
                dedicated medium format film photographer and my creative
                process is imaginative, industrious and detailed. In each
                capture, I aim for perfection and beauty.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Some Demo Work Section */}
      <section>
        <h1 className="text-5xl font-bold text-emerald-300 mt-10 mb-5 text-center">
          Some Demo Work!
        </h1>
        <DemoWork></DemoWork>
      </section>

      <section className="my-5">
        <FaQ></FaQ>
      </section>
    </>
  );
};

export default Home;
