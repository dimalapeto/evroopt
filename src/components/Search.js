import React from 'react';
import './styles/Search.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Search(props) {
  return(
      <div className={"search " + props.className}>
        <form>
          <input type="text" placeholder="Поиск по сайту..." />
          <button className="btn btn-icon"><FontAwesomeIcon icon="search" size="lg" /></button>
        </form>
      </div>
    )
}
export default Search