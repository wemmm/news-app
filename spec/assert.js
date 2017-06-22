var assert = {

  isEq: function(firstAssertion, secondAssertion) {
    if (firstAssertion != secondAssertion){
      throw new Error("Expected " + firstAssertion + " to equal " + secondAssertion + ".");
    }
    else {
      console.log("Test passed, because they are equal!");
    }
  },

  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Asserion failed: " + assertionToCheck + " is not truthy");
    }
    else {
      console.log("Test passed, this is true!");
    }
  },

  isFalse: function(assertionToCheck) {
    if (!!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not falsy");
    }
    else {
      console.log("Test passed, this is false!");
    }
  },
};
