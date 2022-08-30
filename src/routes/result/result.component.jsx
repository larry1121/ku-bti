import Mbtis from "../../common/api/mbtisApi.json";
import { useParams, Link } from "react-router-dom";
import "./result.styles.scss";
import { useState } from "react";
import DeveloperPage from "../../components/developerPage/developerPage.component";
import copy from "copy-to-clipboard";
import { useEffect } from "react";


const Result = ({QdataService}) => {
  useEffect(()=>{
    QdataService.getMBTI().then(
      function parse(result) {
        console.log(result)
        
        setMBTIData(result);

        var Totalcnt=0;
        for(var i = 0; i < 16; i++){
          Totalcnt+=MBTIdata[0].MBTI[i].cnt;
        }
        setMBTITotal(Totalcnt);
        setLoading(false);
      })
    
   }, []) 
  const [clicked, setClicked] = useState(false);
  const [MBTIdata, setMBTIData] = useState();
  const [isDataLoading,setLoading] = useState(true);
  const [MBTITotal,setMBTITotal] = useState();
  const { mbtiInfo } = useParams();
  var isKorea =true;
  console.log(mbtiInfo);
  console.log(Mbtis);
  const mbtiName=mbtiInfo.substring(0,4);
  const KYName=mbtiInfo.substring(4,5);
  if(KYName==="Y"){
    isKorea=false
  };
  console.log(mbtiName);
  console.log(KYName);
  const mbti = Mbtis[mbtiName];
  console.log(mbti);
  if (!mbti) {
    return (
      <div>
        <h1>This is an invalid page.</h1>
      </div>
    );
  }

  const mbtiIndex=Mbtis[mbtiName]["index"];
  console.log("mbtiIndex : "+mbtiIndex);


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
            
            {isKorea ? <p className="result-top-text">당신의 유형은</p>:
            <p className="result-top-text-Y">당신의 유형은</p>
            }
            
            <div className="result-title-container">
            {isKorea ? <h1 className="result-title">{mbtiName}</h1>:
            <h1 className="result-title-Y">{mbtiName}</h1>
            }
      
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
              {isKorea ? <button className="result-button-to-home">처음으로</button>:
            <button className="result-button-to-home-Y">처음으로</button>
            }
                
              </Link>
              {isKorea ? <button
                className="result-button-share"
                onClick={() => {
                  handleCopyClipBoard(window.location.href);
                }}
              >
                링크복사
              </button>:
            <button
            className="result-button-share-Y"
            onClick={() => {
              handleCopyClipBoard(window.location.href);
            }}
          >
            링크복사
          </button>
            }
              
            </div>
            <div className="kuplace-button-container">
              <button
                className="button-kuplace"
                onClick={() => {
                  window.open("https://kuplace.page.link/promotion");
                }}
              >
                Visit KUplace
              </button>
            </div>
            {isDataLoading? null:            <p>{MBTITotal+"명중에"+MBTIdata[0].MBTI[mbtiIndex].cnt+"명과 같은 결과가 나왔습니다!"}</p>
}
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
        {isKorea ? <p></p>:
            <div className="bird-container">
              <img className="eagle-picture" alt="eagle" src={require("../../assets/pngwing.com.png")} />
            </div>
            }
      </div>
      {clicked ? <DeveloperPage setClicked={setClicked} /> : null}
    </>
  );
};

export default Result;
