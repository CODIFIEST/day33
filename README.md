# Day33:
More solidity + contract interactions from websites!

## Homework:
- change your token to be a valid ERC20 token
- add it to metamask
- start a new svelte frontend with npm init vite, and create a page that displays:
1. connect wallet button
2. after connecting wallet, 
display the Name, 
display the Symbol,
display  TotalSupply (formatted from wei into ETH amounts using ethers utils),

 and a "transfer" input and button that allows you to transfer whatever amount is put into the input. (remember to convert the "1" in the input box to wei with ethers utils, as the contracts deal with WEI, not ETH. if someone types in "1" to transfer 1 full token, what the contract needs to see is 1 ** 18 (1 with 18 zeros)!)