contract retrieve {
    uint value;

    function assignValue(uint initValue) {
        value = initValue;
    }

    function getValue() constant returns (uint) {

       return value;

    }
}
