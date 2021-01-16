for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdrew ${Math.abs(movement)}`);
  }
} 

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

movements.forEach((movement, index) => {
  if (movement > 0) {
    console.log(`Movement ${index + 1}: You deposited ${movement}`);
  } else {
    console.log(`Movement ${index + 1}: You withdrew ${Math.abs(movement)}`);
  }
});

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const currenciesUnique = new Set([`USD`, `GBP`, `EUR`]);
console.log(currenciesUnique);
currenciesUnique.forEach(function (value, key, map) {
  console.log(`${key}: ${value}`);
});

const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];
const juliaDogsModified = juliaDogs.slice(1, 3);
const dogsAges = kateDogs.concat(juliaDogsModified);
function displayDogsAge() {
  dogsAges.forEach((age, index) => {
    const dogAge =
      age >= 3 ? `an adult, and is ${age} years old 🐕‍🦺` : `still a puppy 🐩`;
    console.log(`Dog number ${index + 1} is ${dogAge}`);
  });
}
displayDogsAge();
/////////////////////////////////////////////////

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const eurToUsd = 1.1;
const movementsUsd = movements.map(movement =>
  (Math.round(movement * eurToUsd * 100) / 100).toFixed(0)
);
console.log(movements);
console.log(movementsUsd);



const deposits = movements.filter(movement => movement > 0);
console.log(deposits);
const withdrawals = movements.filter(movement => movement < 0);
console.log(withdrawals);

const balance = movements.reduce(
  (accumulator, current) => accumulator + current
);
console.log(balance);



const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  const adults = humanAges.filter(age => age >= 18);
  const average =
    adults.reduce((accumulator, age) => accumulator + age, 0) / adults.length;
  return average;
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));



// PIPELINE
const totalDepositsUsd = movements
  .filter(movement => movement > 0)
  .map(movement => movement * 1.1)
  .reduce((accumulator, movement) => accumulator + movement, 0);
console.log(totalDepositsUsd);



const calcAverageHumanAge = function (ages) {
  const averageAges = ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);
  return averageAges;
};
calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);
console.log(calcAverageHumanAge([5, 2, 4, 1, 15, 8, 3]));



const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
const movementsFind = movements.find(mov => mov < 0);
console.log(movementsFind);
console.log(accounts);

const account = accounts.find(acc => acc.owner === `Jessica Davis`);
console.log(account);
