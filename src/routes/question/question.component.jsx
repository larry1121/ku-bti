import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./question.styles.scss";
import Questions from "../../common/api/questionsApi.json";
import TextTransition, { presets } from "react-text-transition";

const Question = () => {
  const navigate = useNavigate();
  const [questionNumber, setQuestionNumber] = useState(1);
  const [cntE, setCntE] = useState(0);
  const [cntI, setCntI] = useState(0);
  const [cntS, setCntS] = useState(0);
  const [cntN, setCntN] = useState(0);
  const [cntT, setCntT] = useState(0);
  const [cntF, setCntF] = useState(0);
  const [cntJ, setCntJ] = useState(0);
  const [cntP, setCntP] = useState(0);

  console.log(
    `E${cntE} I${cntI} S${cntS} N${cntN} T${cntT} F${cntF} J${cntJ} P${cntP}`
  );
  const handleTypes = (selectedType) => {
    switch (Questions[questionNumber]["option"]) {
      case "EI":
        if (selectedType === "E") setCntE(cntE + 1);
        else if (selectedType === "I") setCntI(cntI + 1);
        break;
      case "SN":
        if (selectedType === "S") setCntS(cntS + 1);
        else if (selectedType === "N") setCntN(cntN + 1);
        break;
      case "TF":
        if (selectedType === "T") setCntT(cntT + 1);
        else if (selectedType === "F") setCntF(cntF + 1);
        break;
      case "JP":
        if (selectedType === "J") setCntJ(cntJ + 1);
        else if (selectedType === "P") setCntP(cntP + 1);
        break;
      default:
        console.log(Questions[questionNumber]["option"]);
        console.log("ERROR");
    }
  };
  const toNext = () => {
    if (questionNumber < 12) setQuestionNumber(questionNumber + 1);
    else {
      const eOri = cntE > cntI ? "E" : "I";
      const sOrn = cntS > cntN ? "S" : "N";
      const tOrf = cntT > cntF ? "T" : "F";
      const jOrp = cntJ > cntP ? "J" : "P";
      navigate(`/result/${eOri}${sOrn}${tOrf}${jOrp}`);
    }
  };
  const handleOnClick0 = () => {
    console.log(questionNumber);
    const selectedType = Questions[questionNumber]["answers"][0]["type"];
    console.log(selectedType);
    handleTypes(selectedType);
    toNext();
  };
  const handleOnClick1 = () => {
    console.log(questionNumber);
    const selectedType = Questions[questionNumber]["answers"][1]["type"];
    console.log(selectedType);
    handleTypes(selectedType);
    toNext();
  };

  console.log(Questions[0]);
  return (
    <div className="question-background">
      <div className="question-box">
        <div className="question-container">
          <div className="title-container">
            <h1 className="question-title">
              <TextTransition
                className="question-title-transition"
                springConfig={presets.default}
              >
                {questionNumber}
              </TextTransition>
            </h1>
            <h1 className="question-title">/20</h1>
          </div>
          <p className="question-paragraph">
            {Questions[questionNumber]["question"]}
          </p>
          <div className="question-buttons-container">
            <div className="answers-container">
              <button className="button-answer" onClick={handleOnClick0}>
                {Questions[questionNumber]["answers"][0]["content"]}
              </button>
              <button className="button-answer" onClick={handleOnClick1}>
                {Questions[questionNumber]["answers"][1]["content"]}
              </button>
            </div>
            <Link to="/">
              <button className="button-to-home">처음으로</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
