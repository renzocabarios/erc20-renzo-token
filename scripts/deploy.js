const hre = require("hardhat");

async function main() {
  const RenzoToken = await hre.ethers.getContractFactory("RenzoToken");
  const renzoToken = await RenzoToken.deploy(100000000, 50);
  await renzoToken.deployed();

  console.error("Renzo Token deployed to:", renzoToken.address);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
