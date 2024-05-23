/** FEEDBACK: Great job getting all test cases to pass! */
const coolGreeting = (person) => {
  if (person.isCool === true) {
    return `What is UP ${person.name.toUpperCase()}? How you been doin'?`
  } else {
    return `Greetings ${person.name}, how have you been lately?`
  }
};

const haveBirthday = (person) => {
  person.age = person.age + 1
};

const becomeSecretAgent = (person, spyHandle) => {
  delete person.name
  person.spyHandle = spyHandle;

};

const carMaker = (name, maker, year) => {
/** FEEDBACK: You could have used short hand notation here! {name, maker, year, needsOilChange: false} */
  let car = { name: name, maker: maker, year: year, needsOilChange: false, }
  return car
};

const weAreNotFriends = (person) => {

  return person.friends.pop()

};

const listHobbies = (person) => {
/** FEEDBACK: Make sure to always include {} in all of your loops, it will help you build the habit and make your code more readable! */
  for (let i of person.hobbies)
    console.log(`${person.name} likes ${i}.`)
};

const getNextOpponent = (team) => {

  if (team.matches[0] === undefined) {
    return null
  }

  return team.matches[0].teamName;

};

const listAllKeys = (obj) => {

  return Object.keys(obj)

};

const listAllValues = (obj) => {

  return Object.values(obj)

};

const convertToMatrix = (arr) => {
  /** FEEDBACK: Same here! Make sure to always use {} to avoid any bugs! */
  if (arr[0] === undefined || arr[0] === null) return [];
    const totalArr = [];
  totalArr.push(Object.keys(arr[0]));
  for (let e in arr) {
    totalArr.push(Object.values(arr[e]))
  }
return totalArr
};

module.exports = {
  coolGreeting,
  haveBirthday,
  becomeSecretAgent,
  carMaker,
  weAreNotFriends,
  listHobbies,
  getNextOpponent,
  listAllKeys,
  listAllValues,
  convertToMatrix,
};

