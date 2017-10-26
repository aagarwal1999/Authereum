var Greeter = artifacts.require("./Greeter.sol");

contract('Greeter', function(accounts) {
  const args = {_value: "Cert"}; //TODO: don't hard code test values
  it("should use the greeter constructor to set a greeting", function() {
    return Greeter.deployed()
      .then(function(instance) {
        /* CALL the greet function */
        instance.assignValue("Hi");
        return instance.getValue.call();
      })
      .then(function(result) {
        assert.equal(args._value, result, "greeting should match constructor argument")
      })
  });
});
