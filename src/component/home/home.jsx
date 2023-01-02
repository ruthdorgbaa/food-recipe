import React from 'react';
import "./home.css";
import { Link } from 'react-router-dom';



const Home = () => {
    return (
        <div className="home">
            <div className="search">
                <div className="input">
                    <div className="logo">
                        <h1>Ruchil Recipes</h1>
                        <p>
                            Have you been plague with the responsibility of getting the right meal to keep you
                            healthy? Look no further RuchilRecipes has got you covered.
                            Here you have the liberty to browse through a varity of delicious mouth-watering yet healthy meals at your convinience.
                        </p>
                    </div>
                    <input type="text" />
              <Link to="/Menu"><button>search</button></Link>

                </div>
            </div>
        </div>
    );
};
export default Home;