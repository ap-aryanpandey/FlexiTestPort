import Web3 from 'web3'



const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host:'ipfs.infura.io', port:5001, protocol:'https'})
const all = require('it-all')



async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.enable()
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }


async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

async loadBlockchainData() {
    const web3 = window.web3
    
    const accounts = await web3.eth.getAccounts()
    this.setState({ account: accounts[0] })
    const networkId = await web3.eth.net.getId()
    const networkData = Meme.networks[networkId]
    if(networkData) {
      const contract = web3.eth.Contract(Meme.abi, networkData.address)
      this.setState({ contract })
      const memeHash = await contract.methods.get().call()
      this.setState({ memeHash })
    } else {
      window.alert('Smart contract not deployed to detected network.')
    }
  }



 

//edit this function as per inputs from the webpage
async function test() {
  const data = JSON.stringify({
    name: "Devansh",
    //link0: "",
    //link1: "",
    //link2: ""
  })

  const ipfsHash = await ipfs.add(data)
  const instance = await ipfstest.deployed()

  await instance.setHash.sendTransaction(ipfsHash)

  let returnedHash = await instance.ipfsHash.call()

  console.log(ipfsHash)
  console.log(returnedHash)

  console.log(JSON.parse(await ipfs.cat(returnedHash)))

}

test()
