import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Geocode from 'react-geocode';

import { FilterMenu } from './filter';
import jsonData from '../data.json';

export function MapScreen() {
    const [map, setMap] = useState(null);
    const [currentPlaces, setCurrentPlaces] = useState([{}]);
    const [allPlaces, setAllPlaces] = useState([{}]);
    const [filterWarning, setFilterWarning] = useState(false);
    const todayDate = new Date();

    useEffect(() => {
        setCurrentPlaces(jsonData);
        setAllPlaces(jsonData);
    }, []);    
    
    const handleFilters = (selectedFiltersArray) => {
        const radioValueObj = selectedFiltersArray[0];
        const checkboxObj = selectedFiltersArray[1];
        if(_.isEmpty(radioValueObj) && _.isEmpty(checkboxObj)) {
        setCurrentPlaces(currentPlaces);
        } else {
            let filteredPlaces = [];
            filteredPlaces = allPlaces.filter((item) => {
                const eventRequirementsArray = [];
                let applicableFilters = 0;
                const dayOpen = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat"]
                if("availability" in radioValueObj) {
                    const upcomingEventValue = radioValueObj.availability;
                    const todayDay = dayOpen[todayDate.getDay()];
                    console.log(item.days + "  " + todayDay + "  " + todayDate.getDay());
                    if((item.days.includes(todayDay) && todayDate.getHours() <= item.hours[1] && todayDate.getHours() >= item.hours[0]) || upcomingEventValue === "all") {
                        applicableFilters++;
                        eventRequirementsArray.push(true);
                    } else {
                        return false;
                    }
                }
                if("location" in checkboxObj && checkboxObj.location.length) { //checks location of each event
                    applicableFilters++;
                    for(let placeFilter of checkboxObj.location) {
                        if(placeFilter === item.location) {
                            eventRequirementsArray.push(true);
                        }
                    }
                }
                if("day_of_week" in checkboxObj && checkboxObj.day_of_week.length) { //checks time of day of each event
                    applicableFilters += checkboxObj.day_of_week.length;
                    for(let timeFilter of checkboxObj.day_of_week) {
                        if(item.days.includes(timeFilter)) {
                            eventRequirementsArray.push(true);
                        }
                    }
                }
                if(eventRequirementsArray.length === applicableFilters) {
                    return true;
                }
                    return false;
            });
            if(_.isEmpty(filteredPlaces)) { //current Places are the same
                setFilterWarning(true);
                setCurrentPlaces([]);
            } else { //displays the filtered Places
                setFilterWarning(false);
                setCurrentPlaces(filteredPlaces);
            }
        }
    }


    const LocationMarkers = currentPlaces.map((marker, index) => {
        return (
            <div key={index}>
                <Marker position={marker.latlong} eventHandlers={{
                    click: (e) => {
                        let card = document.getElementById(index)
                        card.classList.toggle('card-color')
                    },
                }}><Popup>{marker.name}</Popup></Marker>
            </div>
        )
    });


    const LocationCard = currentPlaces.map((location, index) => {
        return (
            <div key={index} id={index} className="card" >
                <img class="card-img-top" src={location.img} alt="Card image cap"></img>
                <div className="card-body">
                    <h5 className="card-title">{location.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">{location.address}</h6>
                    <p className="card-text">{location.desc}</p>
                    <a href={location.url} className="card-link">Website</a>
                </div>
                <button type="button" class="btn btn-outline-primary" onClick={() => map.setView(location.latlong, 15)}>Locate on Map</button>    
            </div>
        )
    });

    function GetAddress() {
        Geocode.setApiKey("AIzaSyA5Y5c2fzBT8dvNCv2ne2L9zyklbWBBDqg");
        Geocode.fromAddress(document.getElementById('address-search').value).then(
            (response) => {
              const { lat, lng } = response.results[0].geometry.location;
              let latlng = [lat, lng];
              map.setView(latlng, 15)
            },
            (error) => {
              console.error(error);
            }
          );
    }
    
    return (
        <section className="content-box">
                <div className="row">
                    <div className="col text-box">
                    <FilterMenu handleFiltersCallback={handleFilters}/>
                    </div>
                    <div className="col text-box">
                        <div class="input-group">
                            <input type="text" class="form-control rounded" id="address-search" placeholder="Address" aria-label="Search" aria-describedby="search-addon" />
                            <button type="button" class="btn btn-outline-primary" onClick={() => GetAddress()}>Search</button>
                        </div>
                        <MapContainer center={[47.6553, -122.3035]} zoom={10} scrollWheelZoom={true} ref={setMap}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        {LocationMarkers}
                        </MapContainer>
                    </div>
                    <div className="col text-box card-box">
                        <div className={filterWarning ? "warning" : "hidden"}>No Locations Found</div>
                        {LocationCard}     
                    </div>
                </div>
            <footer>
                <p>Copyright &copy; 2022 INFO 442 Group D</p>
                <p>Contact Info: Dawgs-E-Cycling </p>
            </footer>
        </section>
    );
}