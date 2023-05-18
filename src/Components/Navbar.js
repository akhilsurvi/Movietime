import React, { useEffect } from "react";
import "./Navbar.css";
import YouTube from "react-youtube";
import axios from "axios";
import { useState } from "react";
// import { Opacity } from "@mui/icons-material";
import { Button } from "@mui/material";
import { Carousel } from "react-bootstrap";
import { useRef } from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import movieTrailer from "movie-trailer";
import logo_img from "./MOVIE.png";
import avatar_img from "./avatar.png"
import { useNavigate } from "react-router-dom";
const imageurl = "https://image.tmdb.org/t/p/original";

// const api_key = "a5ba43a010dcb16ff724465d8f0a52b7";
const url = `https://api.themoviedb.org/3/trending/movie/day?api_key=a5ba43a010dcb16ff724465d8f0a52b7`;
function Navbar() {
  // const image_path = `${imageurl}rfnmMYuZ6EKOBvQLp2wqP21v7sI.jpg`;
  // let firstelement;
  const navigate = useNavigate();


  const handle_mouse_click = (event) => {
    console.log(event.target);
    // alert("hello");
    console.log('Image clicked');
  };


 
  const [data1, setdata1] = useState([]);
  const [trailerUrl, settrailerUrl] = useState("");
  const ref = useRef(null);
  const opts = {
    height: "400",
    width: "100%",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  };
  async function getdata() {
    const response = await axios.get(url);
    setdata1(response.data.results);
    // firstelement = data1.shift();
    // console.log(firstelement);
    // console.log(data1)
  }
  async function getdata() {
    const response = await axios.get(url);
    setdata1(response.data.results);
    // firstelement = data1.shift();
    // console.log(firstelement);
    // console.log(data1)
  }
  const handleclick = (movie) => {
    if (trailerUrl) {
      settrailerUrl("");
    } else {
      movieTrailer(movie?.title || "")
        .then((Url) => {
          const urlparams = new URLSearchParams(new URL(Url).search);
          console.log(urlparams.get("v"));
          settrailerUrl(urlparams.get("v"));
        })
        .catch((error) => console.log(error));

      ref.current?.scrollIntoView({ behavior: "smooth" });
    }
  };
  useEffect(() => {
    getdata();
  }, []);
  
  return (
    <>
      {/* Navbar */}

      <nav class="navbar navbar-expand-lg my-nav ">
        <a class="navbar-brand" href="">
          <img src={logo_img} className="logoimg" alt="" />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item item mx-3" >
          <a class="nav-link" className="item" href="">
          <img src={avatar_img}   className="avatarimg mx-3" onClick={()=>navigate("./profile")} alt=""  />
              </a>
            </li>
          </ul>
          {/* <ul class="navbar-nav ms-auto">
          <li class="nav-item item mx-3" >
          <a class="nav-link" className="item" href="/profile">
          myprofile <img src={avatar_img}   className="avatarimg mx-3" alt=""  />
              </a>
            </li>
          </ul> */}
        </div>
      </nav>

      {/* carousel */}

      {/* <div
        className="carousel slide my-carousel"
        id="carouselExampleInterval"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner"> */}
      {/* <div className="carousel-item active" data-bs-interval="500">
            <img
              src={`${imageurl}${data1[0].backdrop_path}`}
              style={{
                height: "900px",
                objectFit: "cover",
                opacity: "0.4",
              }}
              className="d-block w-100"
              alt="..."
            />
            <div className="carousel-caption">
              <h3 className="my-5">{data1[0].title}</h3>
              <Button
                variant="contained"
                startIcon={<PlayCircleIcon />}
                color="error"
              >
                play Now
              </Button>
            </div>
          </div> */}
      {/* {data1.length &&
            data1.map((element) =>{
              return (
                <div className="carousel-item active" data-bs-interval="500">
                  <img
                    src={`${imageurl}${element.backdrop_path}`}
                    style={{
                      height: "900px",
                      objectFit: "cover",
                      opacity: "0.4",
                    }}
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption">
                    <h3 className="my-5">{element.title}</h3>
                    <Button
                      variant="contained"
                      startIcon={<PlayCircleIcon />}
                      color="error"
                    >
                      play Now
                    </Button>
                  </div>
                </div>
              );
            })}
         </div>
      </div> */}

      <Carousel className="lower" controls={false}>
        {data1.length &&
          data1.map((element) => {
            return (
              <Carousel.Item interval={1000}>
                <img
                  className="d-block w-100"
                  src={`${imageurl}${element.backdrop_path}`}
                  style={{
                    height: "900px",
                    objectFit: "cover",
                    opacity: "0.4",
                  }}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3 className="my-5">{element.title}</h3>
                  <Button
                    variant="contained"
                    startIcon={<PlayCircleIcon />}
                    color="error"
                    onClick={() => handleclick(element)}
                  >
                    play Now
                  </Button>
                </Carousel.Caption>
              </Carousel.Item>
            );
          })}
      </Carousel>
      <div ref={ref}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Navbar;
