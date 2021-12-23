// contracts/GLDToken.sol
// SPDX-License-Identifier: MIT
pragma solidity >0.6.0;

import "./token/ERC20/ERC20.sol";

contract TestGamerseToken is ERC20 {
    uint8 _diceThreshold = 5; // If the dice over this then rewards the address
    uint _rewards = 1e19; // The rewards every time, the decimal is 1e8
    address private _owner;

    constructor(uint256 initialSupply) ERC20("TestGamerse", "TG") {
        _mint(msg.sender, initialSupply);
        _owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == _owner);
        _;
    }

    event RewardAccount(uint8 result, address account);

    // Rolling 2 dices, if it is over 5, then mint 10 tokens to the account
    function rollTheDice(uint8 result, address account) public onlyOwner {
        require(result >= 2 && result <= 12, "The roll dice result is invalid");
        if (result > _diceThreshold) {
            _mint(account, _rewards);
            emit RewardAccount(result, account);
        }
    }
}
