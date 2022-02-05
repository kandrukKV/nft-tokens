import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";
import "solidity-coverage";
import "./tasks/index.ts";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: process.env.ALCHEMY_URL || "",
      accounts:
        process.env.PRIVATE_ACC_KEY2 !== undefined
          ? [process.env.PRIVATE_ACC_KEY2]
          : [],
      gas: "auto",
      gasPrice: 30_000_000_000, // gwei
    },
    hardhat: {
      chainId: 31337,
    },
  },
};

export default config;
