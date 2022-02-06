import { task } from "hardhat/config";
// eslint-disable-next-line node/no-unpublished-import
import "@nomiclabs/hardhat-waffle";

// npx hardhat balance --address 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --network localhost
// npx hardhat balance --address 0x70997970C51812dc3A010C7d01b50e0d17dc79C8 --network localhost

task("balance", "Balance address")
  .addParam("address", "Owner address") // "QmakbTLUU2csPfovQSaH5NAu5oEosiQyYCXhWB4XLvddtd/emu.json";
  .setAction(async (taskArgs, hre) => {
    const EmuNFT = await hre.ethers.getContractFactory("EmuNFT");

    const [acc1] = await hre.ethers.getSigners();

    const nftContract = new hre.ethers.Contract(
      process.env.NFT_CONTRACT_ADDRESS || "",
      EmuNFT.interface,
      acc1
    );

    const balance = await nftContract.balanceOf(taskArgs.address);
    console.log("Balance", balance);
  });
