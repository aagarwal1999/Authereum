import Web3 from 'web3'; 
//const web3 = new Web3(new Web3.providers.HttpProvider("https://rinkeby.infura.io"));
const web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));


//var greeterABI = [{"constant":true,"inputs":[],"name":"greet","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"}
//,{"constant":false,"inputs":[{"name":"_greeting","type":"string"}],"name":"greeter","outputs":[],"payable":false,"type":
//"function"}]

//var greeterABI = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},
//{"constant":false,"inputs":[{"name":"initValue","type":"uint256"}],"name":"assignValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

//var greeterABI = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"uint256"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"uint256"}],"name":"assignValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]

var greeterABI = [{"constant":true,"inputs":[],"name":"getValue","outputs":[{"name":"","type":"string"}],"payable":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[{"name":"_value","type":"string"}],"name":"assignValue","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"}]
var greeterAddress = '0xee1219ec24b9f5a82c7d661a9fff105905c0b065';

const greeterContract = web3.eth.contract(greeterABI).at(greeterAddress);

export {greeterContract, web3};

