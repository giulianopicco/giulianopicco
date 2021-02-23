import React from "react";

const PythonTrinket = ({ node }) => {
  const { url, height } = node;
  if (url != null) {
    const [, , , , hash] = url.split("/");
    console.log(url.split("/"));
    return (
      <div className="my-4">
        <iframe
          src={`https://trinket.io/embed/python3/${hash}`}
          width="100%"
          height={height || "300"}
        ></iframe>
      </div>
    );
  }
};

export default PythonTrinket;
