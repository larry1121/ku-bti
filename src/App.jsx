import { Routes, Route } from "react-router-dom";
import Home from "./routes/home/home.component";
import Question from "./routes/question/question.component";
import Result from "./routes/result/result.component";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/question" element={<Question />} />
      <Route>
        <Route path="/result/:mbtiName" element={<Result />} />
      </Route>
    </Routes>
  );
};

export default App;
