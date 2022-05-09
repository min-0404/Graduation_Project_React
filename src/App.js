import './App.css';
import Hello from './component/Hello';
import Welcome from './component/Welcome';
import React, {useState, useEffect} from 'react';

function App() {
  const [card, setCard] = useState({
    card: " ",
    category:" ",
    benefits: " ",
    fee: " ",
  });


  useEffect(() => {
      fetch("/3872")
          .then((response) => {
              return response.json();
          })
          .then(data => {
              setCard(data);
          });
  }, []);

  return (
    <div>
      <li>{card.card.id}</li>
      <li>{card.card.name}</li>
      <li>{card.card.company}</li>
      <li>{card.card.type}</li>

      <li>{card.fee.masterMobile}</li>

      
      <li>{card.category[0]}</li>

      
      <li>{card.benefits}</li>





    </div>
  );

}

export default App;
