import React, { useState } from "react";
import './Country.css'

const Country = ({ country, handleVisitedCountries, handleVisitedFlags, visitedFlag}) => {
  // console.log(country);
  const [visited, setVisited] = useState(false)

  // console.log(handleVisitedCountries)

  const handleVisited = () => {
    // if(visited === true){
    //     isVisited(false)
    // }else{
    //     isVisited(true)
    // }
    setVisited(!visited)
    handleVisitedCountries(country)
  }

  return (

      <div className={`p-6 ${visited && 'bg-gray-700 rounded-xl'}`}>
        <h2 className="my-2 text-3xl text-cyan-200">Name: {country.name.common}</h2>
        <img className="w-full h-60 object-cover rounded-xl" src={country.flags.png} alt="" />
        <h3 className="my-2 text-2xl text-cyan-400">Independent: {country.independent ? "True": "False"}</h3>
        <h3 className="my-2 text-2xl text-cyan-600">Population: {country.population}</h3>
        <button className={`btn mr-6 hover:bg-cyan-500 text-[18px] mt-2 ${visited ? 'bg-cyan-400': 'bg-cyan-800'}`} onClick={handleVisited}>{visited ? "Visited":"Not visited"}</button>
        <button onClick={() => handleVisitedFlags(country.flags.png, visited)} className="btn  hover:bg-cyan-500 text-[18px] mt-2">Add Visited Flag</button>
      </div>

  );
};

export default Country;
