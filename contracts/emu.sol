// //SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC721/extensions/ERC721URIStorage.sol";

contract EmuNFT is ERC721URIStorage {
  uint256 public tokenCounter;
  event CreatedEmuNFT(uint256 indexed tokenId, string tokenURI);

  constructor() ERC721("Emu birds", "emuNFT") {
    tokenCounter = 0;
  }

  function createNft(string memory dataCID) public {
    _safeMint(msg.sender, tokenCounter);
    string memory tokenURI = _tokenURI(dataCID);
    _setTokenURI(tokenCounter, tokenURI);
    tokenCounter += 1;
    emit CreatedEmuNFT(tokenCounter, tokenURI);
  }

  function _tokenURI(string memory dataCID)
    internal
    pure
    returns (string memory)
  {
    return string(abi.encodePacked(dataCID));
  }
}
