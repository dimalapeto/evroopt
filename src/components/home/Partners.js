import React from 'react';
import HomeItem from './HomeItem'
import GridElement from './GridElement';

function Partners() {
  return(
      <GridElement title="Партнерам" link="#" linkText='все предложения для партнеров'>
          <HomeItem
            link="https://evroopt.by/"
            title="Ищем арендодателей"
            subtitle='Приглашаем к сотрудничеству по поиску арендных площадей для новых магазинов «Хит!».'
          />
          <HomeItem
            link="https://evroopt.by/"
            title="Продаем оборудование б/у"
            subtitle='ООО «Евроторг» реализует торговое оборудование бывшее в употреблении. Цены — договорные.'
          />
          <HomeItem
            link="https://evroopt.by/"
            title="Реклама"
            subtitle='Партнерам компании ООО «Евроторг» предлагаем услуги по размещению рекламной информации'
          />
      </GridElement>
    )
}

export default Partners