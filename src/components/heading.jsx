import React from "react";

const Heading = ({ ttl }) => {
  return (
    <div className="row mt-5 table">
      <div
        className="col text-white bg-info mx-2 py-2"
        style={{ columnWidth: "40px" }}
      >
        <h4>Album</h4>
      </div>
      <div
        className="col text-white bg-info mx-2 py-2"
        style={{ columnWidth: "40px" }}
      >
        <h4> Artist</h4>
      </div>
      <div
        className="col text-white bg-info mx-2 py-2"
        style={{ columnWidth: "40px" }}
      >
        <h4>Released year </h4>
      </div>
      <div
        className="col text-white bg-info mx-2 py-2"
        style={{ columnWidth: "40px" }}
      >
        <h4> Genre </h4>
      </div>
      <div className="col bg-warning mx-2 pt-3">
        <h6>
          <span>How many albums</span>
          <br></br> <span>you wanna buy?</span>
        </h6>
      </div>
      <div
        className="col border border-primary"
        style={{ background: "#e6e6e6" }}
      >
        <center>
          <h6>
            Total albums <br></br>in your cart <br></br>
            <span className="badge bg-secondary border border-info text-white mt-2 mr-1 px-3">
              <h4>{ttl}</h4>
            </span>
          </h6>
        </center>
      </div>
    </div>
  );
};

export default Heading;
