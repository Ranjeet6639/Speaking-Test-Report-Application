export const calculateOverallScore = (skills) => {
  const values = Object.values(skills);
  const avg = values.reduce((a, b) => a + b, 0) / values.length;
  return Math.round(avg);
};

export const getFeedback = (score) => {
  if (score >= 8) return "Excellent performance with strong control.";
  if (score >= 6) return "Good performance with minor inaccuracies.";
  return "Needs improvement.";
};
