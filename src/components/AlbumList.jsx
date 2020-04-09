import React, { useState } from "react";
import { albumData } from "../albumData";
import AlbumDetail from "./AlbumDetail";
import Heading from "./heading";

const AlbumList = () => {
  const [albums, setAlbums] = useState(albumData);

  const increment = (id) => {
    let tempAlbums = [...albums];
    tempAlbums[id].count++;
    setAlbums(tempAlbums);
  };

  const decrement = (id) => {
    let tempAlbums = [...albums];
    tempAlbums[id].count--;
    setAlbums(tempAlbums);
  };

  const deleteit = (id) => {
    let fltAlbums = albums.filter((val, index) => index !== id);
    setAlbums(fltAlbums);
  };

  const totalCounts = albums.map((val) => val.count);
  const arrSum = (arr) => arr.reduce((a, b) => a + b, 0);
  const total = arrSum(totalCounts);

  return (
    <React.Fragment>
      <Heading ttl={total} />

      {albums.map((eachAlbum, index) => (
        <AlbumDetail
          key={index}
          id={index}
          albm={eachAlbum}
          decrease={decrement}
          increase={increment}
          remove={deleteit}
        />
      ))}
    </React.Fragment>
  );
};

export default AlbumList;
