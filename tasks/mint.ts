import { task } from "hardhat/config";
// eslint-disable-next-line node/no-unpublished-import
import "@nomiclabs/hardhat-waffle";

task("mint", "Mint emuNFT")
  .addParam("cid", "CID") // "QmakbTLUU2csPfovQSaH5NAu5oEosiQyYCXhWB4XLvddtd/emu.json";
  .setAction(async (taskArgs, hre) => {
    const EmuNFT = await hre.ethers.getContractFactory("EmuNFT");

    const [acc2] = await hre.ethers.getSigners();

    const nftContract = new hre.ethers.Contract(
      process.env.NFT_CONTRACT_ADDRESS || "",
      EmuNFT.interface,
      acc2
    );

    await nftContract.createNft(taskArgs.cid);
  });
