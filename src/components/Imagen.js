import React from "react";

export const Imagen = ({ imagen }) => {
  return (
    <>
      <div className="pt-5 flex justify-evenly text-center pr-5 pl-5">
        <div className="pr-10">
            <p className="text-2xl font-bold">{imagen.title}</p>
            <p className="text-xl font-semibold text-justify">{imagen.explanation}</p>
            <p className="text-xl font-semibold text-justify pt-5">Date: {imagen.date}</p>
            <p className="text-xl font-bold text-justify pt-5">Author: {imagen.copyright}</p>
        </div>
        <img src={imagen.url} width={600} />
      </div>
    </>
  );
};
