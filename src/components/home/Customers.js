import React from 'react';
import HomeItem from './HomeItem'
import GridElement from './GridElement';

function Customers() {
  return(
      <GridElement title="Покупателям">
          <HomeItem
            link="https://evroopt.by/jobs/"
            title="Вакансии"
            subtitle='Сделай карьеру в "Евроопт"'
            img="https://evroopt.by/wp-content/uploads/2019/06/jobs-2.jpg"
          />
          <HomeItem
            link="https://evroopt.by/shops/"
            title="Магазины"
            subtitle='Найди ближайший'
            img="https://evroopt.by/wp-content/uploads/2019/06/shops-2.jpg"
          />
          <HomeItem
            link="#"
            title="Бесплатные автобусы"
            subtitle='Смотри расписания здесь'
            img="https://evroopt.by/wp-content/uploads/2019/06/buses.jpg"
          />
          <HomeItem
            link="https://evroopt.by/jobs/"
            title='Карта "Е-плюс"'
            subtitle='Дисконтная программа "Евроопт"'
            img="https://evroopt.by/wp-content/uploads/2019/06/e-plus.png"
          />
      </GridElement>
    )
}

export default Customers