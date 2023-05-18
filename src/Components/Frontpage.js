import React from "react";
import "./Frontpage.css";
import myimage from "./MOVIE.png";
import { Button, imageListClasses } from "@mui/material";
import backimg from "./net.jpg";
import { Stack } from "@mui/material";
import { TextField } from "@mui/material";
import Signup from "./Signup";
import { Margin } from "@mui/icons-material";
import { useState } from "react";

function Frontpage() {
  const [flag, setflag] = useState(false);
  return (
    <>
      <nav className="navbar navbar-light sticky-top upper">
        <a className="navbar-brand" href="#">
          <img src={myimage} className="my_image"  alt="" />
        </a>
        <Button variant="contained" color="error"  onClick={()=>{setflag(true)}} className="me-4 signup_butt">
          Sign up
        </Button>
      </nav>
      <img src={backimg} className="back_img" alt="" />
      <div className="container  tit my-5">
        {!flag ? (
          <>
            <h1 className="my-3">Unlimited movies,TV shows and more</h1>
            <h5 className="my-3">Watch anywhere. Cancel anytime</h5>
            <h6 className="my-3">
              ready to watch? Enter your email to create to restart your
              membership
            </h6>
            <TextField
              id="outlined-email-input"
              label="Email"
              type="email"
              autoComplete="current-password"
              className="my-3"
              sx={{
                backgroundColor: "white",
                height: "50px",
              }}
            />
            <Button
              variant="contained"
              color="error"
              className="mx-3 my-3"
              style={{ height: "50px" }}
              onClick={()=>{setflag(true)}}
            >
              Get Started
            </Button>
          </>
        ) : (
          <Signup />
        )}
      </div>
    </>
  );
}

export default Frontpage;
