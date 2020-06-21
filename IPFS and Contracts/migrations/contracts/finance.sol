

pragma solidity >=0.4.21 <0.7.0;

contract finance{

    struct Request{
        string description;
        uint value;
        address recipient;
        bool complete;
        uint approvalCount;
        
        address manager;
    }
    
     Request[] public requests;
     uint public minimumcontribution;
     address[] approvers;
     address public owner;

     
    
    function loan() public payable{
        require(msg.sender == owner);
        require(msg.value > minimumcontribution);
        approvers.push(msg.sender);
    }
    
    function createrequest (string memory description, uint value, address recipient) public{
        owner = msg.sender;
     Request memory newrequest = Request({
        description: description,
        value: value,
        recipient: recipient,
        complete: false,
        approvalCount : 0,
        manager:msg.sender
        
     });
     requests.push(newrequest);
    }
}