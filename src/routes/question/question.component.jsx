import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./question.styles.scss";
import Questions from "../../common/api/questionsApi.json";
import TextTransition, { presets } from "react-text-transition";
import { useEffect } from "react";


const Question = ({ QdataService }) => {
  const TotalQuestioncnt = Object.keys(Questions).length;
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
  const [cntK, setCntK] = useState(0);
  const [cntY, setCntY] = useState(0);
  useEffect(()=>{
    toNext()
   }, [cntE,
    cntI,
    cntS,
    cntN,
    cntT,
    cntF,
    cntJ,
    cntP,
    cntK,
    cntY]) 
  console.log(
    `E${cntE} I${cntI} S${cntS} N${cntN} T${cntT} F${cntF} J${cntJ} P${cntP} K${cntK} Y${cntY}`
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
      case "KY":
        if (selectedType === "K") setCntK(cntK + 1);
        else if (selectedType === "Y") setCntY(cntY + 1);
        break;
      default:
        console.log(Questions[questionNumber]["option"]);
        console.log("ERROR");
    }
  };
  const toNext = () => {
    if ( questionNumber < TotalQuestioncnt) setQuestionNumber(questionNumber + 1);
    else {

      const eOri = cntE > cntI ? "E" : "I";
      const sOrn = cntS > cntN ? "S" : "N";
      const tOrf = cntT > cntF ? "T" : "F";
      const jOrp = cntJ > cntP ? "J" : "P";
      const kOry = cntK >= cntY ? "K" : "Y";
      navigate(`/result/${eOri}${sOrn}${tOrf}${jOrp}${kOry}`);
    }
  };
  const handleOnClick0 = () => {
    console.log(questionNumber);
    const selectedType = Questions[questionNumber]["answers"][0]["type"];
    console.log(selectedType);
    const Qdata = QdataService.incrementByIdAndType(questionNumber, selectedType);
    console.log(Qdata);
    
    handleTypes(selectedType);
    // toNext();
    // 동기처리문제로 수정
    //https://codingapple.com/unit/react-setstate-async-problems/
  };
  const handleOnClick1 = () => {
    console.log(questionNumber);
    const selectedType = Questions[questionNumber]["answers"][1]["type"];
    console.log(selectedType);
    const Qdata = QdataService.incrementByIdAndType(questionNumber, selectedType);
    console.log(Qdata);
    handleTypes(selectedType);
    // toNext();
  };

  console.log(Questions[0]);
  return (
    <div className="question-background">
      <div className="question-box">
        <div className="question-container">
          <div className="question-title-container">
            <h1 className="question-title">
              <TextTransition
                className="question-title-transition"
                springConfig={presets.default}
              >
                {questionNumber}
              </TextTransition>
            </h1>
            <h1 className="question-title">/{TotalQuestioncnt}</h1>
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
              <button className="result-button-to-home">처음으로</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question;
