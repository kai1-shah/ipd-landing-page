// App.jsx
import React from 'react';
import './App.css'; // Import the CSS file
import Header from './Header'; // Import the Header component
import appImage from './assets/app-image.jpg'; // Adjust the path to your image file

const App = () => {
    return (
        <div>
            <Header /> {/* Render the Header component */}
            <div className="container">
                <div className="left-section">
                    <h1>     Virtual Wardrobe</h1>
                    <div className="search-container">
                        <input type="text" className="search-bar" placeholder="Make your own body model" />
                        <span className="search-icon">🔍</span> {/* Search icon */}
                    </div>
                    <div className="button-container">
                        <button className="action-button">Render Model</button>
                        <button className="action-button">Try Clothes</button>
                    </div>
                </div>
                <div className="image">
                    <img src={appImage} alt="App Screenshot" /> {/* Image on the extreme right */}
                </div>
            </div>
        </div>
    );
};

export default App;