import './NotFound.css';
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>

      <h2>Страница не найдена</h2>

      <p>
        К сожалению, такой страницы не существует.
      </p>

      <Link to="/" className="home-btn">
        Вернуться на главную
      </Link>
    </div>
  );
}

export default NotFound;