/* 
  hero.js
  Author - Nithesh Singh (meontechno@gmail.com)
*/

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography } from "@material-ui/core";

import DateSelector from "./dateSelector";
import herobg from "../assets/hero.jpg";

const useStyles = makeStyles((theme) => ({
  mainFeaturedPost: {
    position: "relative",
    alignContent: "center",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing(4),
    backgroundImage: `url(${herobg})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  },
  titleBox: {
    maxWidth: 600,
    margin: "auto",
    textAlign: "left",
  },
  caption: {
    opacity: 0.5,
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "rgba(0,0,0,.3)",
  },
  mainFeaturedPostContent: {
    position: "relative",
    textAlign: "center",
    padding: theme.spacing(3),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(12),
    },
  },
  headline: {
    fontWeight: "600",
  },
  subtitle: {
    fontWeight: "400"
  },
  searchWrap: {
    marginTop: "15px"
  }
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.mainFeaturedPost}>
      <div className={classes.overlay} />
      <div className={classes.mainFeaturedPostContent}>
        <div className={classes.titleBox}>
          <Typography
            className={classes.headline}
            variant="h4"
            color="inherit"
          >
            The best free mars photos shared by NASA rovers
          </Typography>
          <Typography
            className={classes.subtitle}
            variant="subtitle1"
            color="inherit"
          >
            Images shown here are provided by NASA Open APIs https://api.nasa.gov
          </Typography>
          <Typography
            variant="caption"
            className={classes.caption}
            style={{marginBottom: "200px"}}
            gutterBottom
          >
            (developed by Nithesh Singh)
          </Typography>
          <div class={classes.searchWrap}>
            <Typography variant="body2" color="inherit" gutterBottom>
              Select a date and click search to see some awesome mars photos 
            </Typography>
            <DateSelector />
          </div>
        </div>
      </div>
    </Paper>
  );
};

export default Hero;
