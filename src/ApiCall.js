import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ApiCall = () => {
  const [apiData, setApiData] = useState({ trivia_categories: [] });
  const options = {
    method: 'GET',
    url: 'https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_tNEWgTQF3R8piharus7bl0usnTgXl4Ay8WZLzkE7',
    headers: {
      'X-RapidAPI-Key': 'fca_live_tNEWgTQF3R8piharus7bl0usnTgXl4Ay8WZLzkE7',
    }
  };
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.request(options);
        setApiData(response.data);
        console.log(response.data);
        console.log(apiData.data["INR"]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Empty dependency array to run the effect only once when the component mounts

  return (
    <>
    <h1>currency convertor</h1>
    </>
    
  )
};

export default ApiCall;
