// Switch-Case 

// switch (key) {
//     case value:
        
//         break;

//     default:
//         break;
// }

// const month = "march"
const month = "may";

switch (month) {
    case "jan":
        console.log("January");
        break;
    case "feb":
        console.log("feb");
        break;
    case "march":
        console.log("march");
        break;
    case "april":
        console.log("april");
        break;

    default:
        console.log("default case match");
        break;
}

// Whenever there is a match of any case, every thing below that case
// will be executed, until the break statement is encountered
// but the default block is not executed in such cases
// default block only gets executed if there doesn't exist any case-block with match in case
