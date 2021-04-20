import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";
import LoadingLogo from "./LoadingLogo";
import TextTruncate from "react-text-truncate";

import { motion, AnimateSharedLayout } from "framer-motion";

const Posts = () => {
  const [posts, setPosts] = useState(null);
  const [author, setAuthor] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        _id,
        title,
        description,
        publishedAt,
        slug,
        author->{
          name,
          image{asset->{
          _id,
          url
        }}
        },
        mainImage{
          asset->{
            _id,
            url
          },
          alt
        },
        "categories": categories[]->title
      }`
      )
      .then((data) => {
        setPosts(data);
        setAuthor(data[0].author);
        setFilteredPosts(data);
        setIsLoading(false);
        let _categories = data
          .map((post) => post.categories)
          .reduce((postsAcumulator, currenPost) =>
            postsAcumulator.concat(currenPost)
          );
        setCategories(["All", ...new Set(_categories)]);
      })
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    console.log(selectedCategory);
    if (selectedCategory === "All") {
      setFilteredPosts(posts);
    } else {
      setFilteredPosts(
        posts.filter((post) => post.categories.includes(selectedCategory))
      );
    }
  }, [selectedCategory]);

  return (
    <main className="bg-color1 min-h-screen lg:p-12 mt-14 pt-4 lg:mt-28">
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
          <div className="px-4 md:px-6 pb-8 lg:py-8">
            <div className="flex justify-between container mx-auto">
              <div className="w-full lg:w-8/12">
                <div className="flex items-center justify-between">
                  <h1 className="hidden lg:block text-xl font-bold text-gray-200 md:text-2xl">
                    Posts
                  </h1>
                  {/* <div>
                    <select className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50">
                      <option>Latest</option>
                      <option>Last Week</option>
                    </select>
                  </div> */}
                </div>

                <div className="flex lg:hidden pt-2 items-center justify-between">
                  <h1 className="text-xl font-bold text-gray-200 md:text-2xl">
                    Categories
                  </h1>
                  <div>
                    <select
                      value={selectedCategory}
                      onChange={(e) => {
                        setSelectedCategory(e.target.value);
                      }}
                      className="w-full p-2 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                    >
                      {categories &&
                        categories.map((category, index) => (
                          <option key={index}>{category}</option>
                        ))}
                    </select>
                  </div>
                </div>

                {filteredPosts &&
                  filteredPosts.map((post, index) => (
                    <AnimateSharedLayout>
                      <motion.div layout key={post.id} className="mt-8">
                        <div className="max-w-4xl bg-white rounded-lg shadow-md border-l-4 md:border-l-8 border-indigo-500">
                          {/* TODO check image dimension */}
                          <div className="image-wrapper relative h-0 pb-9/16">
                            <img
                              src={post.mainImage.asset.url}
                              alt={post.mainImage.alt}
                              // className="w-full max-w-4xl h-80 rounded-tr object-cover "
                              className="absolute w-full h-full inset-0 object-cover rounded-tr"
                            />
                          </div>
                          <div className="px-6 md:px-10 py-6">
                            <div className="flex justify-between items-center">
                              <span className="font-light text-gray-600">
                                {post.publishedAt &&
                                  new Date(
                                    post.publishedAt
                                  ).toLocaleDateString()}
                              </span>
                              <div className="grid grid-flow-col gap-2">
                                {post.categories &&
                                  post.categories.map((category) => (
                                    <a
                                      key={category}
                                      href="#!"
                                      onClick={() =>
                                        setSelectedCategory(category)
                                      }
                                      className="px-2 py-1 bg-gray-600 text-gray-100 font-bold rounded hover:bg-gray-500"
                                    >
                                      {category}
                                    </a>
                                  ))}
                              </div>
                            </div>
                            <div className="mt-2">
                              <Link to={`/post/${post.slug.current}`}>
                                <h3 className="text-2xl text-gray-700 font-bold hover:underline">
                                  {post.title}
                                </h3>
                              </Link>
                              <p className="mt-2 text-gray-600">
                                <TextTruncate
                                  line={4}
                                  element="span"
                                  truncateText="…"
                                  text={post.description}
                                />
                              </p>
                            </div>
                            <div className="flex justify-between items-center mt-4">
                              <Link
                                to={`/post/${post.slug.current}`}
                                className="text-indigo-600 font-bold hover:underline"
                              >
                                Read more
                              </Link>
                              <div>
                                <a href="#" className="flex items-center">
                                  <img
                                    src={post.author.image.asset.url}
                                    alt="avatar"
                                    className="mx-4 w-10 h-10 object-cover rounded-full hidden sm:block"
                                  />
                                  <h1 className="text-gray-700 font-bold hover:underline">
                                    {post.author.name}
                                  </h1>
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </AnimateSharedLayout>
                  ))}

                {/* <div className="mt-8">
                  <div className="flex">
                    <a
                      href="#"
                      className="mx-1 px-3 py-2 bg-white text-gray-500 font-medium rounded-md cursor-not-allowed"
                    >
                      previous
                    </a>

                    <a
                      href="#"
                      className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                    >
                      1
                    </a>

                    <a
                      href="#"
                      className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                    >
                      2
                    </a>

                    <a
                      href="#"
                      className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                    >
                      3
                    </a>

                    <a
                      href="#"
                      className="mx-1 px-3 py-2 bg-white text-gray-700 font-medium hover:bg-blue-500 hover:text-white rounded-md"
                    >
                      Next
                    </a>
                  </div>
                </div> */}
              </div>
              <div className="-mx-8 w-4/12 hidden lg:block">
                <div className="px-8">
                  <h1 className="mb-4 text-xl font-bold text-gray-200">
                    Authors
                  </h1>
                  <div className="flex flex-col bg-white max-w-sm px-6 py-4 mx-auto rounded-lg shadow-md md:border-l-6 lg:border-l-8 border-pink-700">
                    <ul className="-mx-4">
                      <li className="flex items-center">
                        <img
                          src={author.image.asset.url}
                          alt="avatar"
                          className="w-10 h-10 object-cover rounded-full mx-4"
                        />
                        <p>
                          <a
                            href="#"
                            className="text-gray-700 font-bold mx-1 hover:underline"
                          >
                            {author.name}
                          </a>
                          <span className="text-gray-700 text-sm font-light">
                            Created {posts.length} Posts
                          </span>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="mt-10 px-8">
                  <h1 className="mb-4 text-xl font-bold text-gray-200">
                    Categories
                  </h1>
                  <div className="flex flex-col bg-white px-4 py-6 max-w-sm mx-auto rounded-lg shadow-md md:border-l-6 lg:border-l-8 border-pink-700">
                    <ul>
                      {categories &&
                        categories.map((category, index) => (
                          <li
                            key={category}
                            className={index > 0 ? "mt-2" : ""}
                          >
                            <p
                              href="#"
                              onClick={() => setSelectedCategory(category)}
                              className={
                                selectedCategory === category
                                  ? "text-pink-700 cursor-pointer font-bold mx-1 hover:text-gray-600 hover:underline"
                                  : "text-gray-700 cursor-pointer font-bold mx-1 hover:text-gray-600 hover:underline"
                              }
                            >
                              - {category}
                            </p>
                          </li>
                        ))}
                    </ul>
                  </div>
                </div>
                {/* <div className="mt-10 px-8">
                  <h1 className="mb-4 text-xl font-bold text-gray-200">
                    Recent Post
                  </h1>
                  <div className="flex flex-col bg-white px-8 py-6 max-w-sm mx-auto rounded-lg shadow-md">
                    <div className="flex justify-center items-center">
                      <a
                        href="#"
                        className="px-2 py-1 bg-gray-600 text-sm text-green-100 rounded hover:bg-gray-500"
                      >
                        Laravel
                      </a>
                    </div>
                    <div className="mt-4">
                      <a
                        href="#"
                        className="text-lg text-gray-700 font-medium hover:underline"
                      >
                        Build Your New Idea with Laravel Freamwork.
                      </a>
                    </div>
                    <div className="flex justify-between items-center mt-4">
                      <div className="flex items-center">
                        <img
                          src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=731&amp;q=80"
                          alt="avatar"
                          className="w-8 h-8 object-cover rounded-full"
                        />
                        <a
                          href="#"
                          className="text-gray-700 text-sm mx-3 hover:underline"
                        >
                          Alex John
                        </a>
                      </div>
                      <span className="font-light text-sm text-gray-600">
                        Jun 1, 2020
                      </span>
                    </div>
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default Posts;
