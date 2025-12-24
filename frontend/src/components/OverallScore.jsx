const OverallScore = ({ score }) => (
  <div className="overall-score">
    <h2>Overall Score</h2>
    <div className="circle">{score} / 9</div>
  </div>
);
export default OverallScore;
