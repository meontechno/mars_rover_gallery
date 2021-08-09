/* 
  App.js
  Author - Nithesh Singh (meontechno@gmail.com)
*/

import React, { Component } from "react";
import { Grid } from "@material-ui/core";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Hero from "./components/hero";
import ImageGallery from "./components/imageGallery";
import { connect } from "react-redux";

const theme = createMuiTheme({
  typography: {
    fontFamily: ["Poppins", "Arial", "sans-serif"].join(","),
  },
});

class App extends Component {
  render() {
    const marsImages = this.props.images;
    return (
      <ThemeProvider theme={theme}>
        <Hero />
        <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justify="center"
        >
          <Grid item md={12}>
            <ImageGallery rover={marsImages} />
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = (state) => {
  return { images: state.galleryReducer.roverImages };
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps())(App);
