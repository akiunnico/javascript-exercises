const findTheOldest = function(array) {
  array.forEach(element => {
    if(element.yearOfDeath === undefined){element.yearOfDeath = new Date().getFullYear()}
  });
  const sorted = array.sort((a, b)=> {
    const lastGuy = a.yearOfDeath - a.yearOfBirth;
    const nextGuy = b.yearOfDeath - b.yearOfBirth;

    return lastGuy > nextGuy ? -1 : 1;
  })
  return sorted[0];
};

const people = [
  {
    name: "Carly",
    yearOfBirth: 1066,
  },
  {
    name: "Ray",
    yearOfBirth: 1962,
    yearOfDeath: 2011,
  },
  {
    name: "Jane",
    yearOfBirth: 1912,
    yearOfDeath: 1941,
  },
  ]
  console.log(findTheOldest(people));
// Do not edit below this line
module.exports = findTheOldest;
