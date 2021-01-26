import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import LoadingLogo from "./LoadingLogo";

const Post = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        }
      }`
      )
      .then((data) => {
        setPosts(data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return (
    <main className="bg-color1 min-h-screen p-4 lg:p-12 mt-14 lg:mt-28">
      <section className="container mx-auto">
        <h1 className="text-3xl lg:text-5xl text-gray-200 flex justify-center cursive">
          Blog Posts Page
        </h1>
        <h2 className="text-lg text-white flex justify-center mb-12">
          Welcome to my page of posts
        </h2>
        {isLoading ? (
          <LoadingLogo />
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-col-3 gap-8">
            {posts &&
              posts.map((post, index) => (
                <article>
                  <Link
                    to={`/post/${post.slug.current}`}
                    key={post.slug.current}
                  >
                    <span
                      className="block h-64 relative rounded shadow leading-snug bg-white border-l-8 border-indigo-500"
                      key={index}
                    >
                      <img
                        src={post.mainImage.asset.url}
                        alt={post.mainImage.alt}
                        className="w-full h-full rounded-r object-cover absolute"
                      />
                      <span className="relative h-full flex justify-end items-end pr-4 pb-4">
                        <h3 className="text-lg font-blog px-3 py-4 bg-pink-700 text-red-100 bg-opacity-75 rounded">
                          {post.title}
                        </h3>
                      </span>
                    </span>
                  </Link>
                </article>
              ))}
          </div>
        )}
      </section>
    </main>
  );
};

export default Post;
