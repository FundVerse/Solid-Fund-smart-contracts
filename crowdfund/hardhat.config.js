require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 10_000_000,
      },
    },
  },
  allowUnlimitedContractSize: true,
  etherscan: {
    apiKey: "KAK5FEHAC2TBTQS3XQ4NDBU3YANK6XETZN",
  },
  networks: {
    docker: {
      chainId: 31337,
      url: "http://blockchain:8545",
    },
    fantom: {
      chainId: 4002,
      url: "https://rpc.ankr.com/fantom_testnet",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
