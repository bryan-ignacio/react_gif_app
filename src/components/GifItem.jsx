import React from "react";

export const GifItem = ({ titulo, url, id }) => {
  return (
    <div className="card">
      <img src={url} alt={titulo} />
    </div>
  );
};
