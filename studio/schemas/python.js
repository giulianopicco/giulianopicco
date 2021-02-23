// codepen.js
import React from "react";

const Preview = ({ value }) => {
  const { url, height } = value;
  if (url != null) {
    const [, , , , hash] = url.split("/");
    return (
      <iframe
        src={`https://trinket.io/embed/python3/${hash}`}
        width="100%"
        height={height || "300"}
      ></iframe>
    );
  }
  return null;
};

export default {
  name: "python",
  type: "object",
  title: "Python embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Python trinket URL",
    },
    {
      name: "height",
      type: "number",
      title: "Trinket height",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
