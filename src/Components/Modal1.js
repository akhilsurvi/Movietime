import React from "react";
import {
  Card,
  CardMedia,
  Modal,
  Fade,
  Backdrop,
  Button
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ExpandCircleDownOutlinedIcon from '@mui/icons-material/ExpandCircleDownOutlined';
import {Grid, IconButton} from "@mui/material";
import { Rating } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import useStyles from "./styles";

const Rnd = ({data}) => {
 
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const classes = useStyles();

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open}>
        <Grid sx={style} columns={{ xs: 1, sm: 1, md: 1 }}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.title}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.overview}
          </Typography>
          <Rating
            name="read-only"
            value={Math.round(data.vote_average / 2)}
            readOnly
          />
          <Stack direction="row" spacing={2}>
            {console.log(cdata[0])}
            <Avatar
              alt="Remy Sharp"
              src={`https://image.tmdb.org/t/p/w500/${cdata_ele1}`}
              sx={{ width: 100, height: 100, objectFit: "cover" }}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://image.tmdb.org/t/p/w500/${cdata_ele2}`}
              sx={{ width: 100, height: 100, objectFit: "cover" }}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://image.tmdb.org/t/p/w500/${cdata_ele3}`}
              sx={{ width: 100, height: 100, objectFit: "cover" }}
            />
            <Avatar
              alt="Remy Sharp"
              src={`https://image.tmdb.org/t/p/w500/${cdata_ele4}`}
              sx={{ width: 100, height: 100, objectFit: "cover" }}
            />
            {/* <Avatar alt="Remy Sharp" src={`https://image.tmdb.org/t/p/w500${cdata[1].profile_path}`} sx={{ width: 100, height: 100,objectFit:"cover" } }/> */}
          </Stack>
        </Grid>
        </Fade>
      </Modal>
    </div>
  );
};

export default Rnd;
