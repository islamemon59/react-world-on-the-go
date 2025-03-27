import React, { use, useState } from "react";
import Country from "../Country/Country";

const Countries = ({ countriesPromise }) => {

  const [visitedCountries, setVisitedCountries] = useState([])
  const [visitedFlags, setVisitedFlags] = useState([])
  // const [visitedFlag, setVisitedFlag] = useState(false)

  const countries = use(countriesPromise);

  const handleVisitedFlags =(flags, country) => {
    console.log("I am the flags", flags)
    const newVisitedFlag = [...visitedFlags, flags]
    setVisitedFlags(newVisitedFlag)
    // setVisitedFlag(!visitedFlag)
  }

  const handleVisitedCountries = (country) => {
    console.log("i visited this countries", country)
    const newVisitedCountries = [...visitedCountries, country]
    setVisitedCountries(newVisitedCountries)
  }

  return (
    <div>
      <h1 className="text-cyan-400 text-center mb-10 font-bold md:text-6xl text-3xl">
        Traveling Countries:{countries.length}
      </h1>
      <h2 className="text-2xl mb-6">Total visited countries: {visitedCountries.length}</h2>
      <div className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4">
      {
          visitedFlags.map((flag, index) => <img key={index} className="h-28 w-full" src={flag}></img>)
        }
      </div>
      <ol className="grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 gap-4 mb-6">
        {
          visitedCountries.map(countries => {
            return(
              <div key={countries.cca3}>
                <li className="text-xl">{countries.name.common}</li>
                <img key={countries.cc2} className="h-28 w-full" src={countries.flags.png} alt="" />
              </div>
            )
          })
        }
      </ol>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {countries.map((country) => (
          <Country 
          key={country.cca3} 
          handleVisitedCountries={handleVisitedCountries}
          handleVisitedFlags={handleVisitedFlags}
          // visitedFlag={visitedFlag}
          country={country}>
          </Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
