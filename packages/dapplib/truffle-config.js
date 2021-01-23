require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid arch outer sugar warrior ridge remain proof hockey enter orient tell'; 
let testAccounts = [
"0x0be84402bb8078b9114c08f5a2eaf09d2bbae30acd88e2f747078341682a9c95",
"0x93cc89d8d02108335d3bcb7044bbacd19ec104344725376cd109ac7091640012",
"0xbc19049ba2206188fbfcb4221434a9ee3dbb4a3729cb2b5daf23e6e9848d347a",
"0xe4b561c71c3d57c087ac0a79b28b2da1b78a109a7c2fef0a977bbc7ccda04e32",
"0x481e0ede7cbff5024aa62bc606881b35e45aed73d005140a79ab0a4dc2cb4a23",
"0xfa259a8b112908fdaba8d0d04e9713839c1cfa63bcb7ac61c71503c8058a9af0",
"0x8ae78b0d6c0ce2cce7bffe96e0de0d35b31696be00a9d0ee2ff2b548e5cd4551",
"0x7203add9b218e6f30e75bce6e880e2d8942bf6f115d0183ae31a755b6daea808",
"0xdfc1e8cbbf5360b5279b23f4f59a1b0a4cc2ae02c1125c36bc55cba0ee7a347e",
"0xa00e796e7e9ff866f324307d1d82a544e2330dec82a3e5378b620e3f39f0a86e"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
