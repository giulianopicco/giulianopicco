import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

import LoadingLogo from "./LoadingLogo";

const Project = () => {
  const [loading, setLoading] = useState(true);
  const [projects, setProjects] = useState(null);

  const builder = imageUrlBuilder(sanityClient);
  function urlFor(source) {
    return builder.image(source);
  }

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          "images":imagesGallery[].asset->{_id, url},
          description,
          projectType,
          link,
          tags,
        }`
      )
      .then((data) => {
        setLoading(false);
        setProjects(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-color1 min-h-screen p-4 lg:p-12 mt-14 lg:mt-28">
      <section className="container mx-auto">
        <h1 className="text-3xl lg:text-5xl text-gray-200 flex justify-center cursive">
          {" "}
          My Projects
        </h1>
        <h2 className="text-lg text-white flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        {loading ? (
          <LoadingLogo />
        ) : (
          <section className="grid md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-8">
            {projects &&
              projects.map((project, index) => (
                <article className="relative rounded-lg shadow-xl bg-white p-8 md:p-10 lg:p-16">
                  <h3 className="text-color1 text-3xl font-bold mb-2 hover:text-red-700">
                    <a href={project.link} alt={project.title} target="_blank">
                      {project.title}
                    </a>
                  </h3>
                  <div className="text-gray-500 text-xs space-x-4">
                    {project.date && (
                      <span>
                        <strong className="font-gold">Finished on</strong>:{" "}
                        {new Date(project.date).toLocaleTimeString()}
                      </span>
                    )}
                    <span>
                      <strong className="font-bold">Company</strong>:&nbsp;
                      {project.place}
                    </span>
                    <span>
                      <strong className="font-bold">Type</strong>:&nbsp;
                      {project.projectType}
                    </span>
                    <p className="my-6 text-lg text-gray-700 leading-relaxed">
                      {" "}
                      {project.description}
                    </p>

                    {project.images && (
                      <div className="flex flex-row">
                        {project.images.map((img) => (
                          <img
                            src={img.url}
                            alt={img.title}
                            className=""
                            style={{ width: "100px", height: "auto" }}
                          />
                        ))}
                      </div>
                    )}

                    <a
                      href={project.link}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="text-color2 font-bold hover:underline text hover:tet-red-400 text-xl"
                    >
                      View the project&nbsp;
                      <span role="img" aria-label="right pointer">
                        👉
                      </span>
                    </a>
                  </div>
                </article>
              ))}
          </section>
        )}
      </section>
    </main>
  );
};

export default Project;
