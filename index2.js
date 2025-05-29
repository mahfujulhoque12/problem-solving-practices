// find odd number or not
const oddFoundorNot =(numbers)=>{
   const odds = numbers.filter(number =>number%2===1)

  if (odds.length > 0) {
    console.log("Odd Number Found");
  } else {
    console.log("No Odd Number Found");
  }

  
}

 oddFoundorNot([10])
 oddFoundorNot([19])



 // find odds in array and return decimale

 const findOdds = (numbers)=>{
    const odds = numbers.filter(number =>number%2===1)

    if(odds.length ===0){
        return 0
    }

   const sum = odds.reduce((acc,curr)=>acc + curr,0)

    const count = odds.length
    const ava =  sum/ count;
    return ava.toFixed(2)
 }

 console.log('find odds : ', findOdds([10,9,19,27]))


 // muinus 1 from eatch odds value and make a new array
 
 const oddsValue = (numbers) =>{
    const odds = numbers.filter(number => number%2===1)
    .map(odd=>odd -1)

    return console.log('odds and new array:-',odds)
 }

  oddsValue([10,11,13,14])

 const students = ['abul', 'babul', 'cabul', 'abul', 'babul', 'dabul'];

const findUnique = (array) => {
  const unique = [];
  for (const item of array) {
  
    if(!unique.includes(item)){
        unique.push(item)
    }
  }
  return unique;
};

console.log('Unique items:', findUnique(students));