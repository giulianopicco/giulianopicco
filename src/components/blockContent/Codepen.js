import React from "react";
import CodepenEmbed from "react-codepen-embed";

const Codepen = ({ node }) => {
  const { url, height } = node;
  if (url != null) {
    const [, , , user, , hash] = url.split("/");
    return (
      <div className="my-4">
        <CodepenEmbed
          hash={hash}
          user={user}
          height={height || "600"}
          preview={false}
          defaultTab="result"
        />
      </div>
    );
  }
  return null;
};

export default Codepen;
