import React from "react";
import image from "../bg-cosmos.jpg";

const Home = () => {
  return (
    <main>
      <img
        src={image}
        alt="cosmos background image"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6x text-green-100 font-bold cursive leading none lg:leading snug home-name">
          "Hello World". I'm Max.
        </h1>
      </section>
    </main>
  );
};

export default Home;
