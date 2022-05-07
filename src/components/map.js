import React from 'react';
import _ from 'lodash';


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
                        Map
                    </div>
                    <div className="col text-box map-box">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Seattle Computer Recycling</h5>
                                <h6 className="card-subtitle mb-2 text-muted">7523 Aurora Ave N, Seattle, WA 98103</h6>
                                <p className="card-text">Our company specializes in re-use of all recycled computers, laptops, and Macs.</p>
                                <a href="http://www.seattlecomputerrecycling.net/" className="card-link">Website</a>
                            </div>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
}