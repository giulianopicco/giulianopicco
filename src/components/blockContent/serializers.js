import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/androidstudio";

import Youtube from "./Youtube";
import Codepen from "./Codepen";
import Python from "./PythonTrinket";
import Datacamp from "./Datacamp";

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
    codepen: Codepen,
    python: Python,
    datacamp: Datacamp,
  },
};

export default serializers;
