import React, { use, useState } from 'react';
import Country from './Country/Country';
import '../Countries/Countries.css'

const Countries = ({countriesPromise}) => {
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])
    const handleVisitedCountries = (country) => {
        // console.log("visitesd", country)
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries)
    }

    const handleVisitedFlags = (flags) => {
        // console.log('visited flags', flags)
        const newVisitedFlags = [...visitedFlags, flags]
        setVisitedFlags(newVisitedFlags)
    }

    const countriesData = use(countriesPromise)
    const countries = countriesData.countries 
    // console.log(countries)
    return (
        <div>
            <h1>ALL Countries Details: {countries.length}</h1>
            <h3>Total Country Visited: {visitedCountries.length}</h3>
            <h3>Total Visited Flags: {visitedFlags.length}</h3>
            <ol>
                {
                    visitedCountries.map(country => <li key={country.cca3.cca3}>{country.name.common}</li>)
                }
            </ol>
            <div>
                {
                    visitedFlags.map((flags, index) => <img key={index} src={flags}></img>)
                }
            </div>
            <div className='countries'>
                {
                countries.map(country => <Country key={country.cca3.cca3} country={country} handleVisitedCountries={handleVisitedCountries} handleVisitedFlags={handleVisitedFlags}></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;