import { task } from "hardhat/config";
// eslint-disable-next-line node/no-unpublished-import
import "@nomiclabs/hardhat-waffle";

//  npx hardhat approve --to 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266 --id 0 --network localhost
task("approve", "Transfer nft")
  .addParam("to", "To address")
  .addParam("id", "Token ID")
  .setAction(async (taskArgs, hre) => {
    const EmuNFT = await hre.ethers.getContractFactory("EmuNFT");

    const [acc2] = await hre.ethers.getSigners();

    const nftContract = new hre.ethers.Contract(
      process.env.NFT_CONTRACT_ADDRESS || "",
      EmuNFT.interface,
      acc2
    );

    const val = await nftContract.approve(taskArgs.to, taskArgs.id);
    console.log(val);
  });
