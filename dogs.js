function dogTalk() {
  let commonDogName = 'Rover';
  let unCommonDogName = 'Susan';
  this.talk = 'Woof!'

  let stateDogNameOpinion = () => {
    return `I believe ${commonDogName} is an excellent dog name. The name ${unCommonDogName} is a bad dog name. They all say ${this.talk}`;
  };

  let stateDogNameFact = () => {
    return `I have never met a dog called ${unCommonDogName} while several dogs are called ${commonDogName}.`;
  };

  let callDogs = () => {
    return `Hey, come here ${commonDogName} and ${unCommonDogName}!`;
  };

  return {
    stateDogNameFact,
    stateDogNameOpinion,
    callDogs
  };

};

let dog = dogTalk();
dog.stateDogNameFact();
dog.stateDogNameOpinion();
dog.callDogs();
