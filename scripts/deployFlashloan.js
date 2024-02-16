const hre = require("hardhat");

async function main() {
  const FlashLoan = await hre.ethers.getContractFactory("FlashLoan");

  // https://docs.aave.com/developers/deployed-contracts/v3-testnet-addresses
  // PoolAddressesProvider-Aave        │ '0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A'
  const flashLoan = await FlashLoan.deploy(
    "0x012bAC54348C0E635dCAc9D5FB99f06F24136C9A"
  );

  // await flashLoan.deployed();
  console.log("Flash Loan contract deployed: ", flashLoan.target);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
