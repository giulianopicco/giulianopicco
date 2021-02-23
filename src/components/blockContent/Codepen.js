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
          height={height || "300"}
          preview={false}
        />
      </div>
    );
  }
  return null;
};

export default Codepen;
