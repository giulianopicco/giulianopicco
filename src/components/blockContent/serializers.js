import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import dark from "react-syntax-highlighter/dist/esm/styles/hljs/androidstudio";

const serializers = {
  types: {
    code: ({ node = {} }) => {
      const { code, language, highlightedLines } = node;
      console.log(node);
      if (!code) return null;
      return (
        <div className="pb-4">
          <SyntaxHighlighter
            //Todo commit changes
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
  },
};

export default serializers;
