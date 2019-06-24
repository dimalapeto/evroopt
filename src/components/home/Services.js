import React from 'react'
import HomeItem from './HomeItem'
import GridElement from './GridElement'
import logo_ecity from '../../img/ecity.svg'
import logo_edostavka from '../../img/edostavka.svg'
import logo_flowers from '../../img/flowers.svg'
import logo_gipermall from '../../img/gipermall.svg'
import logo_pochta from '../../img/pochta.svg'
import logo_tehnoplus from '../../img/texnoplus.svg'

function Services() {
  return(
      <GridElement title='"Евроопт" рекомендует' styleClass="centered">
          <HomeItem
            link="https://ecity.evroopt.by/"
            img={logo_ecity}
          />
          <HomeItem
            link="https://e-dostavka.by/"
            img={logo_edostavka}
          />
          <HomeItem
            link="http://flowers.evroopt.by/"
            img={logo_flowers}
          />
          <HomeItem
            link="https://gipermall.by/"
            img={logo_gipermall}
          />
          <HomeItem
            link="https://post.gipermall.by/?utm_source=site-evroopt&utm_medium=logo_main&utm_campaign=Pochta"
            img={logo_pochta}
          />
          <HomeItem
            link="https://tehnoplus.by/"
            img={logo_tehnoplus}
          />
      </GridElement>
    )
}

export default Services