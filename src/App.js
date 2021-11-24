import "./App.css"
import {useEffect} from 'react'
import axios from 'axios'
import Navbar from "./components/Navbar.js";
import Header from './components/Header.js';
// import DisplayPhotos from './components/DisplayPhotos';

// import {Component} from 'react'
import './components/Navbar.css'
import BottomHeader from "./components/BottomHeader";
 
// Make an API call to the Unsplash API
 //Collect data based on search parameters for "camping"
 // Store the results of the API call in a state 
 // create a onClick call out function for the explore button that will evntually
 // Dipslay photo results on camp page.

// event listeners
// exploreBtn.addEventListeners('click', exploreGallery);

// get list that matches with camping
// function getCampImages(){
//   let exploreButton  = document.getElmenentById


function App() {

  const [allPhotos, setAllPhotos] = useState([])
  const [filteredPhotos, setFilterPhotos] = useState([])

  const getPhotos = (event, photoColor) =>{
    event.preventDefault();
    
  }
  useEffect(() => {
    const apikey = 'kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4';
    axios({
      url: 'https://api.unsplash.com/search/photos',
      method: 'GET',
      dataResponse:'json',
      params: {
        query:'camping',
        client_id: apikey,
        per_page: 20
      }
    }).then((data) =>{
      console.log(data)

      // const ImageResults = results.data.results
    }) 
  }, []) 
  
  // const handleShowImages

  return (
    <div className="App">
          <Navbar />
          <Header />
          <BottomHeader />
    </div>
  );
}

export default App; 



