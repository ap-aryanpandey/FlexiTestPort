
// const ipfs = IpfsHttpClient({host:'ipfs.infura.io', port:5001, protocol:'https'})

// var a = "Hello This is a test";

// const data = JSON.stringify({
//     link0: "1001",
//     //link1: "470023",
//     link1: "10035",
//     link2: "https://meet.google.com/taq-qcyy-kig",
//     link3:"100043"
//   })

//   const ipfsHash = ipfs.add(data)

 

const node = await IPFS.create()

const data = 'Hello, <YOUR NAME HERE>'

// add your data to to IPFS - this can be a string, a Buffer,
// a stream of Buffers, etc
const results = node.add(data)

// we loop over the results because 'add' supports multiple 
// additions, but we only added one entry here so we only see
// one log line in the output
for await (const { cid } of results) {
  // CID (Content IDentifier) uniquely addresses the data
  // and can be used to get it again.
  console.log(cid.toString())
}