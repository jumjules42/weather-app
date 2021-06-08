import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import Nav from '../components/Nav';
import About from '../components/About';
import Cards from '../components/Cards';
import City from '../components/City';
import '../styles/App.css';

function App() {
    const [cities, setCities] = useState([]);
    const apiKey = '2010f7cbfb64f6dba5963a8211a849c9';

    function onSearch(city) {
        fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        )
            .then((r) => r.json())
            .then((resource) => {
                if (resource.main !== undefined) {
                    const city = {
                        name: resource.name,
                        temp: resource.main.temp,
                        min: Math.round(resource.main.temp_min),
                        max: Math.round(resource.main.temp_max),
                        typeWeather: resource.weather[0].main,
                        wind: resource.wind.speed,
                        clouds: resource.clouds.all,
                        latitud: resource.coord.lat,
                        longitud: resource.coord.lon,
                        img: resource.weather[0].icon,
                        id: resource.id,
                    };
                    const cityExists = cities.filter((c) => c.id === city.id);
                    if (cityExists.length < 1) {
                        setCities((oldCities) => [...oldCities, city]);
                    } else {
                        alert('Ya se encuentra.');
                    }
                } else {
                    alert('Ciudad no encontrada.');
                }
            });
    }

    function onClose(id) {
        setCities((oldCities) => oldCities.filter((city) => city.id !== id));
    }

    function onFilter(ciudadId) {
        let ciudad = cities.filter((c) => c.id === parseInt(ciudadId));
        if (ciudad.length > 0) {
            return ciudad[0];
        } else {
            return null;
        }
    }

    return (
        <div className='App'>
            <Route path='/' render={() => <Nav onSearch={onSearch} />} />
            <Route path='/about' component={About} />
            <Route
                exact
                path='/'
                render={() => <Cards cities={cities} onClose={onClose} />}
            />
            <Route
                exact
                path='/city/:ciudadId'
                render={({ match }) => (
                    <City info={onFilter(match.params.ciudadId)} />
                )}
            />
        </div>
    );
}

export default App;
