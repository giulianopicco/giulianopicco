// datacamp.js
import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/androidstudio";

const Preview = ({ value }) => {
  //   const { url, height } = value;
  //   if (url != null) {
  //     const [, , , user, , hash] = url.split("/");
  //     return <CodepenEmbed hash={hash} user={user} height={height || "300"} />;
  //   }
  //   return null;

  const { code, language } = value;
  if (!code) return null;
  return (
    <div className="border-l-4 border-pink-700 rounded my-4">
      <SyntaxHighlighter
        // wrapLongLines
        showLineNumbers
        language={"python"}
        style={dark}
      >
        {node.code}
      </SyntaxHighlighter>
    </div>
  );
};

export default {
  name: "datacamp",
  type: "object",
  title: "Datacamp Light",
  fields: [
    {
      name: "code",
      type: "code",
      title: "Datacamp light code",
      options: {
        language: "python",
      },
    },
    {
      name: "height",
      type: "number",
      title: "Pen height",
    },
  ],
  preview: {
    select: {
      url: "code",
    },
    component: Preview,
  },
};
