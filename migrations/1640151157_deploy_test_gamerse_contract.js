const TestGamerseToken = artifacts.require("TestGamerseToken");

module.exports = function (deployer) {
  deployer.deploy(TestGamerseToken, 0);
};
