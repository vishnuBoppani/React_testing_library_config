import React, { useState } from "react";

{/* funcational component and arrow functions */ }
const CountriesDropdown = () => {
    const [country, setCountry] = useState({ name: '', value: '', cities: [] },
    );
    const countrisJson = [
        { name: 'india', value: 'IN', cities: ['delhi', "hyderabad", "mumbai", "Bangalore"] },
        { name: 'America', value: 'USA', cities: ['USA-delhi', "USA-hyderabad", "USA-mumbai", "USA-Bangalore"] }
    ]
    // const countryChangeFun = (e) => {
    //     console.log('ee', e.target.value)
    //     setCountry(e.target.value);
    // }
    return (
        <div className="dropdown">
            <h4>please select</h4>
            <select onChange = {(e) => {
        console.log('ee', e.target.value)
        setCountry(e.target.value)}}
        >
                {countrisJson.map((item, index) => {
                    return <option>{item.name}</option>
                })
                }
            </select>
            {/* <select value={country}>
            {countrisJson[country].citiies.map((item, index)=>{
                return <option value={item.value}>{item}</option> 
            })}
            </select> */}
        </div>
    )
}

export default CountriesDropdown;