import "./map3d.css";
import React from "react";
import "leaflet/dist/leaflet.css";
import { Carousel } from 'react-carousel-minimal';


function Map3D2563() {



  const data = [
    {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241692687_2028736893949823_7671456002343176414_n.jpg?_nc_cat=111&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGPOh-JJTCTRd-v28YVHgrXhMU9m_S9rs6ExT2b9L2uzuo-8vb8LwAPZvKuyBXyCQbepwhZOMpKCo16RurodtrB&_nc_ohc=6RO2rJHIt9wAX-RqN4C&_nc_ht=scontent.fbkk5-3.fna&oh=9dfcb40093c334c06e9e2a70c8e80427&oe=6189D2A9"
    },
    {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241835349_2028737077283138_2824347925858265579_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHFbRHE1l0zv8OqjLx-lsewNrBTwc-mczU2sFPBz6ZzNeCseQD7qgpN4mcAjF_B3NowYF7iOJJsO-XQYaEOVGRY&_nc_ohc=hFeBmydk2BIAX-QlDXE&_nc_ht=scontent.fbkk5-3.fna&oh=b763716275fd0b74af074c60abefa019&oe=6189B94F"
    },
    {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241947111_2028737060616473_7403769171749130016_n.jpg?_nc_cat=107&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEo58vvHxCNohWdo0DuxpRkjOyed0k2UIiM7J53STZQiOTgmuPHn8sNP-hauuskuXFU8EmywS36jC76G7z_mPaP&_nc_ohc=mziaPFidEkUAX8ekVyP&_nc_ht=scontent.fbkk5-7.fna&oh=0a41eab0c72948ef5074d064c63e4163&oe=618B1716"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241838667_2028736993949813_1869634658699560747_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHUBkncqM996C-A3LXMXSV5kAw7ZF7D156QDDtkXsPXnhI8czGqPWqqYYqNr2dR0VI06cgZSAx-DFhqJO7MKU4o&_nc_ohc=nsJYRbOdFgMAX9Q6llc&_nc_ht=scontent.fbkk5-7.fna&oh=ba44e67bf0e4f6933ec2eff0af10a38a&oe=6189D858"
    },
    {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241886587_2028737000616479_5301903975874409463_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHBpthnQ7Rq1I8lnVS97T2QBa6Mzw99Dw4FrozPD30PDpjICUtvyDM87Rq3w4ENeZqkWcqZ9yqjzKHWUkE_79vI&_nc_ohc=16R9Hj_6fGYAX_RRnuP&_nc_ht=scontent.fbkk5-6.fna&oh=412ad7b35598ae4d7d8d350f3cf526e5&oe=618A7086"
    },
    {
      image: "https://scontent.fbkk5-6.fna.fbcdn.net/v/t39.30808-6/241864100_2028737070616472_3567611149587039973_n.jpg?_nc_cat=101&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGA5VFdmUH3Cax74WbdCa-uPT-aQf7QIAY9P5pB_tAgBpVRXfrw7lsAbIL-mkAja3Fws90H9tI07MEFBi_cD4mC&_nc_ohc=r1Sc0iHHwvcAX_usD3E&tn=n7TyuVbEqHV4WzA5&_nc_ht=scontent.fbkk5-6.fna&oh=739bd899385dde2acc03a27e0e21392d&oe=618AB7C0"
    }, {
      image: "https://scontent.fbkk5-3.fna.fbcdn.net/v/t39.30808-6/241863020_2028737093949803_5550079797221243340_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEJGNG0CccGBmQfELovg6T7r7JuXA64iw2vsm5cDriLDUswGiq7iXj2guB_xNsd6H-7tis-it1vVpmsN0huoQM0&_nc_ohc=2-sJEJ_9prgAX_x4STz&_nc_ht=scontent.fbkk5-3.fna&oh=8888e789c1d2fa80b411d5cde8471ccd&oe=618A54CC"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241787358_2028737220616457_5549212662822311255_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGrtPuvDJzFfHHGPv9DG_7UXTxEQW6W_zVdPERBbpb_NbCRql9dUWnKI23AhFXKsF3HCrNzoKLeaFmruSPmq6oN&_nc_ohc=9X4HHx9k1UIAX_8aWzv&_nc_ht=scontent.fbkk5-4.fna&oh=36b2d53277e5e05abab16bc07a8a4277&oe=618A97CE"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241793433_2028737297283116_2962065753669176319_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFIyHkyA8qL9H4vsPlDh9Cm0FtoHTPZYxDQW2gdM9ljEG0qtp0qDKExovKHQVSuOdqbGaPBRgtCK6eXqL47wepq&_nc_ohc=u0a2kC65VJMAX_tsNkt&_nc_ht=scontent.fbkk5-7.fna&oh=d338dcfef3c4defd3147986c5e5309f3&oe=6189F99D"
    }, {
      image: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/241730774_2028737167283129_7784355564414124694_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGsH5U1v1_D8KnAq5IHrz9t9TzRQ20S04D1PNFDbRLTgHCRRlx6kYzBDBqnQExrp3V28i-RQjDMj2_bQL1-32wD&_nc_ohc=EIn6UV9IHtQAX_gUzpM&_nc_ht=scontent.fbkk5-8.fna&oh=6e68492fe191f50850533cde334aac8e&oe=618A6276"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241683505_2028737303949782_5131516084975141471_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFVCPfIeSvG5jemmMfD-CLI8E8YrkUaaMXwTxiuRRpoxYRxfV8jywROKpu6lhhknhqay3X0ABO6_SqsDLY1CFq7&_nc_ohc=a9pAd3LOzesAX94-ksi&_nc_ht=scontent.fbkk5-4.fna&oh=87a251e3e4bdfcf8a56e021627e7f848&oe=618A158A"
    }, {
      image: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/241944416_2028737347283111_3398637860528181732_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHgS2p-DNecGDg3TUn4gG_tpgvvVUU1qzWmC-9VRTWrNUoAV05VjiiRp2lmyxWyvcmWgaZwPdsFmkdEKIrBKKwu&_nc_ohc=YwlHYpNQe_gAX-OuhlF&_nc_ht=scontent.fbkk5-1.fna&oh=bae52daebb3013a3012323ab56f04de8&oe=6189E46E"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241787104_2028737383949774_3358035845650545137_n.jpg?_nc_cat=103&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeGzgNSPZq8asnAol2FcbFVZAYLeePbs3zABgt549uzfMHHRSys32GO-aHaTjR1A18RxXKh4GY1Ited4Tk9BYSF9&_nc_ohc=vSZBgV3Zd8cAX-Y06KN&_nc_ht=scontent.fbkk5-4.fna&oh=dfe50b7d8a6933416ddf956df32b8767&oe=618B691C"
    }, {
      image: "https://scontent.fbkk5-5.fna.fbcdn.net/v/t39.30808-6/241817388_2028737400616439_947445702745544565_n.jpg?_nc_cat=100&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeFnB562EIGwhcyt4KeZ18_bvnPc4qGUXS--c9zioZRdL9WABLbL6oenCR5Hf_aEyEdJQd_wNqgWfjJW0n-bETnB&_nc_ohc=Y52evh20V_sAX9tZmwD&_nc_ht=scontent.fbkk5-5.fna&oh=406f4c044503fd341fc51eb53489e0fd&oe=618A2E05"
    }, {
      image: "https://scontent.fbkk5-4.fna.fbcdn.net/v/t39.30808-6/241829035_2028736937283152_8909947375363247169_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeHsDsCQPwmCt6F1zy_-aHJEcTqVqQ1tE3ZxOpWpDW0TdrTYDTZlD9s1zUkBCPo5CzthtsOZEU7-ajN9AVWdhtr0&_nc_ohc=wGtA3LAkm3wAX8uGZuV&_nc_ht=scontent.fbkk5-4.fna&oh=c224892226916d4cd0b9f46e342d74f2&oe=618A4FA6"
    }, {
      image: "https://scontent.fbkk5-7.fna.fbcdn.net/v/t39.30808-6/241785453_2028736933949819_4273633557165167250_n.jpg?_nc_cat=108&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeEHKeDztfZeGsKId0Tgsn_nyaak41mwmh_JpqTjWbCaH9hEm6w9Y3YhDN9St76kXQ2_cNqPE8-nGznGqlabD0dF&_nc_ohc=Ff0WQMweSyAAX8-rw2J&_nc_ht=scontent.fbkk5-7.fna&oh=c6c2147bb5b9f256ad1b2d5ba6128a35&oe=618AEACF"
    }, {
      image: "https://scontent.fbkk5-1.fna.fbcdn.net/v/t39.30808-6/241856077_2028737190616460_7446042139736422087_n.jpg?_nc_cat=109&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeETk5L9AQPfVCEbb5P7caBZ3OMivbHWnZTc4yK9sdadlEP5PnjipRd_0gt4TX2OHABuVMEtECQOJ6PozWO0T4rP&_nc_ohc=gi8c9rH3h50AX9HzKd9&_nc_ht=scontent.fbkk5-1.fna&oh=58432b6b97ae55bace4ede459cd49255&oe=618A9FC4"
    }, {
      image: "https://scontent.fbkk5-8.fna.fbcdn.net/v/t39.30808-6/241855878_2028737247283121_3392415003414298082_n.jpg?_nc_cat=106&ccb=1-5&_nc_sid=730e14&_nc_eui2=AeETd2L0vf6SrFWtWH1FDG50m1o_mv4b4dCbWj-a_hvh0KF_726oDjEbO2qatc10HGKef_QAerP-q0IbxZN33PR9&_nc_ohc=sntOMMJmSdEAX94KNFx&_nc_ht=scontent.fbkk5-8.fna&oh=a6fa0fce8b338f7104591ed0f1a7bb8d&oe=618B4AD4"
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
                <h2 className="font-header2">ปี 2563</h2>
              </div>

              <div className="control2-3d cal-6" >
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

export default Map3D2563;
