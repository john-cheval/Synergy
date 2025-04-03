import React from "react";

const Bredcumb = ({ title }) => {
  return (
    <>
      <ul className="bredcumb-inline wow fadeInUp">
        <li>
          <a href="/"> Home </a>
        </li>
        <li> - </li>
        {/* <li dangerouslySetInnerHTML={{ __html: title }}> </li> */}
        <li dangerouslySetInnerHTML={{ __html: title }} />
      </ul>
    </>
  );
};

export default Bredcumb;
