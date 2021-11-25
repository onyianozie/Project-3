import "./App.css"
import {useEffect, useState} from 'react'
import axios from 'axios'
import Navbar from "./components/Navbar.js";
import Header from './components/Header.js';
import BottomHeader from "./components/BottomHeader";

 
// Pseudo Code
// Make an API call to the Unsplash API
 //Collect data based on search parameters for "camping"
 // Store the results of the API call in a state 
 // create a onClick call out function for the explore button that will evntually
 // Dipslay photo results on camp page.


 // event listeners
// exploreBtn.addEventListeners('click', exploreGallery);
// get list that matches with camping



function App() {

  const [allPhotos, setAllPhotos] = useState([])
  const [setDisplayphotos] = useState(false)
  // const handleShowImages

    useEffect(()=> {
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
      }).then((response) =>{
        setAllPhotos(response.data.results)
        // const ImageResults = results.data.results
      }) 
    }, [setAllPhotos])
    console.log(allPhotos)
      
  return (
    <div className="App">
          {/* add components into App */}
          <Navbar />
          <Header />
          <BottomHeader setDisplayphotos={setDisplayphotos}/>
        
          {/* gallery display's fetched photos after button is fired  */}
          <div className="gallery">
            <ul>
              {
                allPhotos.map((photoObject) => {
                  return(
                    <li key={photoObject.id}>
                      <div className="imagcontainer">
                        <img src={photoObject.urls.full} alt={photoObject.alt_description}/>
                      </div>
                    </li>
                  )
                })
              }
            </ul>
          </div>
    </div>
  );
}

export default App; 


