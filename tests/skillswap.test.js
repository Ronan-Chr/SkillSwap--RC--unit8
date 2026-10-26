const { filterSkillsByCategory } = require('../skillswap-functions');
const { calculateTotalCost } = require('../skillswap-functions');
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

describe('calculateTotalCost', () => {
    test('should calculate the total cost of hourly rates and hours in sessions', () => {
        const result = calculateTotalCost(20, 2);
        expect(result).toBe(40);
    });

    test('should return 0 when hourly rate is 0', () => {
        const result = calculateTotalCost(0, 5);
        expect(result).toBe(0);
    });

    test('should return 0 when number of sessions is 0', () => {
        const result = calculateTotalCost(15, 0);
        expect(result).toBe(0);
    });

    test('should return correct total cost for fractional hourly rates', () => {
        const result = calculateTotalCost(25, 1.5);
        expect(result).toBe(37.5);
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