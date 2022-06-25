import { Link } from "react-router-dom";
import "./home.component.styles.scss";

const Home = () => {
  return (
    <div className="home-background">
      <div className="buttons-containers">
        <Link to="/question">
          <button className="button-start">시작하기</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
