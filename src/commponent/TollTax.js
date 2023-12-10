import React from 'react';


const TollTax = () => {
    return (
        <div className="toll-tax-container">
            <h1 className='sett'>Welcome to the Toll Tax Page</h1>
            <p className="description">
                Toll taxes are fees collected for the use of specific roads or bridges.
                They play a crucial role in maintaining and improving transportation
                infrastructure. Here's what you need to know:
            </p>
            <ul>
                <li>
                    <strong>Toll Rates:</strong> Understand the rates for different
                    vehicle types. Rates may vary based on the type of road and distance.
                </li>
                <li>
                    <strong>Exemptions and Discounts:</strong> Learn about exemptions for
                    certain vehicles (e.g., emergency vehicles) and available discounts
                    for frequent travelers or specific categories.
                </li>
                <li>
                    <strong>Regulations:</strong> Stay informed about the latest toll tax
                    regulations in your area. Regulations may include payment methods,
                    time-of-day pricing, and more.
                </li>
                <li>
                    <strong>Payment Options:</strong> Explore convenient payment options
                    such as electronic toll collection (ETC), mobile apps, and prepaid
                    toll cards.
                </li>
            </ul>
            <p className="explore-message">
                Explore the Toll Tax page to enhance your understanding of the toll
                system and plan your journeys more efficiently.
            </p>
        </div>
    );
};

export default TollTax;
