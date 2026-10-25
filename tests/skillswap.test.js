const { filterSkillsByCategory } = require('../skillswap-functions');
const skills = [
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];

describe('filterSkillsByCategory', () => {
  test('should filter skills by category', () => {
    const result = filterSkillsByCategory(skills, 'Programming');
    expect(result.length).toBe(2);
    expect(result[0].title).toBe('Python Tutoring');
    expect(result[1].title).toBe('Web Development');
  });

    test('should return all skills when category is "All" category', () => {
    const result = filterSkillsByCategory(skills, 'All');
    expect(result.length).toBe(4);
  });

    test('should return an empty array when no categories match', () => {
    const result = filterSkillsByCategory(skills, 'Cooking');
    expect(result.length).toBe(0);
  });
});
/*
filterSkillsByCategory(skills, 'All'); 

[
  { title: 'Python Tutoring', category: 'Programming', price: 20 },
  { title: 'Guitar Lessons', category: 'Music', price: 15 },
  { title: 'Resume Review', category: 'Career', price: 0 },
  { title: 'Web Development', category: 'Programming', price: 25 }
];


filterSkillsByCategory(skills, 'Cooking'); // []
*/