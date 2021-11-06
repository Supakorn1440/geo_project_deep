import "./map.css";
import React, { useState } from "react";
import { MapContainer, TileLayer, useMapEvents } from 'react-leaflet';
import L from "leaflet";
import icon from "./constants";
import "leaflet/dist/leaflet.css";
import axios from 'axios';
import Examples from "./Popup63";
import {Dropdown, DropdownButton } from 'react-bootstrap';

function Map2D2563() {

  const [mapMark, setMapMark] = useState({});
  const [mapLat, setMapLat] = useState('');
  const [mapLng, setMapLng] = useState('');
  const [deep , setDeep ] = useState('')
  axios.defaults.withCredentials = true;


  let headers = new Headers();
  headers.append('Access-Control-Allow-Origin', 'http://localhost:3001');


  // function getSelectValue()
  //       {
  //           let selectedValue = document.getElementById("selectYear").value;
  //           console.log(selectedValue);
  //       }
  //       getSelectValue();
 
  
  // const scan = () => {
  //   //  if(){
  //   // 
  //   // }
  //   console.log({mapLat});
  //   console.log({mapLng});

  // }


  
  function MyComponent() {
    const map = useMapEvents({
      click: (e) => {
        const { lat, lng } = e.latlng;

        if (mapMark !== undefined) {
          map.removeLayer(mapMark);
         
        }
        setMapMark(L.marker([lat, lng], { icon }).addTo(map).bindPopup('Latitude : ' + lat.toFixed(5) + '\n' + 'Longitude : ' + lng.toFixed(5) ).openPopup());
        console.log(lat.toFixed(5));
        console.log(lng.toFixed(5));
        setMapLat(lat.toFixed(5));
        setMapLng(lng.toFixed(5));
        // console.log(DataMap);
        // scan(mapLat,mapLng)
        
      
        const data = { lat: lat.toFixed(5) , lng: lng.toFixed(5)};
       
          axios.post("http://localhost:3001/getData2563",data).then((res,err) => {
            // console.log(res.data[0].Deep.toFixed(5))
            
            
              if(res.data !== null) {
                  const deepData = res.data[0].Deep ;
                setDeep(deepData);
               
              }else{
                  // setDeep(res.data[0].Deep =() => {
                  //   id:"1",
                  //   latitude: lat.toFixed(5),
                  //   longitude:lng.toFixed(5),
                  //   Deep:"-",
                  //   Year:"2564"}
                    
                  // )
              }
            // console.log(res);
            // const deepData = res.data ? res.data[0].Deep : "-";
            
            // setDeep(deepData);
          })
      }
    }
    );
    return null;
  }


  // setMapDeep() => {
  //         if () {
  //           state.data.latitude == {mapLat} && state.data.longitude == {mapLng} 
  //         }
  //        }


  return (
    <>

      <div className='bg-content'>
        <div className='row clearMargin'>
          <div className='cardContent'>
            <div className='col-12'>
              <div className='row dataContent' >
                <div className='col'>
                <label htmlFor='latitude' className='font-label-header'>Year</label>
                  <DropdownButton id="dropdown-basic-button" title="2563">
                      <Dropdown.Item href="/map2D">2564</Dropdown.Item>
                      <Dropdown.Item href="/map2D2562">2562</Dropdown.Item>
                      <Dropdown.Item href="/map2D2561">2561</Dropdown.Item>
                    </DropdownButton>
                  
                </div>
                <div className='col'>
                  <div className="row">
                    <div className=" row cal-6">
                      <label htmlFor='latitude' className='font-label-header'>Mount</label>
                        <DropdownButton id="dropdown-basic-button" title="Quarter 1">
                            <Dropdown.Item href="/map2D2563">Quarter 2</Dropdown.Item>
                            <Dropdown.Item href="/map2D2562">Quarter 3</Dropdown.Item>
                            <Dropdown.Item href="/map2D2561">Quarter 4</Dropdown.Item>
                         </DropdownButton>

                    </div>
                    
                  </div>
                  

                </div>
                <div className='col'>
                  <label htmlFor='latitude' className='font-label-header'>Latitude</label>
                  <h3 id='latitude'>{mapLat}</h3>
                </div>
                <div className='col'>
                  <label htmlFor='LongTitude' className='font-label-header'>Longitude</label>
                  <h3 id='LongTitude'>{mapLng}</h3>
                </div>
                <div className='col'>
                  <label className='font-label-header'>Deep</label>
                  <h3><dataMap />{deep}M.</h3>

                </div>
                <div className="cal"><Examples /></div>
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
          <div className='class=" map-content cal-12"' >
            <div className="row card-map-container">
              <div className="map-data-content col-9">
              <MapContainer center={[19.02580, 99.89765]} zoom={17}  >

              <TileLayer
                // attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                // url="https://tile.thunderforest.com/cycle/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'

                url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
              />

              <MyComponent />

            </MapContainer>
            </div>
              <div className="card-data col-3">
                  {/* <label htmlFor='LongTitude' className='font-label-header'>Longitude</label> */}
                  <h1 className="font-header-data">อ่างหลวง</h1>
                  <h1 className="font-header-data2">มหาวิทยาลัยพะเยา</h1>
                  <h3 className="font-header-data3">ตำแหน่งที่ตั้ง : 19 หมู่ 2 <br/> ตำบลแม่กา อำเภอเมืองพะเยา จังหวัดพะเยา 56000</h3>
                  <h3 className="font-header-data4">จำนวนกักเก็บน้ำ : 174,656,240,400 ลบ.ซม.</h3>
              </div>
            </div>
            
                       
          </div>
          
        </div>
      </div>
    </>


  );
}

export default Map2D2563;