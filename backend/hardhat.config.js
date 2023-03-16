require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");
require("dotenv").config();

const PRIVATE_KEY = process.env.PRIVATE_KEY;
const ETHERSCAN_API_KEY = process.env.ETHERSCAN_API_KEY;
// const MUMBAI_RPC_URL = process.env.MUMBAI_RPC_URL;
const SEPOLIA_RPC_URL =
  process.env.SEPOLIA_RPC_URL ||
  "https://ethereum-sepolia.blockpi.network/v1/rpc/public" ||
  "https://rpc.sepolia.org/" ||
  "https://sepolia.infura.io/v3/";

module.exports = {
  solidity: "0.8.9",
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 31337,
    },
    sepolia: {
      url: "https://rpc.sepolia.org/",
      accounts: [PRIVATE_KEY],
    },
    // mumbai: {
    //   url: MUMBAI_RPC_URL,
    //   accounts: process.env.PRIVATE_KEY,
    // },
  },
  etherscan: {
    apiKey: ETHERSCAN_API_KEY,
  },
};
