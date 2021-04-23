import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import classes from "./SinglePost.module.css";
import sanityClient from "../client";
import imageUrlBuilder from "@sanity/image-url";
import PortableText from "./blockContent/PortableText";
// import BlockContent from "@sanity/block-content-to-react";
// import ReactMarkdown from "react-markdown";
// import gfm from "remark-gfm";

import LoadingLogo from "./LoadingLogo";
import {
  motion,
  useViewportScroll,
  useSpring,
  useTransform,
} from "framer-motion";

const builder = imageUrlBuilder(sanityClient);
function urlFor(source) {
  return builder.image(source);
}

const SinglePost = () => {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  const [isComplete, setIsComplete] = useState(false);
  const { scrollYProgress } = useViewportScroll();
  const yRange = useTransform(scrollYProgress, [0, 0.9], [0, 1]);
  const pathLength = useSpring(yRange, { stiffness: 400, damping: 90 });

  useEffect(() => yRange.onChange((v) => setIsComplete(v >= 1)), [yRange]);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[slug.current == "${slug}"]{
        title,
        _id,
        slug,
        mainImage{
          asset->{
            _id,
            url
          }
        },
        body,
        "name": author->name,
        "authorImage": author->image
      }`
      )
      .then((data) => setSinglePost(data[0]))
      .catch((err) => console.log(err));
  }, [slug]);

  return (
    <main className="bg-color1 min-h-screen mt-14 lg:mt-28">
      {!singlePost ? (
        <div className="pt-8">
          <LoadingLogo />
        </div>
      ) : (
        <article className="container mx-auto">
          <header className="relative">
            <div className="absolute h-full w-full items-center justify-center p-3 lg:p-8">
              <div className="bg-pink-200 bg-opacity-75 rounded p-3 lg:p-12">
                <h1 class="cursive text-2xl lg:text-5xl mb-4">
                  {singlePost.title}
                </h1>
                <div className="flex justify-center text-gray-800">
                  <img
                    src={urlFor(singlePost.authorImage).url()}
                    alt={singlePost.name}
                    className="w-10 h-10 rounded-full"
                  />
                  <p className="cursive flex items-center pl-2 text-2xl">
                    {singlePost.name}
                  </p>
                </div>
              </div>
            </div>
            <img
              src={singlePost.mainImage.asset.url}
              alt={singlePost.title}
              className="w-full object-cover"
              style={{ height: "400px" }}
            />
          </header>

          <div
            className={[
              classes.blockContent,
              "px-5 md:px-16 lg:px-48 py-12 lg:py-20 prose lg:prose-xl max-w-full text-gray-200",
            ].join(" ")}
          >
            <motion.path
              d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
              style={{ pathLength: scrollYProgress }}
            />
            {/* <ReactMarkdown
              plugins={[gfm]}
              children={singlePost.body}
              projectId="wkgbu7ay"
              dataset="production"
            /> */}
            <PortableText
              className="hello"
              blocks={singlePost.body}
              projectId="wkgbu7ay"
              dataset="production"
            />
          </div>
        </article>
      )}
    </main>
  );
};

export default SinglePost;
