const Migrations = artifacts.require("PineCore");

module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
