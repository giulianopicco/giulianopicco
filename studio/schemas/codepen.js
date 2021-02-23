// codepen.js
import React from "react";
import CodepenEmbed from "react-codepen-embed";

const Preview = ({ value }) => {
  const { url, height } = value;
  if (url != null) {
    const [, , , user, , hash] = url.split("/");
    return <CodepenEmbed hash={hash} user={user} height={height || "300"} />;
  }
  return null;
};

export default {
  name: "codepen",
  type: "object",
  title: "Codepen Embed",
  fields: [
    {
      name: "url",
      type: "url",
      title: "Codepen pen URL",
    },
    {
      name: "height",
      type: "number",
      title: "Pen height",
    },
  ],
  preview: {
    select: {
      url: "url",
    },
    component: Preview,
  },
};
