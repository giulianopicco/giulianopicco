import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import image from "../assets/img/bg-cosmos.jpg";
import imageUrlBuilder from "@sanity/image-url";
import BlockContent from "@sanity/block-content-to-react";

import classes from "./Home.module.scss";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const About = () => {
  const [author, setAuthor] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `
      *[_type == "author"]{
        name,
        bio,
        "authorImage": image.asset->url
      }
    `
      )
      .then((data) => setAuthor(data[0]))
      .catch((err) => console.log(err));
  }, [author]);

  if (!author) return <div>Loading...</div>;

  return (
    <main>
      <section className="h-screen relative">
        <img
          src={image}
          alt="cosmos background"
          className="absolute object-cover w-full h-full"
        />
        <div className={classes.stars}></div>
        <div className={classes.stars2}></div>
        <div className={classes.stars3}></div>
        <div className="p-3 pt-16 lg:p-14 lg:pt-48 container mx-auto relative">
          <section className="bg-glass-color1-strong rounded-lg shadow-2xl flex flex-col lg:flex-row p-8 lg:p-20">
            <img
              src={urlFor(author.authorImage).url()}
              alt={author.name}
              className="w-32 h-32 lg:w-64 lg:h-64 lg:mr-8 rounded-full self-center ring-4 ring-gray-200"
            />
            <div className="text-lg flex flex-col justify-center mt-8 lg:mt-auto">
              <h1 className="cursive text-3xl lg:text-6xl text-pink-400 mb-4">
                Hey there. I'm{" "}
                <span className="text-pink-100">{author.name}</span>
              </h1>
              <div className="prose lg:prose-xl text-white">
                <BlockContent
                  blocks={author.bio}
                  projectId="wkgbu7ay"
                  dataset="production"
                />
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
