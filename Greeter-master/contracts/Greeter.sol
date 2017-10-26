pragma solidity ^0.4.11;
contract Greeter {

    string value; //global variable that our greeter will say when poked
    /*
     * Constructor function
     */
    /// @dev Contract constructor that sets the global `greeting` variable
    /// @param _value A String value to set to the global `greeting`
    function assignValue(string _value) public {
        value = _value;
        
    }

    /*
     * Greet function
     */
    /// @dev returns the String value stored in the global `greeting` variable
    function getValue() constant returns (string) {
        return value;
    




    }
}