
import React, { useState } from 'react';


const TollCalculator = () => {

    const [vehicleType, setVehicleType] = useState('')
    const [distance, setDistance] = useState('');
    const [tollFee, setTollFee] = useState(null);
    const[showError,setShowError]=useState(false)



    function calculateToll() {
        const rateMap = {
            car: 0.1,
            bike: 0.05,
            truck: 0.2,
        };

        const rate = rateMap[vehicleType];

        if (rate !== undefined && distance !== '') {
            const calculateFee = rate * parseFloat(distance);
            setTollFee(calculateFee.toFixed(2));
            setShowError(false);
        } else {
            setTollFee(null);
            setShowError(true);
        }
    }

    function handleChange(e) {
        setVehicleType(e.target.value);
    }

    function handleChange2(e) {
        setDistance(e.target.value);
    }


    return (
        <div className='tollCalculator'>
            <div id='vehicleConatiner'>
                <h1>Toll Calculator</h1>
            <label>Vehicle Type </label>
            <select value={vehicleType} onChange={handleChange}>
                <option value="select"></option>
                <option value="car">car</option>
                <option value="bike">bike</option>
                <option value="truck">truck</option>
            </select>
            <label >Enter Distance (in miles)</label>
            <input type="number" onChange={handleChange2} value={distance} />

            <button  onClick={calculateToll}>Calculate Toll</button>

            {showError && (
                <div id="error">
                    <p>Please select a valid vehicle type and enter a distance.</p>
                    </div>
            )}

            {tollFee !== null &&  !showError &&(
                <div id="result">
                    <h2>Toll Fee:</h2>
                    <p>${tollFee}</p>
                </div>
            )}
            </div>
        </div>

    )

};

export default TollCalculator;


