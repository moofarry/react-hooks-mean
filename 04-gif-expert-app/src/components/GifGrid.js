import React from "react";
import PropTypes from "prop-types";

import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data: imges, loading } = useFetchGifs(category);

  return (
    <>
      <h3>{category}</h3>
      {loading && (
        <p className="animate__animated animate__heartBeat">Loading</p>
      )}

      <div className="card-grid animate__animated animate__bounce">
        {imges.map((img) => (
          <GifGridItem key={img.id} {...img} />
        ))}
      </div>
    </>
  );
};
GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};
