import { Link } from "react-router-dom";
import "./home.styles.scss";

const Home = () => {
  return (
    <div className="home-background">
      <div className="home-box">
        <div className="title-buttons-container">
          <h1 className="home-title">KU-bti</h1>
          <div className="home-buttons-container">
            <Link to="/question">
              <button className="button-start">시작하기</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
