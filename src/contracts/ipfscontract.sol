pragma solidity ^0.4.18;

contract MyContract {

  string public ipfsHash;

  function setHash(string memory _ipfsHash) public {
    ipfsHash = _ipfsHash;
  }

function getHash() public {
    return ipfsHash
  }


}
