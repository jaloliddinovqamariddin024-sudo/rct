import './contact.css'

import map from '../../assets/images/map.svg';

function Contact() {
  return (
    <section className="contact-page">
      <div className="contact-header">
        <p>КОНТАКТЫ</p>

        <h1>ШОУ РУМ TRUE В ТАШКЕНТЕ</h1>

        <h3>ПОСЕТИТЕ НАШ ВЫСТАВОЧНЫЙ ЗАЛ В TASHKENT CITY, BOULEVARD</h3>
      </div>

      <div className="contact-content">
        <div className="contact-map">
          <img src={map} alt="Карта" />
        </div>

        <div className="contact-info">
          <h2>ОФИЦИАЛЬНЫЙ ДИСТРИБЬЮТОР В УЗБЕКИСТАНЕ</h2>

          <p>+998 (90) 606-86-66</p>

          <p>info@prowellness.uz</p>

          <p>
            Адрес: Ташкент Сити, Бульвар,
            <br />
            ул. Фурката 2А
          </p>

          <div className="work-time">
            <p>ПН–СБ 09:00–19:00</p>
            <p>ВС НЕ РАБОЧИЙ</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;