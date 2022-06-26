import Mbtis from "../../common/api/mbtisApi.json";
import { useParams, Link } from "react-router-dom";
import "./result.styles.scss";
import { useState } from "react";
import DeveloperPage from "../../components/developerPage/developerPage.component";
import copy from "copy-to-clipboard";

const Result = () => {
  const [clicked, setClicked] = useState(false);
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

  const handleCopyClipBoard = async (text) => {
    try {
      copy(text);

      alert("클립보드에 복사되었습니다.");
    } catch (error) {
      alert("복사 실패");
    }
  };
  console.log(mbti["description"].length);
  return (
    <>
      <div className="result-background">
        {/* <DeveloperPage setClicked={setClicked} /> */}
        <div className="result-box">
          <div className="result-container">
            <p className="result-top-text">당신의 유형은</p>
            <div className="result-title-container">
              <h1 className="result-title">{mbtiName}</h1>
            </div>
            <p className="result-subhead">{mbti["subhead"]}</p>
            {mbti["description"].length === 5 ? (
              <ul className="result-paragraph">
                <li>{mbti["description"][0]}</li>
                <li>{mbti["description"][1]}</li>
                <li>{mbti["description"][2]}</li>
                <li>{mbti["description"][3]}</li>
                <li>{mbti["description"][4]}</li>
              </ul>
            ) : (
              <ul className="result-paragraph">
                <li>{mbti["description"][0]}</li>
                <li>{mbti["description"][1]}</li>
                <li>{mbti["description"][2]}</li>
                <li>{mbti["description"][3]}</li>
              </ul>
            )}
            <div className="result-buttons-container">
              <Link to="/">
                <button className="result-button-to-home">처음으로</button>
              </Link>
              <button
                className="result-button-share"
                onClick={() => {
                  handleCopyClipBoard(window.location.href);
                }}
              >
                링크복사
              </button>
            </div>
            <div className="kuplace-button-container">
              <button
                className="button-kuplace"
                onClick={() => {
                  window.open("https://kuplace.kr");
                }}
              >
                Visit KUplace
              </button>
            </div>
            <span>
              <p
                className="result-button-developer"
                onClick={() => {
                  setClicked(true);
                }}
              >
                개발자에게 관심 주기
              </p>
            </span>
            <span>
              <p className="text-reference">
                MBTI Reference : https://www.mbti.co.kr/
              </p>
            </span>
          </div>
        </div>
      </div>
      {clicked ? <DeveloperPage setClicked={setClicked} /> : null}
    </>
  );
};

export default Result;
