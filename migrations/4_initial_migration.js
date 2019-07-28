var Election = artifacts.require("./RangeProofValidator.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};
