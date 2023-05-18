import React, { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
// import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { CardActionArea } from "@mui/material";
// import Rating from "@mui/material/Rating";
// import Button from "@mui/material/Button";
import Modal from "./Modal";
import "./Movies.css";
import Stack from "@mui/material/Stack";
// import { IconButton } from "@mui/material";
import Basicsnackbar from "./Basicsnackbar";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined";
import Basicsnackbar2 from "./Basicsnackbar2";
import movieTrailer from "movie-trailer";
import { useRef } from "react";
import YouTube from "react-youtube";
// const api_key = "a5ba43a010dcb16ff724465d8f0a52b7";
const imageurl = "https://image.tmdb.org/t/p/w500";

function Movies({ title, urltype }) {
  const [data, setdata] = useState([]);
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

  async function fetchData() {
    const response = await axios.get(urltype);
    // console.log(response.data.results)
    setdata(response.data.results);
  }
  useEffect(() => {
    fetchData();
    // console.log(data.length)
  }, [urltype]);

  // console.log(data[0]);
  // console.log(urltype)
  return (
    <>
      <h3 className="my-5" style={{ color: "white" }}>
        {title}
      </h3>
      <div className="row">
        {data.map((element) => {
          return (
            <div className="col col-md-2">
              <Card sx={{ maxWidth: 345 }} className="img my-3">
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="300"
                    image={`${imageurl}${element.poster_path}`}
                    alt="green iguana"
                    style={{ objectFit: "fill" }}
                    onClick={() => handleclick(element)}
                  />
                  <CardContent
                    style={{
                      backgroundColor: "black",
                      color: "white",
                      borderColor: "white",
                    }}
                  >
                    {/* <Typography gutterBottom variant="h6" component="div">
                      {element.title}
                    </Typography> */}
                    <Stack direction="row" spacing={2}>
                      <Modal data={element} />
                      <Basicsnackbar data={element.title} />
                      <Basicsnackbar2 data={element.title} />
                    </Stack>
                    {/* <Typography component="legend">Read only</Typography>
                  <Rating name="read-only" value={value} readOnly /> */}
                  </CardContent>
                </CardActionArea>
              </Card>
            </div>
          );
        })}
      </div>
      <div ref={ref}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </>
  );
}

export default Movies;
