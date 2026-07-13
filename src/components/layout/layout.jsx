import { Outlet, NavLink } from "react-router-dom";
import "./layout.css";
import logo from '../..//assets/images/logo.svg'

function Layout() {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header-top">
            <img
              className="logo"
              src={logo}
              alt="TRUE"
            />

            <div className="header-right">
              <p>+998 (90) 606-66-66</p>
              <button>ОСТАВИТЬ ЗАЯВКУ</button>
            </div>
          </div>

          <nav className="navbar">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              О БРЕНДЕ
            </NavLink>

            <NavLink
              to="/preimushestvo"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              ПРЕИМУЩЕСТВА
            </NavLink>

            <NavLink
              to="/otkritklub"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              ОТКРЫТЬ КЛУБ
            </NavLink>

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              КОНТАКТЫ
            </NavLink>
          </nav>
        </div>
      </header>

      <main>
        <Outlet />
      </main>

      <footer className="footer">
        <div className="container footer-box">

          <div>
            <h4>КАТАЛОГ ТОВАРОВ</h4>

            <p>Кардио тренажеры</p>
            <p>Силовые тренажеры</p>
            <p>Гантели</p>
            <p>Штанги</p>
            <p>Функциональный тренинг</p>
            <p>Аксессуары</p>
          </div>

          <div>
            <h4>ИНФОРМАЦИЯ</h4>

            <p>О бренде</p>
            <p>Преимущества</p>
            <p>Открыть клуб</p>
            <p>Контакты</p>
          </div>

          <div>
            <h4>КОНТАКТЫ</h4>

            <p>info@prowellness.uz</p>
            <p>+998 (90) 606-66-66</p>
          </div>

          <div>
            <h4>ПОДПИСАТЬСЯ</h4>

            <p>Новости и акции</p>
          </div>

        </div>
      </footer>
    </>
  );
}

export default Layout