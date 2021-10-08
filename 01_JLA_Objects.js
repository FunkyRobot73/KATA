let heroes = [   batman = {codeName: "batman", alterEgo: "bruce wayne", species: "human", metapowers: false, powerLevel: 20},
                superman = {codeName: "superman", alterEgo: "clark kent", species: "kryptonian", metapowers: true, powerLevel: 99},
                wonderWoman = {codeName: "wonder woman", alterEgo: "diana prince", species: "amazon", metapowers: true, powerLevel: 90},
                greenLantern2 = {codeName: "green lantern", alterEgo: "hal jordan", species: "human", metapowers: true, powerLevel: 80},
                {codeName: "martian manhunter", alterEgo: "john jones", species: "martian", metapowers: true, powerLevel: 90},
                {codeName: "flash", alterEgo: "barry allen", species: "human", metapowers: true, powerLevel: 95},
                {codeName: "aquaman", alterEgo: "arthur curry", species: "atlantian", metapowers: true, powerLevel: 80},
                {codeName: "green arrow", alterEgo: "oliver queen", species: "human", metapowers: false, powerLevel: 18},
                {codeName: "atom", alterEgo: "ray palmer", species: "human", metapowers: true, powerLevel: 50},
                {codeName: "hawkman", alterEgo: "carter hall", species: "Thanagarian", metapowers: true, powerLevel: 50},
                {codeName: "hawkgirl", alterEgo: "sheria hall", species: "Thanagarian", metapowers: true, powerLevel: 50},
                {codeName: "black canary", alterEgo: "Dinah Lance", species: "human", metapowers: true, powerLevel: 50},
                {codeName: "elongate man", alterEgo: "Ralph Dibny", species: "human", metapowers: true, powerLevel: 40},
                {codeName: "red tornado", alterEgo: "john smith", species: "android", metapowers: true, powerLevel: 50},
                {codeName: "zatanna", alterEgo: "zatanna zatarra", species: "human", metapowers: true, powerLevel: 95},
                {codeName: "firestorm", alterEgo: "Roy Raymond", species: "human", metapowers: true, powerLevel: 90},
                {codeName: "vixen", alterEgo: "tania amaral", species: "human", metapowers: true, powerLevel: 40},
                {codeName: "vibe", alterEgo: "carlos sousa", species: "human", metapowers: true, powerLevel: 40},
                {codeName: "steel", alterEgo: "miguel sousa", species: "human", metapowers: true, powerLevel: 50},
                {codeName: "gypsy", alterEgo: "adele sousa", species: "human", metapowers: true, powerLevel: 30},
                {codeName: "blue beetle", alterEgo: "Ralph Dibny", species: "human", metapowers: true, powerLevel: 40},
                {codeName: "dr. fate", alterEgo: "john smith", species: "android", metapowers: true, powerLevel: 50},
                {codeName: "captain marvel", alterEgo: "zatanna zatarra", species: "human", metapowers: true, powerLevel: 95},
                {codeName: "green lantern", alterEgo: "Roy Raymond", species: "human", metapowers: true, powerLevel: 90},
                {codeName: "mr. miracle", alterEgo: "tania amaral", species: "human", metapowers: true, powerLevel: 40},
                {codeName: "oberon", alterEgo: "carlos sousa", species: "human", metapowers: true, powerLevel: 40},
                {codeName: "dr. light", alterEgo: "miguel sousa", species: "human", metapowers: true, powerLevel: 50},
                {codeName: "booster gold", alterEgo: "adele sousa", species: "human", metapowers: true, powerLevel: 30}];

let jlaOriginal = [heroes[0], heroes[1], heroes[2], heroes[3], heroes[4], heroes[5], heroes[6]];
let jlaSatellite = [heroes[7], heroes[8], heroes[9], heroes[10], heroes[11], heroes[12], heroes[13], heroes[14], heroes[15]];
let jlaDetroit = [heroes[0], heroes[4], heroes[6], heroes[12], heroes[16], heroes[17], heroes[18], heroes[19]];
let jliOriginal = [heroes[4], heroes[0], heroes[11], heroes[20], heroes[21], heroes[22], heroes[23], heroes[24], heroes[25], heroes[26], heroes[27]];

let combinedSpread = [...jlaOriginal, ...jlaDetroit]

// const entireJL = function(data) {
    
//     let JLA = [];
//     for(let i of data){
//         data.forEach(x => {
//             JLA.push(x);
      
// });
// return JLA;
// };
// }

// const listOfAlterEgos = function(data) {
//     let temp = [];
//     for(let x = 0;  x < data.length; x++) {  //we are gonna loop through the array
//         //console.log(data[x].alterEgo) 
//         temp.push(data[x].alterEgo)
//       }
//       return temp
//       //console.log(instructors[x])
//       //return instructors[longestNameIndex];   
//     };


//console.log(entireJL([jliOriginal, jlaDetroit, jlaSatellite, jlaOriginal]));
//console.log(listOfAlterEgos(jlaOriginal));
//console.log(listOfAlterEgos(entireJL(jlaDetroit)));
//console.log(heroes[11].alterEgo)
//console.log(combinedSpread);
for(let x in heroes)
console.log(heroes[x].codeName);
