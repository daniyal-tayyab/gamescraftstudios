import React, { useState } from "react";
import Popover from "./Popover";

import MapModal from "../modals/MapModal";

const GridComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [hover, setHover] = useState(false);

  const handleDivClick = (image) => {
    setIsOpen(true);
    setSelectedImage(image);
  };

  const handleCloseDrawer = () => {
    setIsOpen(false);
    setSelectedImage(null);
  };

  const handleHover = () => setHover((prevState) => !prevState);

  const renderGrid = () => {
    const grid = [];
    const centerStartRow = 6;
    const centerStartCol = 6;
    const centerEndRow = 11;
    const centerEndCol = 11;

    for (let row = 0; row < 18; row++) {
      for (let col = 0; col < 18; col++) {
        const divKey = `${row}-${col}`;
        const isCenterDiv =
          row >= centerStartRow &&
          row <= centerEndRow &&
          col >= centerStartCol &&
          col <= centerEndCol;

        const imageClass = isCenterDiv ? "image-div" : "";

        grid.push(
          <div
            key={divKey}
            className={`grid-item ${imageClass}`}
            onClick={() => handleDivClick(divKey)}
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
          >
            {isCenterDiv && <img src={getRandomImage()} alt="Random" />}
            {hover && (
              <div className="popover">
                <Popover />
              </div>
            )}
          </div>
        );
      }
    }

    return grid;
  };

  const getRandomImage = () => {
    const images = [
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/https://api.sandbox.game/assets/97f17984-27d4-4be1-854c-adfe2b9eeded/preview",
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/https://api.sandbox.game/assets/2dc96593-8962-413d-9460-eca9abe0fa15/preview",
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/https://api.sandbox.game/assets/d2a28e14-9b3b-4304-a7c9-50ea1bad8ac6/preview",
      "https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/https://api.sandbox.game/assets/048a765c-39e9-425f-ac4d-d61afff71ab1/preview",
      // Add more image URLs as needed
    ];

    const randomIndex = Math.floor(Math.random() * images.length);
    return images[randomIndex];
  };

  return (
    <div className="grid-container">
      {renderGrid()}
      {isOpen && <MapModal setOpen={handleCloseDrawer} />}
    </div>
  );
};

export default GridComponent;
