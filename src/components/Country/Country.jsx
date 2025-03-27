import React, { useState } from "react";
import './Country.css'

const Country = ({ country }) => {
  console.log(country);

  const [visited, setVisited] = useState(false)

  const handleVisited = () => {
    // if(visited === true){
    //     isVisited(false)
    // }else{
    //     isVisited(true)
    // }
    setVisited(!visited)
  }

  return (

      <div className={`p-6 ${visited && 'bg-gray-700 rounded-xl'}`}>
        <img className="w-full h-60 object-cover rounded-xl" src={country.flags.png} alt="" />
        <h2 className="my-2 text-3xl text-cyan-200">Name: {country.name.common}</h2>
        <h3 className="my-2 text-2xl text-cyan-400">Independent: {country.independent ? "True": "False"}</h3>
        <h3 className="my-2 text-2xl text-cyan-600">Population: {country.population}</h3>
        <button onClick={handleVisited} className="btn bg-cyan-800 hover:bg-cyan-500 text-[18px] mt-2">{visited ? "Visited":"Not visited"}</button>
      </div>

  );
};

export default Country;
