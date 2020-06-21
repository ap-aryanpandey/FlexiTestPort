import React, { Component } from 'react';
import logo from '../logo.png';
import './App.css';

const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({host:'ipfs.infura.io ', port:5001, protocol:'https'})
const all = require('it-all')

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      memeHash: '',
      contract: null,
      web3: null,
      buffer: null,
      account: null
    }
  }

   captureFile = (event) => {
    event.preventDefault()
    console.log('file captured')
    const file=event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)
    reader.onloadend = () => {
      this.setState({buffer: Buffer(reader.result)})
      console.log('buffer', this.state.buffer)
    }
    
   }

    onSubmit = async (event) => {
    event.preventDefault()
    console.log("Submitting file to ipfs...")
  
  const data = JSON.stringify({
    name: "Devansh",
    link0: "",
    link1: "",
    link2: ""
  })
  const ipfsHash = ipfs.add(data)
  const arr = await all(ipfsHash)

  console.log(arr)
  const loc = arr[0].cid.multihash
  console.log(loc)
    
       
    
   
}
  render() {
    return (
      <div>
        <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
          <a
            className="navbar-brand col-sm-3 col-md-2 mr-0"
            href="http://www.dappuniversity.com/bootcamp"
            target="_blank"
            rel="noopener noreferrer"
          >
            FLexi Test IPFS file upload Portal
          </a>
        </nav>
        <div className="container-fluid mt-5"
>          <div className="row">
            <main role="main" className="col-lg-12 d-flex text-center">
              <div className="content mr-auto ml-auto">
                <a
                  href="http://www.dappuniversity.com/bootcamp"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={logo} className="App-logo" alt="logo" />
                </a>
                <p>&nbsp;</p>
                <h2>Upload File</h2>
                <form onSubmit ={this.onSubmit} >
                <input type='file' onChange={this.captureFile} />
                <input type='submit'/>
                </form>
                
             </div>     
            </main>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
