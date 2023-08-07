import React, { useState } from 'react';

const TopBar = () => {
  const [selectedLocation, setSelectedLocation] = useState('Cusco');
  const locations = ['Cusco', 'Wanchaq', 'Santiago', 'San Sebastian', 'San Jerónimo'];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="icon-top text-center text-sm-center text-md-left text-lg-left text-xl-left">
                  {[
                    { iconClass: 'fa fa-facebook', link: '#' },
                    { iconClass: 'fa fa-twitter', link: '#' },
                    { iconClass: 'fa fa-youtube-play', link: '#' },
                    { iconClass: 'fa fa-pinterest', link: '#' },
                    { iconClass: 'fa fa-instagram', link: '#' },
                    { iconClass: 'fa fa-whatsapp', link: '#' },
                  ].map((item, index) => (
                    <div key={index} className="icons">
                      <a href={item.link}>
                        <i className={item.iconClass}></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="text-center text-sm-center text-md-right text-lg-right text-xl-right">
                  <div className="toplocation text-white">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="locaitonfont">Ubicación</span>

                    <select id="openonarrow" value={selectedLocation} onChange={handleLocationChange}>
                      {locations.map((location, index) => (
                        <option key={index}>{location}</option>
                      ))}
                    </select>

                    <span className="arrowdonwing">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const TopBar2 = () => {
  const [selectedLocation, setSelectedLocation] = useState('United States of America');
  const locations = ['United States of America', 'United Arab Emirates', 'United Kingdom', 'Australia', 'Japan', 'India', 'Pakistan', 'Oman'];

  const handleLocationChange = (event) => {
    setSelectedLocation(event.target.value);
  };

  return (
    <div className="topbar">
      <div className="container">
        <div className="row">
          <div className="col-xl-12">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="icon-top text-center text-sm-center text-md-left text-lg-left text-xl-left">
                  {[
                    { iconClass: 'fa fa-facebook', link: '#' },
                    { iconClass: 'fa fa-twitter', link: '#' },
                    { iconClass: 'fa fa-youtube-play', link: '#' },
                    { iconClass: 'fa fa-pinterest', link: '#' },
                    { iconClass: 'fa fa-instagram', link: '#' },
                    { iconClass: 'fa fa-whatsapp', link: '#' },
                  ].map((item, index) => (
                    <div key={index} className="icons">
                      <a href={item.link}>
                        <i className={item.iconClass}></i>
                      </a>
                    </div>
                  ))}
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <div className="text-center text-sm-center text-md-right text-lg-right text-xl-right">
                  <div className="toplocation text-white">
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                    <span className="locaitonfont">   Location</span>

                    <select id="openonarrow" value={selectedLocation} onChange={handleLocationChange}>
                      {locations.map((location, index) => (
                        <option key={index}>{location}</option>
                      ))}
                    </select>

                    <span className="arrowdonwing">
                      <i className="fa fa-angle-down"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;