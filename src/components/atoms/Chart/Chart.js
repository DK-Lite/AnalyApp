import React, { useRef, useEffect, useState } from 'react'
import Chart from 'chart.js'

function ChartTemplate({type, data, options, style}) {
    const chartContainer = useRef();
    const [, setChartInstance] = useState(null);
    const paramter = {
        type: type,
        data: data,
        options: options
    }

    function InitChart(){
        if(chartContainer && chartContainer.current) {
            const newChartInstance = new Chart(chartContainer.current, paramter);
            setChartInstance(newChartInstance);
        }
    }
    useEffect(InitChart, [chartContainer]);
    
    return (
        <div>
            <canvas  
                style= {style} 
                ref={chartContainer} />
        </div>
    )
}

export default ChartTemplate;
