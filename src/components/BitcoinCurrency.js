import React, {useEffect, useState} from 'react';

const BitcoinCurrency = () => {
    const [state, setState] = useState({data: []});

    useEffect(() => {
        setTimeout(() => fetchData(), 10000)
    }, [state]);

    const fetchData = async () => {
        try {
            const response = await fetch('https://api.coindesk.com/v1/bpi/currentprice.json');
            if (!response.ok) {
                throw Error(response.statusText);
            }
            const json = await response.json();
            const updateTime = json.time.updated;
            const euro = json.bpi.EUR
            const euroDescription = euro.description;
            const euroCode = euro.code;
            const euroSymbol = euro.symbol;
            const euroRate = euro.rate;
            const euroRateFloat = euro.rate_float;
            const gbp = json.bpi.GBP;
            const gbpDescription = gbp.description;
            const gbpCode = gbp.code;
            const gbpSymbol = gbp.symbol;
            const gbpRate = gbp.rate;
            const gbpRateFloat = gbp.rate_float;
            const usd = json.bpi.USD;
            const usdDescription = usd.description;
            const usdCode = usd.code;
            const usdSymbol = usd.symbol;
            const usdRate = usd.rate;
            const usdRateFloat = usd.rate_float;
            setState({
                data: json,
                updateTime: updateTime,
                euroDescription: euroDescription,
                euroCode: euroCode,
                euroSymbol: euroSymbol,
                euroRate: euroRate,
                euroRateFloat: euroRateFloat,
                gbpDescription: gbpDescription,
                gbpCode: gbpCode,
                gbpSymbol: gbpSymbol,
                gbpRate: gbpRate,
                gbpRateFloat: gbpRateFloat,
                usdDescription: usdDescription,
                usdCode: usdCode,
                usdSymbol: usdSymbol,
                usdRate: usdRate,
                usdRateFloat: usdRateFloat
            });

            console.log(json);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div>
            <br/><br/>
            <h4>{state.data.disclaimer}</h4>
            <br/>
            <div>
                <h3>{state.data.chartName}</h3>
                <h5>Update Time : {state.updateTime}</h5>
            </div>
            <div className="Currency">
                {state.euroDescription} ({state.euroCode}) &euro; <br/>
                Rate : {state.euroRate} <br/>
                Rate Float : {state.euroRateFloat}
            </div>
            <div className="Currency">
                {state.gbpDescription} ({state.gbpCode}) &pound; <br/>
                Rate : {state.gbpRate} <br/>
                Rate Float : {state.gbpRateFloat}
            </div>
            <div className="Currency">
                {state.usdDescription}s ({state.usdCode}) &#36; <br/>
                Rate : {state.usdRate} <br/>
                Rate Float : {state.usdRateFloat}
            </div>
        </div>

    );
}

export default BitcoinCurrency;