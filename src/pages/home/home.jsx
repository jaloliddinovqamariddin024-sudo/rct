import './home.css'

import hero from '../../assets/images/image7.svg'

import consult  from '../../assets/images/hero2.svg'
import service   from '../../assets/images/hero3.svg'
import project  from '../../assets/images/hero4.svg'
import showroom  from '../../assets/images/hero5.svg'
import parts  from '../../assets/images/hero6.svg'
import delivery  from '../../assets/images/icon.svg'

function Home() {
  const services = [
    {
      icon: consult,
      title: "КОНСАЛТИНГ",
      text: "Помогаем в разработке концепции клуба, зонировании, оснащении и расчёте финансовых показателей.",
    },
    {
      icon: service,
      title: "МОНТАЖ И СЕРВИСНОЕ ОБСЛУЖИВАНИЕ",
      text: "Полный цикл пуско-наладочных работ, а также сервисного обслуживания тренажеров.",
    },
    {
      icon: project,
      title: "ПОДБОР ОБОРУДОВАНИЯ И 3D ПРОЕКТ",
      text: "Помогаем подобрать оборудование, сделать расстановку на плане и показать 3D визуализацию будущего проекта.",
    },
    {
      icon: showroom,
      title: "ФИРМЕННЫЙ SHOW-ROOM",
      text: "Пройдите тест-драйв оборудования перед приобретением.",
    },
    {
      icon: parts,
      title: "ПОСТАВКА ЗАПЧАСТЕЙ",
      text: "Поставка как гарантийных, так и постгарантийных запасных частей.",
    },
    {
      icon: delivery,
      title: "ДОСТАВКА ПО ВСЕМУ УЗБЕКИСТАНУ",
      text: "Мы доставляем оборудование по всему Узбекистану.",
    },
  ];

  return (
    <main className="home">
      <section className="services">
        <div className="services-left">
          <h2>
            МЫ ПРЕДЛАГАЕМ
            <br />
            ПОЛНЫЙ КОМПЛЕКС УСЛУГ
          </h2>

          <div className="services-grid">
            {services.map((item, index) => (
              <div className="service-card" key={index}>
                <img src={item.icon} alt={item.title} />
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="services-right">
          <img src={hero} alt="TRUE Fitness" />
        </div>
      </section>
    </main>
  );
}

export default Home;
