import React from 'react';
import '../styles/HomeItem.css';

function HomeItem(props) {
  return(
    <div className="home-item">
        <a href={props.link} className="category">
          {props.img ? <div className="img"><img src={props.img} alt=""/></div> : null}
          <div className="text">
            <h3 className="title">{props.title}</h3>
            <p className="subtitle">{props.subtitle}</p>
          </div>
        </a>
    </div>

    )
}
export default HomeItem