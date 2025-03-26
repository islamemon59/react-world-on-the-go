import React from "react";

const Country = ({ country }) => {
  console.log(country);
  return (

      <div>
        <img className="w-full h-60 object-cover rounded-xl" src={country.flags.png} alt="" />
        <h2 className="my-2 text-3xl text-cyan-200">Name: {country.name.common}</h2>
        <h3 className="my-2 text-2xl text-cyan-400">Independent: {country.independent ? "True": "False"}</h3>
        <h3 className="my-2 text-2xl text-cyan-600">Population: {country.population}</h3>
      </div>

  );
};

export default Country;
