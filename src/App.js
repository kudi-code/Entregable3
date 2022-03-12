
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBox from './components/SearchBox';
import LocationInfo from './components/LocationInfo';
import ResidentList from './components/ResidentList';

function App() {
   const [location, setLocation] = useState({})

  useEffect(() => {
    const random = Math.floor(Math.random() * 126)+1;
    axios.get(`https://rickandmortyapi.com/api/location/${random}`)
    //Traer un tipo de pokemon
    .then( res => setLocation(res.data))
  },[])
  console.log(location)
  return (
    <div className="App">
      <img src="https://images.squarespace-cdn.com/content/v1/528a31e5e4b00863f1646510/1563383021032-6F2XUJ1QYJMUTK9GFNY6/Rick+And+Morty+Banner+copy.jpg?format=2500w" 
      alt="Rick-and-Morty-Banner"
      className='banner' />
      <h1 className='wiki'>Wiki</h1>
      <SearchBox setLocation= {setLocation}></SearchBox>
        <section className='Info'>

        <LocationInfo location={location}></LocationInfo>
        {/* <ResidentInfo location={location}></ResidentInfo> */}
        <ResidentList characters={location.residents}></ResidentList>
      </section>
     
    </div>
  );
}

export default App;
