import { useEffect, useState } from "react";
import "./App.css"; // ✅ IMPORTANT
import OverallScore from "./components/OverallScore";
import SkillBar from "./components/SkillBar";
import Feedback from "./components/Feedback";
import { calculateOverallScore, getFeedback } from "./utils/scoreUtils";

function App() {
  const [report, setReport] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/report")
      .then(res => res.json())
      .then(data => setReport(data))
      .catch(err => console.error(err));
  }, []);

  if (!report) return <p className="loading">Loading report...</p>;

  const overall = calculateOverallScore(report.skills);
  const feedback = getFeedback(overall);

  return (
    <div className="container">
      <h1>Speaking Test Report</h1>
      <p><strong>{report.name}</strong> | {report.date}</p>

      <OverallScore score={overall} />

      {Object.entries(report.skills).map(([key, value]) => (
        <SkillBar key={key} label={key} value={value} />
      ))}

      <Feedback text={feedback} />
    </div>
  );
}

export default App;
