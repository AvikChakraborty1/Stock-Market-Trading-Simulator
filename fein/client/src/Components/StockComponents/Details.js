import React from 'react';
import Card from './Card';

const Details = ({ details }) => {
    const detailsList =  {
        name: "Name", 
        country: "Country",
        currency: "Currency",
        exchange: "Exchange",
        ipo: "IPO",
        marketCapitalization: "Market Capitalization",
        finnhubIndustry: "Industry",
    };

    const convertMilliontoBillion = (number) => {
        return (number / 1000).toFixed(2);
    }

    return (
        <Card>
            <ul className="w-full h-full flex flex-col justify-between divide-y-1">
                {Object.keys(detailsList).map((key) => {
                    return (
                        <li className="flex-1 flex justify-between items-center" key={key}>
                                <span>{detailsList[key]}</span>
                                <span>{key === "marketCapitalization" ? `${convertMilliontoBillion(details[key])}B` : details[key]}</span>
                        </li>
                    )
                })}
            </ul>
        </Card>
    )
}

export default Details;