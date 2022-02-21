import React, { useState, useEffect } from 'react';
import axios from 'axios';

const apiUrl = 'http://localhost:1337/api/restaurants';

function App() {
  const [restaurantData, setrestaurantData] = useState([]);



  useEffect(() => {
      axios.get(apiUrl).then((res) => {
        
        let rest=[]
        for(let i in res.data.data){
         rest.push(res.data.data[i]["attributes"]["name"]);
         rest.push(res.data.data[i]["attributes"]["contact"]);
         rest.push(res.data.data[i]["attributes"]["description"]);
        }
        setrestaurantData(rest)
      });
    })



  return (
    <div>
      <header>
        <h2>Restaurants Information</h2>
      </header>
      <div>
        <h5>{restaurantData}</h5>

      </div>
    </div>
  );
}




export default App;