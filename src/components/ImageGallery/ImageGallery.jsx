import React from "react";
import "./Gallery.css"; // Corrected file name to match the import statement

const ImageGallery = () => {
  // Array of image names
  const images = [
    { name: "Image1", src: "image1.jpg" },
    { name: "Image2", src: "image2.jpg" },
    { name: "Image3", src: "image3.jpg" },
    { name: "Image4", src: "image4.jpg" },
    { name: "Image5", src: "image5.jpg" },
    { name: "Image6", src: "image6.jpg" },
    { name: "Image7", src: "image7.jpg" },
    { name: "Image8", src: "image8.jpg" },
    { name: "Image9", src: "image9.jpg" },
  ];

  return (
    <div className="singleLineImageContainer">
      {/* Map over the images array to generate image elements */}
      {images.map((image, index) => (
        <div key={index} className="image">
          <img src={image.src} alt={image.name} />
          <div className="image-overlay">{image.name}</div>{" "}
          {/* Add name overlay */}
        </div>
      ))}
    </div>
  );
};

export default ImageGallery;
