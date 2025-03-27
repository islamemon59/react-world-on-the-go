import React, { use } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {
  const countries = use(countriesPromise);
//   console.log(countries);
  return (
    <div>
      <h1 className="text-cyan-400 text-center mb-10 font-bold md:text-6xl text-3xl">
        Traveling Countries:{countries.length}
      </h1>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {countries.map((country) => (
          <Country key={country.cca3} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
