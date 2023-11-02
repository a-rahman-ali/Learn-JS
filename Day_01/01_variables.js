const accountId = 2112023; //cannot be changed
// accountId = 3112023; //not allowed
console.log(accountId)

let accountEmail = "abdul.rahman@xyz.com";
console.log(accountEmail);
accountEmail = "ar@ar.com"; //modification of variables allowed
console.log(accountEmail);

/*
    var is datatype causes the problem in scoping as it provides the global scoping
    Prefer not to use var, becoz of block scope and functional scope.
*/

var accountPwd = "12345";
accountPwd = "54321";

accountCity = "Bangalore";
accountCity = "Bengaluru";
/* 
    Variable without any datatype is highly discouraged to use, 
    but there may arise some situations where we've no way other than using this type-less variables
*/

let accountState;
/*
    If we've any varibles just declared but not assigned any value, then
    they are initialized as "undefined"
 */

console.table([accountId, accountEmail, accountPwd, accountCity, accountState])