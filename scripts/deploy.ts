import { ethers } from "hardhat";

async function main() {
  const EmuNFT = await ethers.getContractFactory("EmuNFT");
  const emu = await EmuNFT.deploy();

  await emu.deployed();

  console.log("EmuNFT deployed to:", emu.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
