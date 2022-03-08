import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import image from "../assets/img/bg-cosmos.webp";
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
        <div className="p-3 pt-16 md:mt-4 lg:p-14 lg:pt-48 container mx-auto relative">
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
              <div className="prose lg:prose-xl text-white">
                <div className="grid grid-cols-3">
                  <div className="flex justify-center items-center gap-2">
                    <svg viewBox="0 0 26 34" height="34" width="25"><path d="M14.001 25.028v-7.224l11.393-6.498-2.77-1.588-8.623 4.918V7.391c0-.491-.265-.95-.69-1.194L2.938.245a1.974 1.974 0 00-2.006.06A1.98 1.98 0 000 1.992v20.375c0 .69.35 1.321.934 1.687a1.973 1.973 0 002.002.061l8.317-4.743v6.457c0 .494.266.952.695 1.196l10.658 6.067 2.771-1.589-11.376-6.475zm-2.748-16.84v8.016l-8.504 4.85V3.31l8.504 4.88z" fill="#03EF62" fill-rule="evenodd"></path></svg>
                    Datacamp
                  </div>
                  <div className="flex justify-center items-center gap-2">
                  <img id="feed-intro" className="logo-img-small max-w-sm" src="https://hrcdn.net/community-frontend/assets/brand/logo-new-white-green-a5cb16e0ae.svg" alt="Hackerrank Home"/>
                    Hackerrank
                  </div>
                  <div className="flex justify-center items-center gap-2">
                    <svg viewBox="0 0 26 34" height="34" width="25"><path d="M14.001 25.028v-7.224l11.393-6.498-2.77-1.588-8.623 4.918V7.391c0-.491-.265-.95-.69-1.194L2.938.245a1.974 1.974 0 00-2.006.06A1.98 1.98 0 000 1.992v20.375c0 .69.35 1.321.934 1.687a1.973 1.973 0 002.002.061l8.317-4.743v6.457c0 .494.266.952.695 1.196l10.658 6.067 2.771-1.589-11.376-6.475zm-2.748-16.84v8.016l-8.504 4.85V3.31l8.504 4.88z" fill="#03EF62" fill-rule="evenodd"></path></svg>
                    Datacamp
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
};

export default About;
