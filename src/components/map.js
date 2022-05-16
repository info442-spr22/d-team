import React from 'react';
import _ from 'lodash';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

function LocationInfo() {
    const jsonData = require('../data.json');

    return (
        <div>
            {jsonData.map((location, index) => (
                <div key={index} className="card">
                    <div className="card-body">
                        <h5 className="card-title">{location.name}</h5>
                        <h6 className="card-subtitle mb-2 text-muted">{location.address}</h6>
                        <p className="card-text">{location.desc}</p>
                        <a href={location.url} className="card-link">Website</a>
                    </div>    
                </div>
            ))}
        </div>
    )
}

export function MapScreen() {
    return (
        <section className="content-box">
            <div className="container-fluid">
                <div className="row">
                    <div className="col text-box map-box">
                        <form>
                            <h2>Filter</h2>
                            <div className="form-group">
                                <label for="formControlRange">Distance</label>
                                <input type="range" className="form-control-range" id="formControlRange"/>
                            </div>
                            <div className="form-group">
                                <div className="form-check">
                                <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                <label className="form-check-label" for="gridCheck1">
                                    Open Now
                                </label>
                                </div>
                            </div>
                            <div className="form-group">
                                <p>Types of E-Waste</p>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" for="gridCheck1">
                                        Large Devices
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" id="gridCheck1"/>
                                    <label className="form-check-label" for="gridCheck1">
                                        Small Devices
                                    </label>
                                </div>
                            </div>                           
                            </form>
                    </div>
                    <div className="col text-box map-box">
                        <MapContainer center={[47.6553, -122.3035]} zoom={15} scrollWheelZoom={true}>
                            <TileLayer
                                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                            />
                        </MapContainer>
                    </div>
                    <div className="col text-box map-box"><LocationInfo></LocationInfo></div>
                </div>
            </div>
            <footer>
                <p>Copyright &copy; 2022 INFO 442 Group D</p>
                <p>Contact Info: Dawgs-E-Cycling </p>
            </footer>
        </section>
    );
}