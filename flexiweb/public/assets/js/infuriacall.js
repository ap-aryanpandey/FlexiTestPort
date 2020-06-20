// import Web3 from './node_modules/web3/dist/web3.min.js';

const ipfsClient = require('ipfs-http-client');
const ipfs = ipfsClient({host:'ipfs.infura.io', port:5001, protocol:'https'});
const all = require('it-all');

async function componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
  }

  async function loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
  }

async function loadBlockchainData() {
    const web3 = window.web3;
    // Load account
    const accounts = await web3.eth.getAccounts();
    this.setState({ account: accounts[0] });
    const networkId = await web3.eth.net.getId();

  }

function runipfs(){
    console.log("Submitting file to ipfs...");
    
    const data = JSON.stringify({
        link0: "1001",
        link1: "470023",
        link2: "10035",
        link3: "https://zoom.us/j/99284229358?pwd=bG1vMzNXOWs4bnEwblpWUDFLNTRUQT09",
        link4:"100043"
    });
    const ipfsHash = ipfs.add(data);
    const arr =  all(ipfsHash);

    console.info(arr);
    const loc = arr[0].cid.string;
    console.log(loc);
}
    
