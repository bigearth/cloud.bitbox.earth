import React, { Component } from 'react';

import './App.css';
let BITBOXCli = require('bitbox-cli/lib/bitboxcli').default;
let BITBOX = new BITBOXCli({
  protocol: 'http',
  host: '127.0.0.1',
  port: 8332,
  username: '',
  password: '',
  corsproxy: false
});

let langs = [
  'english',
  'chinese_simplified',
  'chinese_traditional',
  'korean',
  'japanese',
  'french',
  'italian',
  'spanish'
]

let lang = langs[Math.floor(Math.random()*langs.length)];

// create 256 bit BIP39 mnemonic
let mnemonic = BITBOX.Mnemonic.generate(256, BITBOX.Mnemonic.wordLists()[lang])

// mnemonic to BIP32 root seed encoded as hex
let rootSeed = BITBOX.Mnemonic.toSeed(mnemonic)

// root seed to BIP32 master HD Node
let masterHDNode = BITBOX.HDNode.fromSeed(rootSeed)

// derive BIP 44 external receive address
let childNode = BITBOX.HDNode.derivePath(masterHDNode, "m/44'/145'/0'/0/0")

// instance of transaction builder
let transactionBuilder = new BITBOX.TransactionBuilder('bitcoincash');

// keypair of BIP44 receive address
let keyPair = childNode.keyPair;

// txid of utxo
let txid = '5699610b1db28d77b1021ed457d5d9010900923143757bc8698083fa796b3307';

// subtract fee from original amount
let originalAmount = 3678031;

// add input txid, vin 1 and keypair
transactionBuilder.addInput(txid, 1);

// calculate fee @ 1 sat/B
let byteCount = BITBOX.BitcoinCash.getByteCount({ P2PKH: 1 }, { P2PKH: 1 });

let sendAmount = originalAmount - byteCount;

// add receive address and send amount
transactionBuilder.addOutput('bitcoincash:qpuax2tarq33f86wccwlx8ge7tad2wgvqgjqlwshpw', sendAmount);

// sign tx
let redeemScript;
transactionBuilder.sign(0, keyPair, redeemScript, transactionBuilder.hashTypes.SIGHASH_ALL, originalAmount);

// build it and raw hex
let tx = transactionBuilder.build();
let hex = tx.toHex();
BITBOX.RawTransactions.sendRawTransaction(hex).then((result) => { console.log("Broadcast Result: "+result); }, (err) => { console.log("Broadcast Error: "+err); });


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mnemonic: mnemonic,
      lang: lang,
      hex: hex,
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src="https://www.bitbox.earth/assets/logo.png" className="App-logo" alt="logo" />
          <h1 className="App-title">BITBOX Cloud</h1>
        </header>
      </div>
    );
  }
}

export default App;
