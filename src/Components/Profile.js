import React from "react";
import logo_img from "./MOVIE.png";
import avatar_img from "./avatar.png";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import "./Profile.css";
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";
import { selectuser } from "../features/userSlice";
import { useSelector } from "react-redux";
import {auth} from "./firebase"
import {signOut} from "firebase/auth"
function Profile() {
  const navigate=useNavigate();
  const user=useSelector(selectuser);
  return (
    <div>
      <nav class="navbar navbar-expand-lg mynew-nav ">
        <a class="navbar-brand" href="./">
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

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item item mx-3 ">
              <img
                src={avatar_img}
                onClick={() => console.log("hello")}
                className="avatarimg"
                alt=""
                style={{ "pointer-events": "all" }}
              />
            </li>
          </ul>
        </div>
      </nav>
      <div className="profile_divi container my-3">
        <h1>Edit Profile</h1>
        <div className="row">
          <div className="col col-md-2 my-3">
            <img
              src={avatar_img}
              onClick={() => console.log("hello")}
              className="avatarimg"
              alt=""
              style={{ "pointer-events": "all" }}
            />
          </div>
          <div className="col col-md-8 my-3">
            <p className="mail my-3">{user.email}</p>
            <h5>plans ( current plan : premium )</h5>
            <p>Renewal Date : 05-12-2022</p>
            <Stack
              direction="row"
              justifyContent="space-between"
              className="my-3"
            >
              <p>Netflix standard</p>
              <Button variant="contained" color="error">
                Subscribe
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              className="my-3"
            >
              <p>Netflix Basic</p>
              <Button variant="contained" color="error">
                Subscribe
              </Button>
            </Stack>
            <Stack
              direction="row"
              justifyContent="space-between"
              className="my-3"
            >
              <p>Netflix Premium</p>
              <Button
                variant="contained"
                color="error"
                sx={{
                  backgroundColor: "gray",
                }}
              >
                Current package
              </Button>
            </Stack>
            <Button variant="contained" color="error" className="my-3 longbutt" onClick={()=>{
              // navigate("../")
              signOut(auth);
              
              window.location.reload(false);
              }}>
              Sign Out
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
