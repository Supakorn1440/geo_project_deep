import React, { useState, Component, useEffect } from "react";
import "./Main3D.css";
import axios from "axios";

function Main3D() {
  const [year, setYear] = React.useState([]);

  useEffect(() => {
    if (year.length === 0) {
      axios.get("http://localhost:3002/year-master").then((res, err) => {
        let yearData = res.data;
        console.log(yearData);

        const link = {
          link_2561: "/Map3D2561",
          link_2562: "/Map3D2562",
          link_2563: "/Map3D2563",
          link_2564: "/Map3D",
        };

        yearData.map((obj) => {
          if (obj.year === "2561") obj.link = link.link_2561;
          if (obj.year === "2562") obj.link = link.link_2562;
          if (obj.year === "2563") obj.link = link.link_2563;
          if (obj.year === "2564") obj.link = link.link_2564;
        });
        setYear(yearData);
      });
    }
  });

  function DynamicYear({ currentData }) {
    try {
      return currentData.map((item, index) => (
        <a className="btn btn-primary" href={item.link || "#"} role="button">
          {item.year}
        </a>
      ));
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <div className="bg">
      <div className="container-login">
        <div className="row" style={{ width: "100%" }}>
          <div className="card card-login-content col-12">
            <div className="row">
              <div className="img-center">
                <div className="logoUP "></div>
              </div>
            </div>
            <p className="font-h1" style={{ marginTop: 50 }}>
              OnClick
              <br /> TO GO 3D Page
            </p>

            <div className="font-content-main3d">
              <DynamicYear currentData={year} />
              {/* <a
                className="btn btn-primary"
                href="/Map3D2561"
                role="button"
                style={{ display: checkYear() ? "block" : "none" }}
              >
                2561
              </a>
              <a className="btn btn-primary" href="/Map3D2562" role="button">
                2562
              </a>
              <a className="btn btn-primary" href="/Map3D2563" role="button">
                2563
              </a>
              <a className="btn btn-primary" href="/Map3D" role="button">
                2564
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main3D;
