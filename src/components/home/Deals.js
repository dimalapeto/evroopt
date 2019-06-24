import React from 'react';
import HomeItem from './HomeItem'
import GridElement from './GridElement';

function Deals() {
  return(
      <GridElement title="Акции и скидки" link="#" linkText="смотреть все акции и скидки">
          <HomeItem
            link="https://evroopt.by/deals/"
            title="Все на пикник!"
            subtitle="Товары для пикника по лакомым ценам каждую пятницу и субботу"
            img="https://evroopt.by/wp-content/uploads/2019/05/icon-picnic-720x360_1.jpg"
          />
          <HomeItem
            link="https://evroopt.by/deals/"
            title="Сочные дни"
            subtitle="Суперцены на фрукты и овощи"
            img="https://evroopt.by/wp-content/uploads/2019/05/vitamin-days_720x360.jpg"
          />
          <HomeItem
            link="https://evroopt.by/deals/"
            title="Куплялька"
            subtitle="Скидки на детские товары"
            img="https://evroopt.by/wp-content/uploads/2019/03/blok-akcii-kuplyalka-spring.jpg"
          />
          <HomeItem
            link="https://evroopt.by/deals/"
            title="Неделя брендов!"
            subtitle="Скидка 40% на PALMOLIVE и PERSIL и 50% на Солнце и луна и Huggies"
            img="https://evroopt.by/wp-content/uploads/2019/04/knopka-nedelya-brendov_0804.jpg"
          />
      </GridElement>
    )
}

export default Deals