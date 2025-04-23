import React, { useEffect, useState } from 'react'
import Chart from 'react-google-charts'

const LineChart = ({historicalData}) => { // destructure historicalData from Coin.jsx

    const [data, setData] = useState([["Date","Prices"]]) // an array of arrays

    useEffect(()=>{
        let dataCopy = [["Data","Prices"]]
        if(historicalData.prices){ // if available
            historicalData.prices.map((item)=>{
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`, item[1]]) // Date() to convert the number in the local format
            })
            setData(dataCopy)
        }// 4/28
    },[historicalData])

  return (
    <Chart
        chartType='LineChart'
        data={data} //equals data state variable
        height="100%"
        legendToggle
    />
  )
}

export default LineChart
