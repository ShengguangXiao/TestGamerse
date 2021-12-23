# Requirements.
1) create a erc 20 compliment contract that uses an oracle to connect to https://www.wolframalpha.com
2) use roll a dice function
3) if the result is more than 5
It will mint and issue 10 tokens to an address.
4) use truffle to connect to the contract and display the list of dice results and update the new balance of the address on screen.
5) display the transaction ID a d link to it on the test net

# The Answers

## Compile the contract
```
truffle compile
```

## Test the contract in local

Start the local nodes by 
```
ganache-cli
```

Run the test
```
truffle test
```

## Deploy the contract on BSC testnet

Before deploy, need to put the meta mask wallet seeds into `.secrets` file, so the truffle wallet can use it to interact with BSC testnet.

```
truffle migrate --network testnet
```

I already deployed at address `0xDd1CbbAC233D227A997988f71787126bC26FD9D7`.

This is the deploy trace.

```
1640151157_deploy_test_gamerse_contract.js
==========================================

   Deploying 'TestGamerseToken'
   ----------------------------
   > transaction hash:    0xd1fcc5923a8368e9f894a72fa4458d7250b55652a6b9e2581702dc900dce7c0c
   > Blocks: 3            Seconds: 9
   > contract address:    0xDd1CbbAC233D227A997988f71787126bC26FD9D7
   > block number:        15212231
   > block timestamp:     1640229773
   > account:             0x3ca3822163D049364E67bE19a0D3B2F03B7e99b5
   > balance:             0.924626394
   > gas used:            1529950 (0x17585e)
   > gas price:           18 gwei
   > value sent:          0 ETH
   > total cost:          0.0275391 ETH

   Pausing for 10 confirmations...
   -------------------------------
   > confirmation number: 2 (block: 15212234)
   > confirmation number: 3 (block: 15212235)
   > confirmation number: 5 (block: 15212237)
   > confirmation number: 6 (block: 15212238)
   > confirmation number: 7 (block: 15212239)
   > confirmation number: 9 (block: 15212241)
   > confirmation number: 10 (block: 15212242)

   > Saving migration to chain.
   > Saving artifacts
   -------------------------------------
   > Total cost:           0.0275391 ETH


Summary
=======
> Total deployments:   2
> Final cost:          0.032018472 ETH
```

## Test the contract on testnet and with oracle
First need to export your walfram API key(which is the appid) as the environment variable.

```
export API_KEY="xxxxxxxxxx"
```

and run scripts

```
truffle exec --network testnet scripts/test_gamerse_with_testnet.js
```

it will show the dice result and balances before and after roll the dice.