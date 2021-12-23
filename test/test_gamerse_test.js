const TestGamerseToken = artifacts.require("TestGamerseToken");
const truffleAssert = require('truffle-assertions');

contract('TestGamerseToken', (accounts) => {
   let instance;
   beforeEach('should setup the contract instance', async () => {
      instance = await TestGamerseToken.deployed();
   });

   it("Check the contract parameters", async () => {
      const name = await instance.name();
      assert.equal(name, 'TestGamerse');

      const deci = await instance.decimals();
      assert.equal(deci, 18);

      const totalSupply = await instance.totalSupply();
      assert.equal(totalSupply, 1001);
   });

   it("test rolling the dice", async () => {
      await truffleAssert.reverts(instance.rollTheDice(1, accounts[1]));
      await truffleAssert.reverts(instance.rollTheDice(13, accounts[1]));

      // Only the contract owner can call the action.
      await truffleAssert.reverts(instance.rollTheDice(5, accounts[1], {'from': accounts[1]}));

      // the dice less than 5, should not reward, so the balance is 0
      await instance.rollTheDice(5, accounts[1]);
      let balance = await instance.balanceOf(accounts[1]);
      assert.equal(balance, 0);

      // the dice less than 5, should not reward, so the balance is 0
      await instance.rollTheDice(6, accounts[1]);
      balance = await instance.balanceOf(accounts[1]);
      assert.equal(balance, 1e19);
   });
});
