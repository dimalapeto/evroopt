import React from 'react';
import Slider from "react-slick";
import GridElement from './GridElement';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../styles/HomeSlider.css';

class HomeSlider extends React.Component {
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
      slidesToScroll: 1,
      //autoplay: true,
      autoplaySpeed: 3000
    };
  return (
    <GridElement title='Сегодня в "Евроопт"' link="#" linkText="">
      <Slider {...settings} slidesToShow={this.state.width > 1023 ? 2 : 1} className="home-slider">
          <div><a href="/"><img src="https://evroopt.by/wp-content/uploads/2019/05/icon-picnic-720x360_1.jpg" alt="" /></a></div>
          <div><a href="/"><img src="https://evroopt.by/wp-content/uploads/2019/05/toys_sale_720x360.jpg" alt="" /></a></div>
          <div><a href="/"><img src="https://evroopt.by/wp-content/uploads/2019/05/bbq-season_icon.jpg" alt="" /></a></div>
          <div><a href="/"><img src="https://evroopt.by/wp-content/uploads/2019/04/knopka-nedelya-brendov_0804.jpg" alt="" /></a></div>
          <div><a href="/"><img src="https://evroopt.by/wp-content/uploads/2019/03/blok-akcii-kuplyalka-spring.jpg" alt="" /></a></div>
          <div><a href="/"><img src="https://evroopt.by/wp-content/uploads/2018/10/knopka-stopprice.jpg" alt="" /></a></div>

      </Slider>
    </GridElement>
    );
}
};
export default HomeSlider