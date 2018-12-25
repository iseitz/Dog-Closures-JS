function dogTalk() {
  let commonDogName = 'Rover';
  let unCommonDogName = 'Susan';

  let stateDogNameOpinion = (function() {
    return `I believe ${commonDogName} is an excellent dog name. The name ${unCommonDogName} is a bad dog name.`;
  });

  let stateDogNameFact = (function() {
    return `I have never met a dog called ${unCommonDogName} while several dogs are called ${commonDogName}.`;
  });

  let callDogs = (function() {
    return `Hey, come here ${commonDogName} and ${unCommonDogName}!`;
  });

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
