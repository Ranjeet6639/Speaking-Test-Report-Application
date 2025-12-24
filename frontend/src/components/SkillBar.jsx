const SkillBar = ({ label, value }) => {
  const width = (value / 9) * 100;
  return (
    <div className="skill">
      <span>{label} ({value}/9)</span>
      <div className="bar">
        <div className="fill" style={{ width: `${width}%` }} />
      </div>
    </div>
  );
};
export default SkillBar;
