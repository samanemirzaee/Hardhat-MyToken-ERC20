require("@nomicfoundation/hardhat-toolbox");
require("@nomiclabs/hardhat-etherscan");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks:{
    ropsten :{
      url:"https://ropsten.infura.io/v3/9aa3d95b3bc440fa88ea12eaa4456161",
      accounts :["9d95fde736aa583431113aa4ac9c00ace30bb44f54561fd57f102ee1656043f2"]
    }
  },
  etherscan: {
    apiKey: "P4GXN3VBRTAT1RD9X5KRC3QTYF9V3G45DI"
  }
};
