
import React, { useState } from 'react';


const TollCalculator = () => {

    const [vehicleType, setVehicleType] = useState('')
    const [distance, setDistance] = useState('');
    const [tollFee, setTollFree] = useState(null);



    function calculateToll() {
        const rateMap = {
            car: 0.1,
            bike: 0.05,
            truck: 0.2,
        };

        const rate = rateMap[vehicleType];
        const calculateFee = rate * parseFloat(distance);

        setTollFree(calculateFee.toFixed(2));
    }

    function handleChange(e) {
        setVehicleType(e.target.value);
    }

    function handleChange2(e) {
        setDistance(e.target.value);
    }


    return (
        <div>
            <h1>Toll Calculator</h1>
            <label>vehicle Type </label>
            <select value={vehicleType} onChange={handleChange}>
                <option value="select"></option>
                    <option value="car">car</option>
                    <option value="bike">bike</option>
                    <option value="truck">truck</option>
                </select>
            {/* <input
                type="text"
                placeholder="Enter vehicle type"
                value={vehicleType}
                onChange={handleChange}
            /> */}


            <label >Enter Distance (in miles)</label>
            <input type="number" onChange={handleChange2} value={distance} />

            <button onClick={calculateToll}>Calculate Toll</button>

            {tollFee !== null && (
                <div>
                    <h2>Toll Fee:</h2>
                    <p>${tollFee}</p>
                </div>
            )}
        </div>

    )

};

export default TollCalculator;


