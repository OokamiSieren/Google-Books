import React from "react";
import Jumbotron from "../components/Jumbotron";
import Footer from "../components/Footer";

function NoMatch() {
  return (
    <div className="containter">
      <div className="row">
        <div className="col-md-12">
          <Jumbotron>
            <h1 className="text-center">404 Page Not Found</h1>
            <h1 className="text-center">
              <span role="img" aria-label="Face With Rolling Eyes Emoji">
                🙄
              </span>
            </h1>
          </Jumbotron>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default NoMatch;
