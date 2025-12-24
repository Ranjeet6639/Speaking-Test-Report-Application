import { useEffect, useState } from "react";
import OverallScore from "./components/OverallScore";
import SkillBar from "./components/SkillBar";
import Feedback from "./components/Feedback";
import { calculateOverallScore, getFeedback } from "./utils/scoreUtils";

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then(res => res.json())
      .then(data => setReport(data));
  }, []);

  if (!report) return <p>Loading...</p>;

  const overall = calculateOverallScore(report.skills);
  const feedback = getFeedback(overall);

  return (
    <div className="container">
      <h1>Speaking Test Report</h1>
      <p>{report.name} | {report.date}</p>
      <OverallScore score={overall} />
      {Object.entries(report.skills).map(([key, value]) => (
        <SkillBar key={key} label={key} value={value} />
      ))}
      <Feedback text={feedback} />
    </div>
  );
}

export default App;
