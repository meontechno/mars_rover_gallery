/* 
  imageDetails.js
  Author - Nithesh Singh (meontechno@gmail.com)
*/

import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import Typography from "@material-ui/core/Typography";

import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  dialogPaper: {
    maxHeight: "90vh",
    minWidth: "60vw",
    maxWidth: "90vw",
  },
  dialogContent: { 
    width: "100%", 
    textAlign: "center", 
    position: "relative" 
  },
  imageWrap: {
    maxWidth: "500px",
    height: "auto",
    display: "inline-block",
    padding: "50px 0 50px 0",
  },
  dialogImage: {
    display: "block", 
    width: "100%", 
    height: "auto" 
  },
  dialogButton: {
    textTransform: 'none'
  },
  downloadImage: {
    color: 'inherit',
    textDecoration: 'none',
    '&:hover': {
      color: 'gray',
      textDecoration: 'none'
    },
    '&:focus': {
      textDecoration: 'none'
    },
    '&:active': {
      textDecoration: 'none'
    }
  }
}));

function ImageDetails(props) {
  const customStyle = useStyles();

  const imageItem = props.imageItem === undefined ? [] : props.imageItem;

  return imageItem.length === 0 ? (
    <div></div>
  ) : (
    <div>
      <Dialog
        onClose={props.onClose}
        maxWidth={"lg"}
        open={props.open}
        aria-labelledby="customized-dialog-title"
        classes={{ paper: customStyle.dialogPaper }}
      >
        <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
          <Typography variant="h6">
            Photo taken by- {imageItem.rover.name}
          </Typography>
        </DialogTitle>
        <DialogContent dividers>
          <div className={customStyle.dialogContent}>
            <div className={customStyle.imageWrap}>
              <img src={imageItem.img_src} alt="" className={customStyle.dialogImage}/>
            </div>
          </div>
          <Grid item md={6} xs={12}>
            <Typography variant="body1">
              Camera name: {imageItem.camera.full_name}
            </Typography>
            <Typography variant="body1">
              Rover name: {imageItem.rover.name}
            </Typography>
            <Typography variant="body1">
              Landing date: {imageItem.rover.landing_date}
            </Typography>
            <Typography variant="body1">
              Launch date: {imageItem.rover.launch_date}
            </Typography>
          </Grid>
        </DialogContent>
        <DialogActions>
          <form action={imageItem.img_src} method="get" target="_blank">
            <Button className={customStyle.dialogButton} type="submit"> 
              Download
            </Button>
          </form>
          <Button className={customStyle.dialogButton} onClick={props.onClose} disableRipple> 
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default ImageDetails;
