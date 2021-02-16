import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/androidstudio";

import Youtube from "./Youtube";

const serializers = {
  types: {
    code: ({ node = {} }) => {
      const { code, language, highlightedLines } = node;
      if (!code) return null;
      return (
        <div className="border-l-4 border-pink-700 rounded my-4">
          <SyntaxHighlighter
            // wrapLongLines
            showLineNumbers
            language={language}
            style={dark}
          >
            {node.code}
          </SyntaxHighlighter>
        </div>
      );
    },
    youtube: Youtube,
  },
};

export default serializers;
