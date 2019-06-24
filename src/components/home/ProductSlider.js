import React from 'react';
import Slider from "react-slick";
import GridElement from './GridElement';
import ProductItem from '../ProductItem';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/ProductSlider.css';
import RedPrice from '../../api/RedPrice'

class ProductSlider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }
  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth });
  }
  render() {
    const settings = {
      arrows: true,
      infinite: true,
      pauseOnHover: true,
      speed: 500,
      //slidesToShow: 4,
      slidesToScroll: 1,
      //autoplay: true,
      autoplaySpeed: 3000
    };
    const productSlider = RedPrice.map( product =>
      <ProductItem
        img={product.img}
        desc={product.desc}
        dataDiscont={product.dataDiscont}
        priceNew={product.priceNew}
        priceOld={product.priceOld}
        key={product.id}
      />);
  return (
    <GridElement title="Красная цена" link="#" linkText="Смотреть все товары">
      <Slider {...settings} slidesToShow={this.state.width > 768 ? 4 : 2} className="product-slider">
         {productSlider}
      </Slider>
    </GridElement>
    );
}
};
export default ProductSlider