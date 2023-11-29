'use client'

import React, { useEffect, useState} from 'react';
import Details from './Details';
import Overview from './Overview';
import Chart from './Chart';
import Chat from './Chat';
import { useThemeContext } from '../../Context/ThemeContext';
import { supportedStocks, companyCandle, companyPrice, companyProfile } from '../../../api/api.mjs';

import { MockStocks, mockCompanyDetails } from '../../MockData/MockStocks';

import { useStockContext } from '../../Context/StockContext';



const child = {
    title: 'Stocks',
    subtitle: 'Search for a stock to get started',
}

function Dashboard(symbol) {
    const { darkMode } = useThemeContext();
    const [stockDetails, setStockDetails] = useState({});
    const [quote, setQuote] = useState({});

    useEffect(() => {
        const updateStockDetails = async () => {
            try {
                const result = await companyProfile(symbol.symbol);
                setStockDetails(result);
            } catch(error) {
                setStockDetails({});
                console.log(error);
            }
        };
        const updateStockOverview = async () => {
            try {
                const result = await companyPrice(symbol.symbol);
                setQuote(result);
            } catch(error) {
                setQuote({});
                console.log(error);
            }
        };
        updateStockDetails();
        updateStockOverview();
    }, [symbol.symbol]);


    return (
        <div className={`min-h-screen ${darkMode ? "bg-darkMode text-gray-300" : "bg-white text-black" }`}>
            <div className={`pl-20 pr-20 pb-20 pt-5  font-fein transition-all ease-in-out h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid-rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 ${
                darkMode ? "bg-darkMode text-gray-300" : "bg-white text-black"}`}>
                <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex">
                    <h1 className="text-5xl self-center">{stockDetails.name}</h1>
                </div>
                <div className="md:col-span-2 row-span-4">
                    <Chart/>
                </div>
                <div>
                    <Overview 
                        symbol={symbol.symbol} 
                        price={quote.pc}
                        change={quote.d}  
                        changePercent={quote.dp}
                        currency={stockDetails.currency}
                    />
                </div>
                <div className="row-span-2 xl:row-span-3">
                    <Details details={stockDetails}/>
                </div>
                <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex">
                    <div className="h-1/3 self-center justify-center w-full flex">
                        <p className="self-center justify_self-center mx-4">Amount:</p>
                        
                        <input 
                            type="number" 
                            name="quantity"
                            min="1" 
                            step="1"
                            className="border-2 rounded-md w-1/4 p-2 border-gray-300 w-1/4 text-black"
                        />
                        <button className="mx-4 border-2 rounded-md w-36 p-2 font-semibold text-black border-gray-300 bg-gray-300 hover:text-white hover:bg-highlight">Buy</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;