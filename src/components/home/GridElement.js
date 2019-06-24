import React from 'react';
import '../styles/GridElement.css';

class GridElement extends React.Component {
  render() {
  const {children} = this.props;
  const styleClass = this.props.styleClass;
  return(
      <div className={"grid-element " + styleClass}>
        <div className="block-title"><h2>{this.props.title}</h2></div>
        <div className="grid_row">
          {children}
        </div>
        <div className="block-more link"><a href={this.props.link}>{this.props.linkText}</a></div>
      </div>
    )
  }

}

export default GridElement