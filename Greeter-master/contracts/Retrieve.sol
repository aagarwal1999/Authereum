pragma solidity ^0.4.11;
contract Retrieve{
    uint256 value;

    function assignValue(uint256 initValue) {
        value = initValue;
    }

    function getValue() constant returns (uint256) {

        return value;

    }
}