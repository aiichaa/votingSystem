var Election = artifacts.require("./VoteToken.sol");

module.exports = function(deployer) {
  deployer.deploy(Election);
};
