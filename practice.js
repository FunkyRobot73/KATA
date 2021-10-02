let jimmy = "iam the greatest personever";
message = jimmy.replace(/ /g, "")
let count = (Math.ceil(Math.sqrt(message.length)))

stringer = message.replace(message[count], message[count] + " ")
console.log(stringer);