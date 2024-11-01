import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MarketList = () => {
    const [markets, setMarkets] = useState([]);

    useEffect(() => {
        const fetchMarkets = async () => {
            const response = await axios.get('http://localhost:3000/api/markets');
            setMarkets(response.data);
        };

        fetchMarkets();
    }, []);

    return (
        <div>
            <h2>Current Markets</h2>
            <ul>
                {markets.map(market => (
                    <li key={market.id}>{market.question} - Odds: {market.odds}</li>
                ))}
            </ul>
        </div>
    );
};

export default MarketList;
