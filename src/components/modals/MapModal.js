import React from "react";

import Button from "../Button";

import locationIcon from "../../images/green-location-icon.png";
import polygon from "../../images/polygon-logo.png";

const MapModal = ({ setOpen }) => {
  return (
    <div className="map-modal">
      <div className="close" onClick={setOpen}>
        <img
          src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/sidebar/close-icon.svg"
          alt="close"
        />
      </div>
      <div className="map-modal__wrapper">
        <div className="modal-content">
          <div className="modal-content__media">
            <img
              src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/28_Map/LandPreview.png"
              alt="yo"
            />
          </div>
          <div className="modal-content__info">
            <h4 className="modal-content__info__heading">60, 12</h4>
            <div className="modal-content__info__location">
              <div>Regular</div>
              <div>
                <img src={locationIcon} alt="location" />
                <span>74, 25</span>
              </div>
            </div>
            <div className="modal-content__info__desc">
              <p>
                'FacBros' is the first TSB builder studio in Korea. We provide a
                total solution for production of experiences. The solution
                provides all stages of...
              </p>
              <span>Show More</span>
            </div>
            <div className="modal-content__info__owner">
              <div>
                <h5>OWNER</h5>
                <p>@shonT</p>
                <div>
                  <img
                    src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/discord.svg"
                    alt="discord"
                  />
                  <img
                    src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/twitter.svg"
                    alt="twitter"
                  />
                  <img
                    src="https://www.sandbox.game/cdn-cgi/image/f=auto,origin-auth=share-publicly,onerror=redirect,dpr=1.5/img/Icons/youtube.svg"
                    alt="youtube"
                  />
                </div>
              </div>
              <div>
                <h5>URL</h5>
                <p>https://www.facbros.com/</p>
              </div>
            </div>
            <div className="modal-content__info__grid">
              <div>BLOCKCHAIN</div>
              <div>SIZE</div>
              <div>TOKEN ID</div>
              <div>
                <img src={polygon} alt="chain" />
                Polygon
              </div>
              <div>24 x 24</div>
              <div>93710</div>
            </div>
            <div className="modal-content__info__points">
              <p>WHAT CAN I DO WITH LAND?</p>
              <ul>
                <li>
                  <div></div>
                  Start building! <span>Download Game Maker</span>
                </li>
                <li>
                  <div></div>Earn special rewards
                </li>
                <li>
                  <div></div>Exclusive LAND Owner staking
                </li>
                <li>
                  <div></div>Sell your LAND
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Button buttonType="default">Make Offer</Button>
      </div>
    </div>
  );
};

export default MapModal;
