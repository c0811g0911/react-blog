import React from "react";

import Article from "../Article";
import Pagination from "../Pagination";

const Welcome = () => {
  return (
    <main className="main-content bg-gray">
      <div className="row">
        <div className="col-12 col-lg-6 offset-lg-3">
          <Article />

          <hr />
          <Article />

          <hr />
          <Article />

          <hr />
          <Article />

          <Pagination />
        </div>
      </div>
    </main>
  );
};

export default Welcome;
