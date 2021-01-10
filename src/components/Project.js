import Reactm, { useState, useEffect } from "react";
import sanityClient from "../client";

const Project = () => {
  const [projects, setProjects] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "project"]{
          title,
          date,
          place,
          description,
          projectType,
          link,
          tags,
        }`
      )
      .then((data) => setProjects(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <main className="bg-indigo-200 min-h-screen px-3 pt-12 lg:p-12 lg:mt-28">
      <section className="container mx-auto">
        <h1 className="text-5xl flex justify-center cursive text-color1">
          {" "}
          My Projects
        </h1>
        <h2 className="text-lg text-gray-600 flex justify-center mb-12">
          Welcome to my projects page!
        </h2>
        <section className="grid lg:grid-cols-2 gap-8">
          {projects &&
            projects.map((project, index) => (
              <article className="relative rounded-lg shadow-xl bg-white p-16">
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
      </section>
    </main>
  );
};

export default Project;
