import './Preimushestvo.css';

import banner from '../../assets/images/banner.svg'

function Preimushestvo() {
  return (
    <section className="preim">

      <div className="preim-top">
        <span>НАШИ ПРЕИМУЩЕСТВА</span>

        <h1>ПРЕИМУЩЕСТВА TRUE FITNESS</h1>

        <p>
          БЛАГОДАРЯ КОТОРЫМ МЫ ЯВЛЯЕМСЯ МИРОВЫМ ЛИДЕРОМ
          В ПРОИЗВОДСТВЕ ФИТНЕС-ОБОРУДОВАНИЯ
        </p>
      </div>

      <div className="preim-banner">

        <img src={banner} alt="TRUE FITNESS" />

        <div className="banner-content">

          <span>TRUE FITNESS</span>

          <h2>
            ПОЛУЧИТЕ
            <br />
            <span className="blue">
              ЭКСКЛЮЗИВНОЕ
            </span>
            <br />
            <span className="blue">
              ПРЕДЛОЖЕНИЕ
            </span>
            <br />
            НА ТРЕНАЖЕРЫ TRUE FITNESS
          </h2>

          <p>
            МЫ БУДЕМ РАДЫ ПРОКОНСУЛЬТИРОВАТЬ ВАС
            И ПОМОЧЬ С ПОДБОРОМ ОБОРУДОВАНИЯ
          </p>

          <form className="preim-form">

            <input
              type="text"
              placeholder="ИМЯ"
            />

            <input
              type="text"
              placeholder="+998 (99)-999-99-99"
            />

            <input
              type="email"
              placeholder="E-MAIL"
            />

            <button>
              ОТПРАВИТЬ
            </button>

          </form>

          <small>
            *НАЖИМАЯ НА КНОПКУ, ВЫ ДАЕТЕ СОГЛАСИЕ НА ОБРАБОТКУ
            ПЕРСОНАЛЬНЫХ ДАННЫХ И СОГЛАШАЕТЕСЬ С ПОЛИТИКОЙ
            КОНФИДЕНЦИАЛЬНОСТИ.
          </small>

        </div>

      </div>

    </section>
  );
}

export default Preimushestvo;