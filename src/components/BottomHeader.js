import { useState } from "react"

// Create a buttom header where the button lives and 
// Add function to the button, when clicked it reveals camp photos
// when not clicked it dosent reveal any photos.

function BottomHeader (setDisplayPhotos){
    
    const [userClick, setUserClick] = useState('placeholder')

    const handleUserClick = (event) => {
        setUserClick(event.target.value)
        console.log('Im working!, now show me photos! >_<');
    }
    return(
        <div className="square" onSubmit={(event) => setDisplayPhotos.getPhotos(event, userClick)}>
            <div className="btn-section">
                <h5 className="icons"><i className="fa-solid fa-campfire"></i></h5>
                <h5 className="icons"><i className="fa-solid fa-arrow-right-long"></i></h5>
                <button className="navigation" onClick={handleUserClick}>Explore Camp Grounds</button>
            </div>
        </div>
    )

}

export default BottomHeader;
