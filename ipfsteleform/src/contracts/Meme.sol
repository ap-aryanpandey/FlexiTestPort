pragma solidity ^0.5.0;

contract hash {
  string Hash;

  function set(string memory Hash) public {
    memeHash = _memeHash;
  }

  function get() public view returns (string memory) {
    return memeHash;
  }
}
