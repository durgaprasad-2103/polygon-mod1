const { ethers } = require("hardhat");
require("dotenv").config();

async function main() {
  const privateKey = process.env.PRIVATE_KEY;

  const networkAddress =
    "https://eth-sepolia.g.alchemy.com/v2/xISVy20DszdNw5uakCDIhIsegXfROLT1";

  const provider = new ethers.providers.JsonRpcProvider(networkAddress);

  const signer = new ethers.Wallet(privateKey, provider);

  const contractAddress = "0x3B67584494359198A036aBC7778480775e56c5A7";

  const animalNFT = await ethers.getContractFactory("animal", signer);
  const contract = await animalNFT.attach(contractAddress);

  await contract.mint(5);

  console.log("Minted 5 tokens");
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });