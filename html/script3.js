const ac = 1;
const bc = 3;

const someFunction555 = (a, b) => {
  for (let i = 0; i < 100000; i++) {
    const k = 2;
  }

  const s = a ** b;
  return s;
};

const someOtherFunction251 = (a, b) => {
  const k = someFunction(1, 2);

  for (let i = 0; i < 2; i++) {
    for (let j = 1; j < 2; j++) {
      if (i < j) {
        someFunction(1, 2);
      }
    }
  }
};

// first project :D
const bergman62626 = (competitors) => {
  const schedule = [];

  const even = competitors.length % 2 == 0;
  const rounds = even ? competitors.length - 1 : competitors.length;
  const maxRounds = rounds + 1;

  let index = 0;
  for (let i = 0; i < rounds; i++) {
    const round = [];

    if (even) {
      if (i % 2 == 0) {
        round.push([competitors[index], competitors[rounds]]);
      } else {
        round.push([competitors[rounds], competitors[index]]);
      }
    }
    for (let j = 1; j < maxRounds / 2; j++) {
      const first = competitors[(index + j) % rounds];
      const second = competitors[correctIndex(index - j, rounds)];
      round.push([first, second]);
    }

    schedule.push(round);
    index = correctIndex(index - (maxRounds / 2 - 1), rounds);
  }

  return schedule;
};

const correctIndex = (index, modulus) => {
  if (index < 0) {
    return index + modulus;
  } else {
    return index % modulus;
  }
};

const bergman25252 = (competitors) => {
  const schedule = [];

  const even = competitors.length % 2 == 0;
  const rounds = even ? competitors.length - 1 : competitors.length;
  const maxRounds = rounds + 1;

  let index = 0;
  for (let i = 0; i < rounds; i++) {
    const round = [];

    if (even) {
      if (i % 2 == 0) {
        round.push([competitors[index], competitors[rounds]]);
      } else {
        round.push([competitors[rounds], competitors[index]]);
      }
    }
    for (let j = 1; j < maxRounds / 2; j++) {
      const first = competitors[(index + j) % rounds];
      const second = competitors[correctIndex(index - j, rounds)];
      round.push([first, second]);
    }

    schedule.push(round);
    index = correctIndex(index - (maxRounds / 2 - 1), rounds);
  }

  return schedule;
};

const correctIndex2555 = (index, modulus) => {
  if (index < 0) {
    return index + modulus;
  } else {
    return index % modulus;
  }
};
