import React, { useEffect } from "react";

const Datacamp = ({ node = {} }) => {
  console.log(node);
  const { code: _code } = node;
  const { code } = _code;
  console.log(code);
  function createMarkup() {
    return { __html: code };
  }

  useEffect(() => {
    const script = document.createElement("script");

    script.src = "//cdn.datacamp.com/dcl-react.js.gz";
    script.async = true;
    script.type = "text/javascript";

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [code]);

  return (
    // <pre>
    //   <code>{JSON.stringify(code)}</code>
    // </pre>
    <div data-datacamp-exercise data-show-run-button data-lang="python">
      <code data-type="pre-exercise-code"> # no pec </code>
      <code
        data-type="sample-code"
        dangerouslySetInnerHTML={createMarkup()}
      ></code>
    </div>
  );
};

export default Datacamp;
