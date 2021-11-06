import "./map3d.css";


import "leaflet/dist/leaflet.css";
import { Carousel } from 'react-carousel-minimal';

// import React, { useState } from 'react';
import React from 'react';
// import AliceCarousel from 'react-alice-carousel';
// import { Lightbox } from 'react-lightbox-pack'; // <--- Importing LightBox Pack
// import "react-lightbox-pack/dist/index.css";
// import data from './data.json'; 


function Map3D2564() {

  
    // <AliceCarousel>
    //   <img src={"../../assets/img/TeamA.jpg"} />
    //   <img src={"../../assets/img/TeamA.jpg"} />
    //   <img src={"../../assets/img/TeamA.jpg"} />
    //   <img src={"../../assets/img/TeamA.jpg"} />
    //   <img src={"../../assets/img/TeamA.jpg"} />
    //   <img src={"../../assets/img/TeamA.jpg"} />      
    // </AliceCarousel>





  //     // State
	// const [toggle, setToggle] =  React.useState(false);
	// const [sIndex, setSIndex] =  React.useState(0);

	// // Handler
	// const  lightBoxHandler  = (state, sIndex) => {
	// 	setToggle(state);
	// 	setSIndex(sIndex);
	// };



  const data = [
    {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241433142_2022999721190207_283206075374019039_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEA0gTeYvI_04_DdclDqzfWPFQtoxk0Y6I8VC2jGTRjonAlfIdkew9073pje08ITaI7Q7pSvhqivp_OYBKULFrL&_nc_ohc=ip65Ox4VkzcAX996tUO&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-4.fna&oh=2b82a13f35c336f789f028ff8fb2bfab&oe=618A8CD8"
    },
    {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241418200_2022999691190210_8633938191279597246_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGSuTVofJzEXL7rNwvhCgFIcql37wO5zWdyqXfvA7nNZ5ZVmr2gKAi1RVPb3LVEfXCzq54RC0K3d-gFdsseJVWr&_nc_ohc=ZAzQpVpi3NsAX-O20MY&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-6.fna&oh=e66d522dfa91203deea4e12a592c8f24&oe=6189BF55"
    },
    {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241297409_2022999771190202_6173948037457286317_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGt_UkRB40ibs4ccD5NJYcPm4t13s5fdWObi3Xezl91Y0rvb6toxkWqzlQzDKsYiWv0cEj8oQtjuGakUdNY-60h&_nc_ohc=-hl468AhUBQAX-ufqjU&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-4.fna&oh=0fdb9a05923330c5fbd6817ff715994a&oe=6189D071"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241434818_2022999811190198_7392345412548294087_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHVyg4CHqN9p3o50D0DzkbInnDT9GJcHISecNP0YlwchBc-syzMXUlF-HE4Ycmz4Y4ADIU5iWMWsxKJp_g6rzKJ&_nc_ohc=V25eyvCj-OcAX8sZSMT&_nc_ht=scontent.fbkk5-4.fna&oh=a486609d548a58e1c1b12d1d0e5c5879&oe=618B5B0B"
    },
    {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241203226_2022999321190247_2184305194776_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE7PAcyDnRyDtaYvjn6UjQP4nyaR_-N0U3ifJpH_43RTUC3IvyVncoQJ1D0A84Lm9ltNBNoHRMYssM4ei_6_Ogz&_nc_ohc=b4_QCsETN-4AX81jsVA&_nc_ht=scontent.fbkk5-7.fna&oh=bc912d4e30de4de2608a1e1fd92c6e9a&oe=618B2DFD"
    },
    {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241383707_2022999331190246_5761502396128432488_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGEIHC9wFtEBBFqqkjafIwBvFWsUJkhzO-8VaxQmSHM75V33q1BTJrLMiYRWCPozyqK-WBXZW7qm-ctHncnPo7t&_nc_ohc=itvKMiscR4MAX9sWEt4&_nc_ht=scontent.fbkk5-7.fna&oh=f31f2c08010e13afd318fecbd09caab1&oe=618B4440"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241461854_2022999317856914_6965062103077380327_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGsT-QtN1pAtR4Yz_58TvM4toYFQdjatRm2hgVB2Nq1GZJLx7_liQVpicUB2N3FWAPRyIkN7SAMbep0CXPT_NwE&_nc_ohc=MVYVA7ynS6UAX8Q3RZw&_nc_ht=scontent.fbkk5-7.fna&oh=d12a6c164fa745140aee33f2e2aed6dc&oe=618ABA57"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241321751_2022999411190238_7762498211757470078_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGWekx-Shk9atPlQR1OtpEl_EePT1FUcuX8R49PUVRy5X54x5iVb2lhvPx-prCBrLCAdfkyaPj97AF1VoyRClot&_nc_ohc=Of_lDLlsbcIAX8Sy0Oe&_nc_ht=scontent.fbkk5-5.fna&oh=d1c36f44d33718f496cbfac6d73fee62&oe=618AFCC8"
    }, {
      image: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/241297138_2022999464523566_1871834015669856129_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGMMCeF_aT-dJfRTtwbnP77Z3udzX0XBQ9ne53NfRcFD_hhc9yovjbCXehZGrg4T9l5loj1RF5Cni_hknoF4Ut7&_nc_ohc=ltFmDG_cEcQAX9IJlji&_nc_ht=scontent.fbkk5-1.fna&oh=788089aee24dd28648787362982f82b9&oe=618B47AE"
    }, {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241449718_2022999444523568_3486050831655019552_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF2vsoXH1ETs9Btn6obrZ_hh8Rw85-nz_OHxHDzn6fP82FX3bXoxV1wM0phe0j9EDAk97LYK25mCvOav8zyHg0m&_nc_ohc=YEyzrC7E-cwAX9SQPDv&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-6.fna&oh=c158e2c315d59772c020915bd3508df6&oe=618A9A6A"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241392734_2022999527856893_7135038434811542748_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF9s1d-A97O1k6HwqGSYtZrbae2hT0VFfNtp7aFPRUV85MltMNWsAPYUzvLs_laNiw-I0b-ApQE1salc68O_rmI&_nc_ohc=rgZIUdMP-wEAX_RyHvU&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-5.fna&oh=42e4d87576ba29eb59b53a6175a4f49d&oe=618B33C3"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241401551_2022999551190224_5660996284770058450_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGJxz1oFSE0v3OcZSObYkEH1dfkeGgjLw_V1-R4aCMvD8UPOYo3DCgaQpv9oGa30NMhT0QFvJnVXBl9wGqkhA80&_nc_ohc=kc250KJcBdIAX-jEC5m&_nc_ht=scontent.fbkk5-5.fna&oh=f4caf59c1c555f4d79258aac5cd20cc0&oe=618A327E"
    }, {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241369902_2022999597856886_3891071510216583211_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG3LmLs1EAwKE2qOvK1mh6h_yK12TEuDiP_IrXZMS4OI8ErQJ-dtZ6uVNGnzujZi54MeUdhOZyHUMyhw8WWOBkd&_nc_ohc=CVhCMJVR6TYAX-sC64S&_nc_ht=scontent.fbkk5-6.fna&oh=362de5f6ee8f7c7e9b93950cc6b7149f&oe=61897970"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241400953_2022999657856880_8612332573576334395_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHd3BjQ9-u3jjxGWSPjEG1EaLLL8jIDCgZossvyMgMKBnDMbG_F9kUIA6_U3vZTkTTnuW1_ejO887O1JXi2s1kG&_nc_ohc=r-pAlSr-SAwAX9hBMGr&_nc_ht=scontent.fbkk5-3.fna&oh=41b0a6a4520cdee08ed3414a0901805c&oe=618AA7A9"
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

              <div className="control1 cal" >
                <h1 className="font-header1">ข้อมูลปัจจุบัน</h1>
                <h2 className="font-header2">ปี 2564</h2>
              </div>

              <div className="control2-3d cal-6" >
                <label for='selectYear' className='font-label-header-data-3d'></label>
               
               

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

export default Map3D2564;
