const morning = (name) => {
  return `Good morning ${name.toUpperCase()}`;
};

const afternoon = (name) => {
  return `Good afternoon ${name.toUpperCase()}`;
};

const evening = (name) => {
  return `Good evening ${name.toUpperCase()}`;
};

const greet = (name, callBack) => {
  let myName = "Nicolas";
  console.log(`${callBack(name)}, my name is ${myName}`);
};

greet(`Bobo`, morning);
greet(`Peter`, afternoon);
greet(`Susy`, evening);
