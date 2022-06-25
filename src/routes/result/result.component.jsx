import Mbtis from "../../common/api/mbtisApi.json";
import { useParams } from "react-router-dom";

const Result = ({ match }) => {
  const { mbtiName } = useParams();
  console.log(mbtiName);
  console.log(Mbtis);
  const mbti = Mbtis[mbtiName];
  console.log(mbti);
  return (
    <div>
      <h1>This is a result page.</h1>
    </div>
  );
};

export default Result;
