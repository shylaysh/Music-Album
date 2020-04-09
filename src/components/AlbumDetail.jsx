import React from "react";

const AlbumDetail = ({ id, albm, increase, decrease, remove }) => {
  return (
    <div className="row mt-2">
      <div className="col badge bg-light mx-2" style={{ columnWidth: "40px" }}>
        <h5> {albm.album}</h5>
      </div>

      <div className="col badge bg-light mx-2" style={{ columnWidth: "40px" }}>
        <h5> {albm.artist}</h5>
      </div>
      <div className="col badge bg-light mx-2" style={{ columnWidth: "40px" }}>
        <h5>{albm.released}</h5>
      </div>
      <div className="col badge bg-light mx-2" style={{ columnWidth: "40px" }}>
        <h5> {albm.genre} </h5>
      </div>
      <div
        className="col badge"
        style={{ columnWidth: "40px", margin: "auto" }}
      >
        <button
          className="btn-success p-2 ml-4"
          onClick={() => decrease(id, albm.count)}
        >
          -
        </button>
        <span className="ml-4">{albm.count}</span>
        <button
          className="btn-success p-2 ml-4"
          onClick={() => increase(id, albm.count)}
        >
          +
        </button>
      </div>
      <div className="col">
        <center>
          <span className="btn btn-danger mr-4" onClick={() => remove(id)}>
            Delete
          </span>
        </center>
      </div>
    </div>
  );
};

export default AlbumDetail;
