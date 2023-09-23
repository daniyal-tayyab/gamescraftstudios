import React from 'react';

import client from "../../../images/nat-9.jpg";

const StoryCard = ({item}) => {
  return (
    <div class="story">
        <figure class="story__shape">
            <img src={item.icon} alt="client" class="story__img" />
            <figcaption class="story__caption">{item.name}</figcaption>
        </figure>
        <div class="story__text">
            <h3 class="heading-tertiary u-margin-bottom-small">
                {item.title}
            </h3>
            <p>
                {item.desc}
            </p>
        </div>
  </div>
  )
}

export default StoryCard