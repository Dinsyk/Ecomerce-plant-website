import React, { useState } from "react";
import "./Addplants.css";
import Nav from "../../components/Nav/Nav";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/Footer/Footer";

function Addplants() {
  const [plants, setPlants] = useState({});
  const [plantimage, setPlantimage] = useState("");
  console.log(plants);

  const navigate = useNavigate();

  const token = localStorage.getItem("token");
  // console.log(token);

  const change = (e) => {
    const { name, value } = e.target;
    setPlants({ ...plants, [name]: value });
  };

  const onclickaddplant = (e) => {
    e.preventDefault();
    if (plantimage) {
      const data = new FormData();
      const filename = plantimage.name;
      data.append("name", filename); //this is the name of the image
      data.append("file", plantimage); //this is the full details of the image.this details is passed to get the destination of the image(which means where is that image right now.)
      console.log("fileData", data);
      axios
        .post("http://localhost:4000/addplant/upload", data)
        .then((response) => {
          console.log(response);
        });
    }

    axios
      .post("http://localhost:4000/addplant/addplant", plants, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((response1) => {
        console.log(response1);
        navigate("/plant");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Nav />
      <div className="container-fluid addplant-container">
        <div className="row addplant-firstrow">
          <div className="col-lg-4"></div>
          <div className="col-lg-4 addplant-col mt-5">
            <form>
              <div className="addplant-inputs">
                <div className="form-group">
                  <label htmlFor=""> Plant Image</label>
                  <input
                    type="file"
                    className="form-control  "
                    name="plantimage"
                    id="plimage"
                    onChange={(e) => {
                      setPlantimage(e.target.files[0]);
                      setPlants({ ...plants, image: e.target.files[0].name });
                      console.log(e.target.files[0]);
                    }}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Plant Name</label>
                  <input
                    type="text"
                    className="form-control "
                    name="plantname"
                    id="plname"
                    onChange={change}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Plant price</label>
                  <input
                    type="text"
                    className="form-control "
                    name="plantprice"
                    id="plprice"
                    onChange={change}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="">Plant Description</label>
                  <input
                    type="text"
                    className="form-control"
                    name="plantdescription"
                    id="pldescription"
                    onChange={change}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="">Plant Category</label>
                  <input
                    type="text"
                    className="form-control"
                    name="plantcategory"
                    id="plcategory"
                    onChange={change}
                  />
                </div>

                <div className="form-group button-group">
                  <input
                    type="button"
                    className="btn btn-success mt-2"
                    value="Click to add"
                    onClick={onclickaddplant}
                  />
                </div>
              </div>
              </form>
            
          </div>
          <div className="col-lg-4"></div>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Addplants;
