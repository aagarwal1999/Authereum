const HDWalletProvider = require("truffle-hdwallet-provider")
let mnemonic = 'ocean organ blast dynamic guitar enemy better clock frame erosion clown leave'

module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    //rinkeby: {
      //host: "localhost", // Connect to geth on the specified
      //port: 8545,
      //from: "0x73DABA8C08CcfD9E986E32B9f6365b3601686b02", // default address to use for any transaction Truffle makes during migrations
      //network_id: 4,
      //gas: 4612388 // Gas limit used for deploys
    //}
  }
};