import Mbtis from "../../common/api/mbtisApi.json";
import { useParams } from "react-router-dom";

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
  return (
    <div>
      <h1>This is an {mbtiName} page.</h1>
    </div>
  );
};

export default Result;
