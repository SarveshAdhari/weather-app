import { useState } from "react";

const Home = () => {
    const [loc, setLoc] = useState('Lonavala');
    const [place, setPlace] = useState('Enter A City');
    const [temp, setTemp] = useState(null);
    const [date, setDate] = useState(null);
    const [max, setMax] = useState(null);
    const [min, setMin] = useState(null);
    const [icon, setIcon] = useState(null);
    const [cond, setCond] = useState(null);
    const url = `https://api.weatherapi.com/v1/forecast.json?key=4681881a970549e4bae51138212011&q=${ loc }&days=5&aqi=no&alerts=no`;

    const sub = (e) => {
        e.preventDefault();
        fetch(url)
        .then(res => res.json())
        .then(response =>{
            setPlace(response.location.name);
            setDate(response.forecast.forecastday[0].date);
            setTemp(response.current.temp_c);
            setCond(response.current.condition.text);
            setIcon(response.current.condition.icon);
            setMax(response.forecast.forecastday[0].day.maxtemp_c);
            setMin(response.forecast.forecastday[0].day.mintemp_c);
        });
    };

    return ( 
        <>
            <div className="big-screen container-fluid">
                <div className="col details">
                <div className="search container">
                <form className="d-flex col-md-4">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
                        onChange={(e) => setLoc(e.target.value) }/>
                <button className="btn" type="submit" onClick={sub}>Search</button>
                </form>
                </div>
                    <h2>
                        { place }
                        <br />
                        <small>
                            { date }
                        </small>
                    </h2>
                    <div className="temp container">
                    <img src={ icon } alt='' /> <h4>{ cond }</h4>
                        <div className="inner-temp col-sm-3 mt-4 mb-4">
                         { temp } &#176;C
                        </div>
                    </div>
                    <div className="min-max container">
                        <h5 className="min-temp col-md-6">
                          Min Temp:  { min} &#176;C
                        </h5>
                        <h5 className="max-temp col-md-6">
                           Max Temp: {max} &#176;C
                        </h5>
                    </div>

                </div>
            </div>
            <div className="avail-hours container-fluid">
                <div className="hours">
                    <div className="row">
                        <div className="hour col">
                            <p>
                                <h4>
                                    Some details to the project:
                                </h4>
                                The webapp has been designed using React '17.0.2'
                                <br />
                                HTML5 and CSS3 have been used along with Bootstrap for frontend.
                                <br />
                                The data is being fetched from the api given below.
                                <br />
                                The app is hosted on heroku.
                                <br />
                                The code is made available on my GitHub page whose link is also provided.
                                
                            </p>
                            <p className="link">
                                API used: <a href="https://weatherapi.com">www.weatherapi.com </a>
                            </p>
                            <p className="link">
                                Link to my GitHub profile: <a href="https://github.com/SarveshAdhari">My Github Profile</a>
                            </p>
                            
                        </div>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Home;