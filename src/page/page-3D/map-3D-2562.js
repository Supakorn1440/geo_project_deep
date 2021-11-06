import "./map3d.css";
import React from "react";
import "leaflet/dist/leaflet.css";
import { Carousel } from 'react-carousel-minimal';





function Map3D2562() {



  const data = [
    {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241923179_2029164910573688_3494129702585291397_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG-dGmkU1hJRGg45RdAnLHZdQAVe94QAsd1ABV73hACx3DaAd8ftKhHZHfgNLOA3iFeV0BwXRrGCOyHyZmMHVBt&_nc_ohc=zm0ZVu8WJYQAX-a0oC_&_nc_ht=scontent.fbkk5-3.fna&oh=f0f713b1c06f2e95ab6f6a74e79e69b7&oe=618B4CAE"
    },
    {
      image: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/241969126_2029164907240355_7966810878718104967_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHJYrZRGI46KYE0mG-3r39vrxCvavf_b-6vEK9q9_9v7qSjq5x0T6iEwwgZRsgme7e7yI_P34ofPS-Owt4XCy6t&_nc_ohc=TL8pdmWWzuoAX-WRaNO&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-8.fna&oh=d5b7e50e89eb4fb6838a226066c9f474&oe=618A2000"
    },
    {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241804672_2029164917240354_8961499921535808945_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGmvqgks0TNB4OKW3V0JWsjQa6P3ssEdsJBro_eywR2wvzHYUCHAsgo9xa7TaO67oIGZA4Rp51kUvS2YitSIrvq&_nc_ohc=a4jDOwzeYdoAX-I0eOi&_nc_ht=scontent.fbkk5-7.fna&oh=71f6763e9a8db7f699b93d1b2dcfc08d&oe=618A8CC2"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241974599_2029164987240347_2245214182262001411_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFcvUK5TKbet_QiPVFWQI9j107oDShxEkDXTugNKHESQAHtLxsxVQQAE1U3KbJmZrrjNBzq12ljxYuruoa7bM3y&_nc_ohc=Q9lT0a7K8-wAX9apE9u&_nc_ht=scontent.fbkk5-5.fna&oh=ba5f3cf17bd4fc2bb8c513581bd4d7b4&oe=618A5393"
    },
    {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241828028_2029165037240342_4864444850417312324_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE923RY0wLCYRgvzJgHMiy1E3hXGaxLljQTeFcZrEuWNOnVxdFrzdfNTjDpLiQEPm3IBqavWtuK-9OkJnSjGLyQ&_nc_ohc=kA1jp0FkGCUAX8HV0OD&_nc_ht=scontent.fbkk5-3.fna&oh=12716c496c98a2234f5869a6225ddfae&oe=618A03D0"
    },
    {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241997378_2029165043907008_1821739111304888746_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH39HIHZx_soYb-thapLzO1vCMb19EFjFy8IxvX0QWMXGPcq06TyRlQN7ZOAnhWt3w_EPkZ_-_mcdOzQI690yRs&_nc_ohc=_fgMlBJb0cAAX86y7tL&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-7.fna&oh=6b1ebcbfc0e1fdd0c8a834e0fe6ec09e&oe=6189AD53"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241863014_2029165087240337_8172931267061585462_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFgefd9caFv7nYbMAXugUa1qMFEoOAYOtWowUSg4Bg61c-bfHdrH5lcIUmBdQj9zTU-oBXGB9l9ptR-BmQI_Op1&_nc_ohc=iUcFkj-RZosAX-ExAsC&_nc_ht=scontent.fbkk5-4.fna&oh=4d5d3aa0b9f26bc68ccf38d7b8a74794&oe=6189A4A5"
    }, {
      image: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/241867684_2029165147240331_3249185798038139355_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFKEm2xVU_JL72Mf8--Sjyd9_Ty9DY2pu_39PL0Njam77pXmZZuMsgnUgK8V8xW87Cxfo7UUpl3mk2O8fex9xfD&_nc_ohc=f6Ir1y5JyA0AX_M3IcG&_nc_ht=scontent.fbkk5-1.fna&oh=f9f604589753794be1cbc3ee0341b7e8&oe=618ACA97"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241891405_2029165173906995_6468745995790716786_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHN34kJHYy7mP6tOl6cabHdEfTpx5T8IIgR9OnHlPwgiADenmeiloHnUrzXHFtYXvhNBUocufZ5u6LrBBYi72xS&_nc_ohc=wKg5Bq3Mg_QAX-s0T7-&_nc_ht=scontent.fbkk5-5.fna&oh=89a8eec605d593fe2e4fbb8193968cc0&oe=618A959B"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241919103_2029165207240325_7675634041246863170_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHTnPQ938ZahViAb6ORPPzNZyY0yWGnS5tnJjTJYadLm4P9XOTC3xdfaRMZdB0DMOo1GIzaTQ1WlKM1QVWIddmt&_nc_ohc=3rxOqZLUZjcAX9Oq18i&_nc_ht=scontent.fbkk5-4.fna&oh=c3ee36841990684203a86dda8e333741&oe=618B57E3"
    }, {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241853071_2029165280573651_6526363321197973998_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHV87q7899N20fEmsdt9J4PHs7B_XkEfuEezsH9eQR-4UJbmpApWmCx6S6Q74u_fSalLV5WH8F3dNFpS6MVqDtb&_nc_ohc=8Q5eWH5E4wYAX9CTTwR&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-6.fna&oh=a2c7f85ab2d056fbb304b2b3aad64fcc&oe=618B129B"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241830748_2029165297240316_9063029262938076753_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHTct7u3nvSqxVoNZEg1xKn58dWr9xBYWTnx1av3EFhZB8Lj-gL_AH3OCEvkj6daqo28RYoRF0p18EBc1XfVNZv&_nc_ohc=useKFclCSYMAX_n61kM&_nc_ht=scontent.fbkk5-3.fna&oh=6507a1256d4d0d8322c8989466811687&oe=6189A5C9"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241666037_2029165340573645_4152666730805036565_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEgdYC8eu8yHsjB0tvyJzWuvMaAH-6mAtC8xoAf7qYC0PR6_9UHxIyQFUQ-0FyTm6TghbKHSTxFfdYD6Iyib-zT&_nc_ohc=GoVe_eJ_P40AX-ma9fm&_nc_ht=scontent.fbkk5-5.fna&oh=cb0083c16991246d6ba8687a7867bc1f&oe=618A4613"
    }, {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241947104_2029165387240307_3183473402854116214_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE5FI0Xw0TrxDZLOdtFRBp8o4MXy1WpfRijgxfLVal9GEX9qDulf1mVPHVd0AKoJtobB0201CUPNr7vDVv1Zk7H&_nc_ohc=IjVzmzJgPfgAX_r7DB4&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-6.fna&oh=6cf48cc80eacea176201f53511357a03&oe=6189E5E9"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241819947_2029165407240305_1767968124073242205_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEb5jX6EIkedyerN8nGr9RX1srF0yf7voPWysXTJ_u-g_b6R6lq6Nz7yiPRRF8cCR7Z7I--1BCtAvyX77A4c61e&_nc_ohc=F3bJXtlrIukAX-XqshX&_nc_ht=scontent.fbkk5-3.fna&oh=1da6aca28770120cf726f6ede758ea0e&oe=618B401A"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241884395_2029165460573633_3384307317066071149_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeH626-FhiEcxGZDAq8EL9v8i603kJ51Q7GLrTeQnnVDse-wnK0YEXjnUtAD-QsOaABock4MuX4TXmsyOPL7o72t&_nc_ohc=myHIH8ptfx0AX9uC6ev&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-5.fna&oh=503e4c0d9e8cd762d9a1d726de02be5c&oe=61898BD1"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241776576_2029165523906960_4930162544775385670_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEEkVxdddfHf-hsRtUvIiX81McwrCwDQPbUxzCsLANA9iYKw39nsZtkU8mZ15owJxOldoPPiZORlwd8i8wSnSvf&_nc_ohc=dD-eresNwvkAX9reMVo&_nc_ht=scontent.fbkk5-4.fna&oh=866ec054b609eee5178c4ea50ba969a4&oe=61899F68"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/242008688_2029165547240291_1888297220357074228_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEXe3z0hBg2a9vAS0PRckXllRufFkhsZUWVG58WSGxlRfySFXHgjublkEIhhsJXDJg8B76xELuGbbT_lX5_VAKm&_nc_ohc=-kklwivTNfAAX8oo-ta&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-3.fna&oh=b82439b58ae4c7bd47ede7cdbba827f8&oe=618A9BCE"
    }];

  // const images = [
  //   {img1},
  //   { url: "../../assets/img/image/2564/02.jpg" },
  //   { url: "../../assets/img/image/2564/03.jpg" },
  // ];
  return (
    <div className='bg-content'>
      <div className='row clearMargin'>
        <div className='cardContent'>
          <div className='col-12'>
            <div className='row dataContent' >

              <div className="control1 cal-6" >
                <h1 className="font-header1">ข้อมูลปัจจุบัน</h1>
                <h2 className="font-header2">ปี 2562</h2>
              </div>

              <div className="control2-3d cal" >
                {/* <label for='selectYear' className='font-label-header-year-3d'>Year</label> */}
               
              

              </div>



            </div>

          </div>
        </div>
      </div>
      <div className='row clearMargin map-content' >
        <div className="row">
        <div className="row">

          <div className='col-9'>
              <Carousel
              // automatic={true}
              time={1000}
              data={data}
              width="2800px"
              height="500px"
              radius="10px"
              // slideNumber={true}
              captionPosition="bottom"
              // dots={true}
              // pauseIconColor="white"
              // pauseIconSize="40px"
              slideBackgroundColor="darkgrey"
              slideImageFit="cover"
              // thumbnails={true}
              // thumbnailWidth="100px"
              style={{
                textAlign: "center",
                maxWidth: "2800px",
                maxHeight: "850px",
                margin: "40px auto"
              }}
            /> 

          </div>
          <div className="card-data-3d col-3">
                  <div className="logo3D" ></div>
                <h1 className="font-header-data-3d">Ang Luang</h1>
                <h1 className="font-header-data2">University of Phayao</h1>
                <h3 className="font-header-data3">
                  Location : 19 Moo 2 <br /> Mae Ka Subdistrict, Mueang Phayao
                  District, Phayao Province 56000
                </h3>
                <h3 className="font-header-data4">
                  Amount of water storage : 174,116,647,500 cubic centimeter
                </h3>
              </div>
              </div>
          {/* <div className="gallery-map">
          <AliceCarousel>
              <img src={"../../assets/img/TeamA.jpg"} />
              <img src={"../../assets/img/TeamA.jpg"} />
              <img src={"../../assets/img/TeamA.jpg"} />
              <img src={"../../assets/img/TeamA.jpg"} />
              <img src={"../../assets/img/TeamA.jpg"} />
              <img src={"../../assets/img/TeamA.jpg"} />      
           </AliceCarousel>
          </div> */}


          {/* <div>
			// data should be an array of object
                  {data.map((item, index) => (
                  <>
                    <img
                      key={item.id}
                      src={item.image}
                      alt={item.title}
                      style={{ maxHeight:  "80vh", maxWidth:  "50vw" }}
                      onClick={() => {
                      lightBoxHandler(true, index);
                      }}
                    />
                  </>
                  ))}
                  
                  //Component
                  <Lightbox
                    state={toggle}
                    event={lightBoxHandler}
                    data={data}
                    imageWidth="60vw"
                    imageHeight="70vh"
                    thumbnailHeight={50}
                    thumbnailWidth={50}
                    setImageIndex={setSIndex}
                    imageIndex={sIndex}
                  />
                </div> */}
          
         
        </div>
      </div>





    </div>




  );
}

export default Map3D2562;
