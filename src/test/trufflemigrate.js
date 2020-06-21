const Migrations = artifacts.require("ipfstest");

module.exports = function(deployer) {
  deployer.deploy(ipfstest);
};
