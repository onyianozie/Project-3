import "./App.css"
import {useEffect, useState} from 'react'
import {axios} from 'axios'
import Navbar from "./components/Navbar.js";
import Header from './components/Header.js';
import DisplayPhotos from './components/DisplayPhotos';
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

// }
// class App extends Component{
//   render(){
//     return (
//       <header className="App-header">
//         <div className="App">
//           <Navbar />
//           <Header />
//           <h1>Welcome to Notario Parks</h1>
//         </div>
//       </header>
//     )
//   }
// }


function App() {
  // call our API when the component is intially rendered
  useEffect(() => {
    // a variable that hold your api key
    const apikey = 'kNdiDp0P503CDAj8ZVSGMG_NIn8xdGoNqYmXRMoU8s4';
    axios({
      url:'https://api.unsplash.com/search/photos',
      method:'GET',
      dataResponse:'json',
      params: {
        query:'camping',
        client_id: apikey,
        per_page: 30
      }
    })
  })

  return (
    <div className="App">
          <Navbar />
          <Header />
          <BottomHeader />
          <DisplayPhotos />
        <h1>Show me Camp Gallery</h1>
    </div>
  );
}

export default App;



