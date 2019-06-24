import React from 'react'
import '../styles/Home.css'
import HomeSlider from './HomeSlider'
import ProductSlider from './ProductSlider'
import NewsMain from './NewsMain'
import Deals from './Deals'
import Customers from './Customers'
import Partners from './Partners'
import Services from './Services'

function Home() {
  return(
    <section className="home-grid-container">
      <div id="slider"><HomeSlider /></div>
      <div id="redprice"><ProductSlider /></div>
      <div id="news"><NewsMain /></div>
      <div id="deals"><Deals /></div>
      <div id="customers"><Customers /></div>
      <div id="partners"><Partners /></div>
      <div id="services"><Services /></div>
    </section>

    )
}

export default Home