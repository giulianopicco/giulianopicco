import React, { useState, useEffect } from "react";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";

import { motion } from "framer-motion";

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
          // <section className="grid md:grid-cols-2 lg:grid-cols-3 xl-grid-cols-4 gap-8">
          //   {projects &&
          //     projects.map((project, index) => (
          //       <article className="relative rounded-lg shadow-xl bg-white p-8 md:p-10 lg:p-16">
          //         <h3 className="text-color1 text-3xl font-bold mb-2 hover:text-red-700">
          //           <a href={project.link} alt={project.title} target="_blank">
          //             {project.title}
          //           </a>
          //         </h3>
          //         <div className="text-gray-500 text-xs space-x-4">
          //           {project.date && (
          //             <span>
          //               <strong className="font-gold">Finished on</strong>:{" "}
          //               {new Date(project.date).toLocaleTimeString()}
          //             </span>
          //           )}
          //           <span>
          //             <strong className="font-bold">Company</strong>:&nbsp;
          //             {project.place}
          //           </span>
          //           <span>
          //             <strong className="font-bold">Type</strong>:&nbsp;
          //             {project.projectType}
          //           </span>
          //           <p className="my-6 text-lg text-gray-700 leading-relaxed">
          //             {" "}
          //             {project.description}
          //           </p>

          //           {project.images && (
          //             <div className="flex flex-row">
          //               {project.images.map((img) => (
          //                 <img
          //                   src={img.url}
          //                   alt={img.title}
          //                   className=""
          //                   style={{ width: "100px", height: "auto" }}
          //                 />
          //               ))}
          //             </div>
          //           )}

          //           <a
          //             href={project.link}
          //             rel="noopener noreferrer"
          //             target="_blank"
          //             className="text-color2 font-bold hover:underline text hover:tet-red-400 text-xl"
          //           >
          //             View the project&nbsp;
          //             <span role="img" aria-label="right pointer">
          //               👉
          //             </span>
          //           </a>
          //         </div>
          //       </article>
          //     ))}
          // </section>

          <section className="grid md:grid-cols-1">
            {projects &&
              projects.map((project, index) => (
                <div class="wrapper mb-8 lg:px-16">
                  <div className="grid grid-rows-5 md:grid-rows-1 md:grid-cols-5">
                    <motion.img
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      src={`https://source.unsplash.com/collection/190727/${
                        350 + index
                      }x${350 + index}`}
                      alt=" random imgee"
                      class="w-full h-52 md:h-80  object-cover object-center rounded-lg shadow-md row-start-1 row-end-4 col-start-1 col-end-2 md:col-start-1 md:col-end-5 md:row-start-1 md:row-end-2"
                    />

                    {/* <div class="relative px-4 -mt-16"> */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      class="px-4 row-start-3 row-end-6 col-start-1 col-end-2 md:col-start-4 md:col-end-6 md:row-start-1 md:row-end-2 md:self-center"
                    >
                      <div class="bg-glass-white-strong p-6 rounded-lg shadow-lg">
                        {/* <div class="flex items-baseline">
                          <span class="bg-teal-200 text-teal-800 text-xs px-2 inline-block rounded-full  uppercase font-semibold tracking-wide">
                            New
                          </span>
                          <div class="ml-2 text-gray-600 uppercase text-xs font-semibold tracking-wider">
                            2 baths &bull; 3 rooms
                          </div>
                        </div> */}

                        <h4 class="mt-1 text-xl font-semibold uppercase leading-tight truncate">
                          {project.title}
                        </h4>

                        <div class="mt-1">
                          Company:
                          <span class="text-gray-600 text-sm">
                            {" "}
                            {project.place}
                          </span>
                        </div>
                        {project.date && (
                          <div class="mt-1">
                            Finish on:
                            <span class="text-gray-600 text-sm">
                              {" "}
                              {new Date(project.date).toLocaleDateString()}
                            </span>
                          </div>
                        )}
                        <div class="mt-1">
                          Type:
                          <span class="text-gray-600 text-sm">
                            {" "}
                            {project.projectType}
                          </span>
                        </div>
                        <div class="mt-1 font-bold">{project.description}</div>
                        {/* <div class="mt-4">
                          <span class="text-teal-600 text-md font-semibold">
                            4/5 ratings{" "}
                          </span>
                          <span class="text-sm text-gray-600">
                            (based on 234 ratings)
                          </span>
                        </div> */}
                      </div>
                    </motion.div>
                  </div>
                </div>
              ))}
          </section>
        )}
      </section>
    </main>
  );
};

export default Project;
