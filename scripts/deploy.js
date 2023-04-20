const { ethers } = require("hardhat");

async function main() {
  const Escrow = await ethers.getContractFactory("Escrow");
  const escrow = await Escrow.deploy(
    "0x3a6DB8A806b931277c5686cF741bCD5b6C2B05f6",
    "0x48A06ae2b8952e3981b5424Ab14D73d3E2bf9C25"
  );
  await escrow.deployed();
  console.log("Contract deployed at address:", escrow.address);
}

main();
