import "./map3d.css";
import React from "react";
import "leaflet/dist/leaflet.css";
import { Carousel } from 'react-carousel-minimal';




function Map3D2561() {



  const data = [
    {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/242000428_2029165797240266_7878059532329741307_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGk2zQNVMTEmr9asK9W8wlJh-eRXivGkReH55FeK8aRFxMcLHivlK2EQ_P9d_8t7DFNiCXCrwoZZbnMhX0pOPot&_nc_ohc=GHk-XauezQYAX9bRzno&_nc_ht=scontent.fbkk5-5.fna&oh=7aab2153c6367c8f12ba4b88503eccc6&oe=618AF94C"
    },
    {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241929396_2029165830573596_1717628530355071874_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE8SVis_dKa51l9X3hgyUWJJRMhO_CCqVElEyE78IKpUcbYFGn-w83Cjs05oacY0sLwkJU1hCLxhGryy4lY8zk-&_nc_ohc=7td7vqizVvwAX_DMNPv&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-4.fna&oh=61da81cd2e1f7bbf2b4c8443db3b40a9&oe=618A93A2"
    },
    {
      image: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/241854417_2029165827240263_1711323874367233387_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeF3NNb1DRQLELDtyroGLyi336mVqrfbWlLfqZWqt9taUu_n6-ROnk66ngV8iIvqxnii5GEsIV68y3r86gsaihwQ&_nc_ohc=H59hrxblTc8AX-v2J9P&_nc_ht=scontent.fbkk5-8.fna&oh=f1f9f3bff63e8203319aa23146439944&oe=618B2EE5"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241963955_2029165887240257_4510488814452841446_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeG1oYu24RPm9UZXmfe-0pr4x2oqekfQXo7Haip6R9BejsQp4nKXkFhFKRk6qC7IHLitv0_afpSUlkC1A5hMzk0r&_nc_ohc=la_ZE3X0eI4AX_oOU7h&_nc_ht=scontent.fbkk5-3.fna&oh=087755295561360438e100b713266b1f&oe=618A8B23"
    },
    {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241891879_2029165913906921_2757077085593831628_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGPv3YGWW3y08Oa__o0m6r5FUo8KF_VD1IVSjwoX9UPUm4yX55bYXnn0lXZn9Om32-MvT0xCE6gFoktoMf-HVC9&_nc_ohc=ytBbMfmxX90AX_r28W2&_nc_ht=scontent.fbkk5-5.fna&oh=ee1798fe9bbb98a1a7ef413bc600939e&oe=618AD32B"
    },
    {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241918823_2029165927240253_8010850727419661816_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFhwHGb9KctNBVcry8AIdJ2-LH6OS8tCw34sfo5Ly0LDZawlTw5PiTzEb7RTMCt-aeUhYaDKYtf_uDjwjcs9gnw&_nc_ohc=qelLkJELm-EAX_6wQj1&_nc_ht=scontent.fbkk5-6.fna&oh=9a46efacda5bcabfa11a50c1c2f4f19b&oe=6189B1C3"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241969163_2029165973906915_5014195565280511549_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHMiY93oMD0yeVnOdtMcgpPu9GyX6DAMDa70bJfoMAwNufN0Y7yzenP2zGUlczf6t1MVwvv0RMsM8rHrW_dVWdE&_nc_ohc=uWHhULFQVMMAX_Es3JY&_nc_ht=scontent.fbkk5-3.fna&oh=717ab7e3c1d8c452af222d2c9e2b6826&oe=6189786F"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241858062_2029166023906910_4273058089970552986_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeE9-WblT8AWvJuVl0xJ9_yziHv554Ca-yyIe_nngJr7LB8IhJOlajN6IpvX36aFH_Qrf7uHtH-VS4n2TfPmoP_9&_nc_ohc=qCzQKSnAf0cAX8rYuM5&_nc_ht=scontent.fbkk5-3.fna&oh=0cff53a027a93dfafbba120c54fe6f9d&oe=618A82A8"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241837131_2029166070573572_5109106840258728472_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFPxlOf7FYN-Mud8QxtNgQSghMF4vHB3MyCEwXi8cHczPX8qHlaOvgBSfS1Gy1KwNwP_lB6q5iLUocExGEtJ7Pn&_nc_ohc=A4fLT-ksfsMAX-sPu7R&_nc_ht=scontent.fbkk5-7.fna&oh=19149d64c679cdc9966c87a45ca18cc4&oe=61897DD0"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241890029_2029166097240236_2301331399843220539_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEvvw4IjoC9RRwTq0HaVsKCBIkUy7NTF-wEiRTLs1MX7IVMlPZVlcomC3QDEfPLDOtOSaPKpIjUMJTHyo_0OgNw&_nc_ohc=JjB2gUIc9FUAX_M71xk&_nc_ht=scontent.fbkk5-3.fna&oh=0629fabf68139b2c5c127f2dd4359b32&oe=618A6552"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241832151_2029166130573566_1996384340158903773_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEcDDsrqEaygYSwWu0YrQZbIi6-CrJ45h0iLr4KsnjmHXqVTGDAF9eYTIZ98iCshPqrTOYxB4gMAOr0nwd83kEa&_nc_ohc=GzXr1fn2E9AAX-UX2W5&_nc_ht=scontent.fbkk5-7.fna&oh=a2854ca48b3a91b6b6b05dbc6c40067f&oe=618A1B1B"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241845228_2029166197240226_868618164411155158_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHy606T8N-mkIfvDIMY9-Rfbd8tX8gIp4Jt3y1fyAingjmoiVporInT4paE3kaUG6VaYHdlWwB2xErNTE3pDtbK&_nc_ohc=hB2Tbdo5C44AX8jWD3v&_nc_ht=scontent.fbkk5-5.fna&oh=92f7af7caccf6f039ae23ac03dbae71c&oe=618A2105"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241876211_2029166227240223_8629152290838437047_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEArhwYhYNent-GXQWL78xwMYPhcvPA07gxg-Fy88DTuP5GpUysfuMSJO5nUHBROExvZibvqJAubV-zAO8lm3B6&_nc_ohc=p0bxQMcG25QAX-aqD0T&_nc_ht=scontent.fbkk5-7.fna&oh=b5c017ee1fa4663408158b0fc9adb1bb&oe=618AFF13"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241888353_2029166260573553_2018424690543644355_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEX5Q56T0lf4uTt2n1c1w0dLXjJXbCgbygteMldsKBvKO62QVBNswUIQkrk0vrWj-wutzYeP1RY7bA1NyCMEs-5&_nc_ohc=icyRIg4oIxgAX8ZVfmN&_nc_ht=scontent.fbkk5-4.fna&oh=da43524884a379dc42ad25891c28a38f&oe=6189BB82"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241864120_2029166293906883_3937072411912310804_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGdTgJgN4iAcxph4yFvJa_jePkJouAiynR4-Qmi4CLKdIwpHfMPMi_GgWJOtqMsrLQbuy1ayKr8a4mGZ2C4nfJC&_nc_ohc=WArdQ_wQC-oAX8h9bEO&_nc_ht=scontent.fbkk5-5.fna&oh=bf6ea43ed30bd5c18bb6438063b64d3d&oe=618AD60D"
    }, {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241967824_2029166313906881_3063552552872940030_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEG1TGmb6LdoOeIFeBmLfcWhQrQmPg3h7aFCtCY-DeHtlYwku6ijZFvEnTT7gqS6srrOWu158rUg_DQexWoaSsV&_nc_ohc=dktZEnEvf9wAX8ER2iJ&_nc_ht=scontent.fbkk5-6.fna&oh=facadfc114f2de642cec7ef54fe99a74&oe=6189A4F5"
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
                <h2 className="font-header2">ปี 2561</h2>
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

export default Map3D2561;
