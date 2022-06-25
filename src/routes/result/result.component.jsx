import Mbtis from "../../common/api/mbtisApi.json";
import { useParams, Link } from "react-router-dom";
import "./result.styles.scss";

const Result = () => {
  const { mbtiName } = useParams();
  console.log(mbtiName);
  console.log(Mbtis);
  const mbti = Mbtis[mbtiName];
  console.log(mbti);
  if (!mbti) {
    return (
      <div>
        <h1>This is an invalid page.</h1>
      </div>
    );
  }
  console.log(mbti["description"][0]);
  return (
    <div className="result-background">
      <div className="result-box">
        <div className="result-container">
          <div className="result-title-container">
            <h1 className="result-title">{mbtiName}</h1>
          </div>
          <p className="result-paragraph">{mbti["description"][0]["des"]}</p>
          <div className="result-buttons-container">
            <Link to="/">
              <button className="result-button-to-home">처음으로</button>
            </Link>
            <button className="result-button-share">공유하기</button>
          </div>
          <span>
            <p className="result-button-developer">개발자에게 먹이 주기</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Result;
