require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner drink fortune strategy guard render remain smile hidden prize bone gather'; 
let testAccounts = [
"0xbb9c0a8c10ca12d53118b3c46fb42eae74de366da42f62692b388dfd0ad5bc04",
"0xe33847b2d1c43002c6932647e31c679fc03046291edd3bee83c5e41d301769d4",
"0x2d7a15d92b9760328d90cf74d2010757017d26fc1d7ecfd0055d3601fd58bd90",
"0xdcfdc413a4a937be47a2e5b3cfb6e164469602add646ad8137745148f8a3f22c",
"0xb6259dac79569ccfdfe13586cfa4d7beb366d4d41fcfda856302d38f3ae0fb09",
"0xf5177553d6a6cd7e09916bc670a5ed89314dd2d54ccbd7ef7f7a57765d5dfaa4",
"0xbc905b0fdf567f9ef9228ed5089ba4d0fc03bd329efb310ca03774580d60475e",
"0xd96c6606c592e76d67bff6e4de1601800afc35d1a958bdc0e29508a339d95c5e",
"0xbc60813cee4700c7cf8b04c7f1295782d3ffe98999589ffc6d9eb896f9ab7cc6",
"0x852e1beb5660251d60ecfc100c87f36b6f3ca102f2a3a0c63650bb802ac17775"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

