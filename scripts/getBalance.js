const hre = require("hardhat");
const tokenContractJSON = require("../artifacts/contracts/animal.sol/animal.json");

const tokenAddress = "0x5CaA991D6490919d94345D2BE49514BaEC2eC213"; 
const tokenABI = tokenContractJSON.abi;
const walletAddress = "0xAEa6e4106B3CE3c5b8E0E155524213Aba8418eED";

async function main() {
  try {
    const token = await hre.ethers.getContractAt(tokenABI, tokenAddress);
    const balance = await token.balanceOf(walletAddress);
    console.log(`You now have: ${balance} NFTs in your wallet`);
  } catch (error) {
    console.error(error);
    process.exitCode = 1;
  }
}

main();