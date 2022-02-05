import { task } from "hardhat/config";
// eslint-disable-next-line node/no-unpublished-import
import "@nomiclabs/hardhat-waffle";

task("mint", "Mint emuNFT").setAction(async (taskArgs, hre) => {
  const EmuNFT = await hre.ethers.getContractFactory("EmuNFT");

  const [acc1] = await hre.ethers.getSigners();

  const nftContract = new hre.ethers.Contract(
    process.env.NFT_CONTRACT_ADDRESS || "",
    EmuNFT.interface,
    acc1
  );

  const CID: string =
    "QmakbTLUU2csPfovQSaH5NAu5oEosiQyYCXhWB4XLvddtd?filename=emu.json";

  await nftContract.createNft(CID);
});

// https://testnets-api.opensea.io/asset/0xeAf413841E5Cd6b6A03c6A425d7eEdb3f94eE4a1/1/validate/
// https://testnets-api.opensea.io/asset/0xeAf413841E5Cd6b6A03c6A425d7eEdb3f94eE4a1/0/validate/

// https://opensea.mypinata.cloud/ipfs/QmakbTLUU2csPfovQSaH5NAu5oEosiQyYCXhWB4XLvddtd
