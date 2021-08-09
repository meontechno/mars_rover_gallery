/* 
  imageGallery.js
  Author - Nithesh Singh (meontechno@gmail.com)
*/

import React, { useState, useEffect } from "react";
import { LazyLoadComponent, trackWindowScroll } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

import ImageDetails from "./imageDetails";
import "../assets/imageGallery.css";

const ImageGallery = (props, images, scrollPosition) => {
  const data = props.rover.photos === undefined ? [] : props.rover.photos;

  const [scrollPosition1, setPosition] = useState(0);
  const [isApplyModalOpen, setApplyModalOpen] = useState(false);
  const [imageItem, setImageItem] = useState("");

  const handleApplyModalClose = () => {
    setApplyModalOpen(false);
  };

  useEffect(() => {
    function updatePosition() {
      setPosition(window.pageYOffset);
    }
    window.addEventListener("scroll", updatePosition);
    updatePosition();
    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  const handleModal = (imageItem) => {
    setImageItem(imageItem);
    setApplyModalOpen(true);
  };

  return (
    <div id="galleryWrap" spacing={1}>
      {data.map((item) => (
        <LazyLoadComponent scrollPosition={scrollPosition1}>
          <div id="galleryItem">
            <img
              src={item.img_src}
              alt=""
              onClick={() => handleModal(item)}
              id="thumbnail"
            />
          </div>
        </LazyLoadComponent>
      ))}

      <ImageDetails
        imageItem={imageItem}
        onApply={handleApplyModalClose}
        onClose={handleApplyModalClose}
        open={isApplyModalOpen}
      />
    </div>
  );
};

export default trackWindowScroll(ImageGallery);
