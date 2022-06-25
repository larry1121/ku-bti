import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="buttons-containers">
      <Link to="/question">
        <button>시작하기</button>
      </Link>
    </div>
  );
};

export default Home;
