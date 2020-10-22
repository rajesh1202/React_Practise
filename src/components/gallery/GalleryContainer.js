import React from "react";

import "./gallery-styles.css";

export default class GalleryContainer extends React.Component {
  state = {
    images: [],
    currentImageIndex: 0
  };

  API_URL = "https://picsum.photos/v2/list?page=1&limit=10";

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    fetch(this.API_URL)
      .then((res) => res.json())
      .then((imagesList) => {
        this.setState({ images: imagesList });
      });
  }

  onImageClick = (index) => this.setState({ currentImageIndex: index });

  render() {
    if (this.state.images.length === 0) {
      return "Loading gallery..";
    }

    const { images = [], currentImageIndex = 0 } = this.state;
    const mainImage = images[currentImageIndex] || {};
    return (
      <section classname="ui__gallery">
        <main>
          <img
            className="ui__gallery__image"
            src={mainImage.download_url}
            alt={mainImage.author}
          />
        </main>

        <ul className="ui__gallery__list">
          {images.map((image, index) => (
            <li className={index === currentImageIndex ? "active" : ""}>
              <img
                onClick={(e) => this.onImageClick(index)}
                src={image.download_url}
                alt={image.author}
              />
            </li>
          ))}
        </ul>
      </section>
    );
  }
}
