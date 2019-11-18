exports.parseAccountNumber = function (accountNumber) {
    var accountArray = accountNumber.split("");

    var i;
    for (i = 0; i < accountArray.length; i++)
    {
        accountArray[i] = charSwitch(accountArray[i]);
    };

    return accountArray;

};

exports.charReplace = function charReplace(accountArray) {

};

function charSwitch(accountChar) {
    var result;
    accountChar = accountChar.toLowerCase();
    switch (accountChar)
    {
        case "0":
        case "1":
        case "2":
        case "3":
        case "4":
        case "5":
        case "6":
        case "7":
        case "8":
        case "9":
            result = accountChar;
            break;
        case "a":
            result = "10"
            break;
        case "b":
            result = "11"
            break;
        case "c":
            result = "12"
            break;
        case "d":
            result = "13"
            break;
        case "e":
            result = "14"
            break;
        case "f":
            result = "15"
            break;
        case "g":
            result = "16"
            break;
        case "h":
            result = "17"
            break;
        case "i":
            result = "18"
            break;
        case "j":
            result = "19"
            break;
        case "k":
            result = "20"
            break;
        case "l":
            result = "21"
            break;
        case "m":
            result = "22"
            break;
        case "n":
            result = "23"
            break;
        case "o":
            result = "24"
            break;
        case "p":
            result = "25"
            break;
        case "q":
            result = "26"
            break;
        case "r":
            result = "27"
            break;
        case "s":
            result = "28"
            break;
        case "t":
            result = "29"
            break;
        case "u":
            result = "30"
            break;
        case "v":
            result = "31"
            break;
        case "w":
            result = "32"
            break;
        case "x":
            result = "33"
            break;
        case "y":
            result = "34"
            break;
        case "z":
            result = "35"
            break;
        default:
            result = "36"
            
         
    };
    return result;
}