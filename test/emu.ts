import { expect } from "chai";
import { ethers } from "hardhat";

describe("EmuNFT", function () {
  let emuNFT: any;
  let owner: any;
  const cid: string = "QmfQxy5K3jgdHnrzxbet94NLbqCq9YkXq44sCDwcJubdrZ/emu.json";

  before(async function name() {
    const nftContract = await ethers.getContractFactory("EmuNFT");
    [owner] = await ethers.getSigners();
    emuNFT = await nftContract.deploy();
  });

  it("Token counter is 0 after delpoy", async function () {
    expect(await emuNFT.tokenCounter()).to.equal(0);
  });

  it("Create NFT", async function () {
    await emuNFT.createNft(cid);
    expect(await emuNFT.balanceOf(owner.address)).to.equal(1);
  });
});
