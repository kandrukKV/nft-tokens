import { expect } from "chai";
import { ethers } from "hardhat";

describe("EmuNFT", function () {
  let emuNFT: any;
  let owner: any;
  let user: any;
  const tokenId = 0;
  const cid: string = "QmfQxy5K3jgdHnrzxbet94NLbqCq9YkXq44sCDwcJubdrZ/emu.json";

  before(async function name() {
    const nftContract = await ethers.getContractFactory("EmuNFT");
    [owner, user] = await ethers.getSigners();
    emuNFT = await nftContract.deploy();
  });

  it("Token counter is 0 after delpoy", async function () {
    expect(await emuNFT.tokenCounter()).to.equal(0);
  });

  it("Create NFT", async function () {
    await emuNFT.connect(user).createNft(cid);
    expect(await emuNFT.balanceOf(user.address)).to.equal(1);
  });

  it("Approve transfer", async function () {
    await emuNFT.connect(user).approve(owner.address, tokenId);
    expect(await emuNFT.getApproved(tokenId)).to.equal(owner.address);
  });

  it("Transfer", async function () {
    await emuNFT
      .connect(user)
      .transferFrom(user.address, owner.address, tokenId);

    expect(await emuNFT.balanceOf(owner.address)).to.equal(1);
    expect(await emuNFT.balanceOf(user.address)).to.equal(0);
  });

  it("Transfer Withot approve", async function () {
    await expect(
      emuNFT.connect(user).transferFrom(owner.address, user.address, tokenId)
    ).to.be.revertedWith("ERC721: transfer caller is not owner nor approved");
  });
});
