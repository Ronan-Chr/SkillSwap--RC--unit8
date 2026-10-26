const filterSkillsByCategory = (skills, category) => {
  if (category === 'All') {
    return skills;
  }
  return skills.filter(skill => skill.category === category);
};
const calculateTotalCost = (hourlyRate, hours) => {
  return hourlyRate * hours;
};
const matchSkillstoUser = (userNeeds, skills) => {
  return skills.filter(skill => {
    return skill.category === userNeeds.category && skill.price <= userNeeds.maxPrice;
  });
};

if (typeof module !== 'undefined') {
  module.exports = { filterSkillsByCategory, calculateTotalCost, matchSkillstoUser };
}