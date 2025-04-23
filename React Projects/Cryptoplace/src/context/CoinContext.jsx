import { createContext, useEffect, useState } from "react";
import { data } from "react-router-dom";

export const CoinContext = createContext();

const CoinContextProvider = (props) =>{

    // add state variables to store api data
    const [allCoin, setAllCoin] = useState([]) // get data from api in form of array & store it in allCoin state
    const [currency, setCurrency] = useState({
        name: "usd", // by default currency object is dollar. When it gets updated we make a new api request
        symbol: "$"
    })

    // Execute this function whenever component gets loaded (with useEffect) down below
    const fetchAllCoin = async () =>{
        const options ={
            method: 'GET',
            headers: {
                accept: 'application/json',
                'x-cg-demo-api-key': 'CG-aqDbxHGB8ax5jF6ZwKLyBXpJ',}
        };
        fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency.name}`, options)
            .then(response=>response.json())
            .then(response=>setAllCoin(response))
            .catch(err=> console.error(err));
    }

    // when content gets loaded:
    useEffect(()=>{
        fetchAllCoin()
    },[currency]) // when currency gets updated, we make another api reques

    const contextValue = {// Access this in any component
        // setCurrency to be set in navbar using a dropdown.
        // allCoin & currency to be displayed in 'Home.jsx'
        allCoin, currency, setCurrency 
    }

    return (
        <CoinContext.Provider value={contextValue}>
            {props.children}
        </CoinContext.Provider>
    )
}

export default CoinContextProvider;