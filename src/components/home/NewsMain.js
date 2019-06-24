import React from 'react'
import GridElement from './GridElement'
import '../styles/NewsMain.css'

class NewsMain extends React.Component {
  render() {
  return (
    <GridElement title="Новости" link="#" linkText="Читать Все новости">
      <section className="news-block">
        <article className="news-entry">
        <a href="/">
          {/*110 символов максимум*/}
          <div className="news-title"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.</p></div>
        </a>
      </article>
      <article className="news-entry">
        <a href="/">
          {/*110 символов максимум*/}
          <div className="news-title"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.</p></div>
        </a>
      </article>
      <article className="news-entry">
        <a href="/">
          {/*110 символов максимум*/}
          <div className="news-title"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.</p></div>
        </a>
      </article>
      <article className="news-entry">
        <a href="/">
          {/*110 символов максимум*/}
          <div className="news-title"><p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum.</p></div>
        </a>
      </article>
      </section>
    </GridElement>
    );
}
};
export default NewsMain