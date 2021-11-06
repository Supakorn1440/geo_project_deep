import "./map.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from "react-leaflet";
import L from "leaflet";
import icon from "./constants";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import Examples from "./Popup";


function Map2D() {
  const [mapMark, setMapMark] = useState({});
  const [mapLat, setMapLat] = useState("");
  const [mapLng, setMapLng] = useState("");
  const [year, setYear] = useState("");
  const [deep, setDeep] = useState("");
  const [changYearMs, setChangYearMs] = useState('');



  function SetChangYearMs(event) {
    setChangYearMs(event.target.value);
  }

  function DynamicYear({ year }) {

    if (year) {
      return (
        year.map((item, index) =>
          <option key={index} id={index} value={item.year}>
            {item.year}
          </option>)
      );
    } else {
      return [];
    }
  }

  const yearMaster = () => {
    console.log(year);
    if (!year) {
      axios.get("http://localhost:3002/year-master").then((res, err) => {
        console.log(res.data);

        setYear(res.data);

      });
    }
  };
  yearMaster();
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;

        if (mapMark !== undefined) {
          map.removeLayer(mapMark);
        }
        setMapMark(
          L.marker([lat, lng], { icon })
            .addTo(map)
            .bindPopup(
              "Latitude : " +
              lat.toFixed(5) +
              "\n" +
              "Longitude : " +
              lng.toFixed(5)
            )
            .openPopup()
        );
        console.log(lat.toFixed(5));
        console.log(lng.toFixed(5));
        setMapLat(lat.toFixed(5));
        setMapLng(lng.toFixed(5));

        const data = { lat: lat.toFixed(5), lng: lng.toFixed(5), year: changYearMs };

        axios
          .post("http://localhost:3002/setData2562", data)
          .then((res, err) => {
            if (res.data.length !== 0) {
              console.log(res.data.deep);
              setDeep(res.data.deep);
            } else {
              setDeep('-');
            }
          });
      },
    });
    return null;
  }
  return (
    <>
      <div className="bg-content">
        <div className="row clearMargin">
          <div className="cardContent-2d">
            <div className="col-12">
              <div className="row dataContent">
                <div className="col-1">
                  <div className="row">
                    <div className=" row ZoneDropdown cal-6">
                      <select className='form-control' id='selectYear' style={{ width: 200 }} value={changYearMs} onChange={SetChangYearMs}>
                        <option>Plese SELECT</option>
                        <DynamicYear year={year} />
                      </select>
                    </div>
                  </div>
                </div>
                <div className="col-1">
                  <div className="row">

                  </div>
                </div>
                <div className="UTF col-2">
                  <label htmlFor="latitude" className="font-label-header">
                    Latitude
                  </label>
                  <h3 id="latitude">{mapLat}</h3>
                </div>
                <div className="UTF col-2">
                  <label htmlFor="LongTitude" className="font-label-header">
                    Longitude
                  </label>
                  <h3 id="LongTitude">{mapLng}</h3>
                </div>
                <div className="UTF col-2">
                  <label className="font-label-header">Deep</label>
                  <h3>
                    <dataMap />
                    {deep} m.
                  </h3>
                </div>
                <div className="UTF1 cal-1">
                  <Examples />
                </div>
                <div id="myModal" className="modal">
                  {/* <!-- Modal content --> */}
                  <div className="modal-content">
                    <span className="close">&times;</span>
                    <p>Some text in the Modal..</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="Row">
          <div className='class=" map-content cal-12"'>
            <div className="row card-map-container">
              <div className="map-data-content col-9">
                <MapContainer center={[19.0258, 99.89765]} zoom={17}>
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
                    url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
                  />

                  <MyComponent />
                </MapContainer>
              </div>
              <div className="card-data-2d col-3">

                <h1 className="font-header-data">Ang Luang</h1>
                <h1 className="font-header-data2">University of Phayao</h1>
                <h3 className="font-header-data3">
                  Location : 19 Moo 2 <br /> Mae Ka Subdistrict, Mueang Phayao
                  District, Phayao Province 56000
                </h3>
                <h3 className="font-header-data4">
                  UNIVERSITY OF PHAYAO
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Map2D;
