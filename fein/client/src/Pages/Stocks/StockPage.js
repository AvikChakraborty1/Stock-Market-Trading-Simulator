import React, {useState, useEffect} from 'react';
import './StockPage.css';

import { Navbar } from "../../Components/Navbar/Navbar.js";
import { useParams } from 'react-router-dom';
import SearchBar from '../../Components/Common/SearchBar.js';
import Dashboard from '../../Components/StockComponents/Dashboard.js';


export function StockPage() {

    const { id } = useParams();

    return(
        <div>
            <Navbar />
            <Dashboard />
        </div>

    );
}