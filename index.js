//   function inchToFeet2(inch) {
//     const feetFraction = inch / 12;
//     const feetNumber = parseInt(feetFraction);

//     const inchRemaining = inch % 12;
//     const result = feetNumber + ' ft ' + inchRemaining + ' inch.';
//   
//     return result;
//   }

//   const shuvoHeight = inchToFeet2(75);
//   console.log(shuvoHeight);




const inchTofeet=(inch)=>{
    const feetFraction = inch/12;
    const feetNumber= parseInt(feetFraction);

    const inchRemaining = inch % 12;
    const result = feetNumber + '  ft ' + inchRemaining + ' inch '
    return result;
}

const badonFeet = inchTofeet(65.5)
console.log(badonFeet)

const kilomitter = (mail)=>{
    const kilo = mail * 1.6090
    return kilo;
}
const dhakatoComilla = kilomitter(115)
console.log(dhakatoComilla)


const gosHesab = (gos)=>{
    const mail = gos *1760
    return mail;
}

console.log(gosHesab(13))


// kilokalori 
const kilokalori = (kiloWord) =>{
        const karoli = kiloWord * 860
        return karoli
}
console.log('kilokalori', kilokalori(5))



// hour to sec

const hourToSec = (hour) =>{
            const sec = hour * 60 * 60
            return sec;
}   

console.log('sec', hourToSec(1))



// sentimittal to mitter
const sentimitterToMitter = (senti) =>{
    const mitter = senti / 100
    return mitter
}

console.log('mitter' ,sentimitterToMitter(1000))


//Inchi to semtimitter 

const inchiToSentimitter = (inch) =>{
        const sentimitter = inch * 2.54
        return sentimitter
}

console.log('sentimitter',inchiToSentimitter(50))

// pound to kilogram 

const poundToKilo = (pound) =>{
    const kilo = pound *0.453
    return kilo;
}

console.log('kilogram',poundToKilo(10))


// goj to mitter
const gojToMitter = (goj) =>{
    const mitter = goj *0.91
    return mitter;
}

console.log('Mitter', gojToMitter(10))


const leapYear = (year) => {
    if (year % 400 === 0) {
        return "Yes, this is a leap year (divisible by 400)";
    } else if (year % 100 === 0) {
        return "No, not a leap year (divisible by 100 but not by 400)";
    } else if (year % 4 === 0) {
        return "Yes, this is a leap year (divisible by 4)";
    } else {
        return "No, not a leap year";
    }
};

console.log('leap year:', leapYear(2024)); // ✅ Leap year
console.log('leap year:', leapYear(2025)); // ❌ Not a leap year
console.log('leap year:', leapYear(2100)); // ❌ Not a leap year
console.log('leap year:', leapYear(2000)); // ✅ Leap year


// income amount 

const incoemAmoutTax = (income) =>{
    switch (true) {
        case income <=50000:
            return 10;
        case income <=100000:
        return 20;
        
        case income <=200000:
            return 30
            
    
        default:
            return 40;
    }


}

console.log('income Tax:-',incoemAmoutTax(60000))


// package deliabary heasb

const packageDelebaryCost = (weight) =>{
    switch (true) {
        case weight <10:
            return 100
         case weight <20 :
            return 300;
         case weight <=50 :
            return 1000

        default:
            return 1000 + (weight -50) * 100;
    }
}   

console.log('package delebaery cost:-', packageDelebaryCost(55))

// letter marks 
const latterMarks = (marks) =>{
    switch (true) {
        case marks >=80:
            return "A";
        case marks >=70:
           return "B";
        case marks >=60:
            return "C"
        case marks >=50:
            return "d";

        default:
                 return "Fail" ;
    }
}

console.log('latter ,' , latterMarks(5))

// array of leapyear

const arrayOfLeapYear=(years)=>{
        let count = 0;

        for(let year of years){
            if((year %4 ===0 && year % 100 !==0) | (year % 400 ===0)){
                count ++
            }
        }
        return count
}

console.log('totals lepyar', arrayOfLeapYear([2024,2023,2020,2100,2021,2300,1962]))


// odd avarage number
const oddAverageNumber = (numbers) => {
    const odds = [];
    for (const number of numbers) {
        if (number % 2 === 1) {
            odds.push(number);
        }
    }

    if (odds.length === 0) {
        console.log(0);
        return;
    }

    let sum = 0;
    for (const number of odds) {
        sum += number;
    }

    const average = sum / odds.length;
    console.log(average);
};

oddAverageNumber([10, 20, 30, 40,11,21]);

// even avarage

const evenAvarageNumber = (numbers) =>{
    const evens = []
    for(const number of numbers){
        if(number % 2 ===0){
            evens.push(number)
        }
    }
    if(evens.length ===0){
        console.log(0)
        return 
    }

    let sum = 0;
    for(const number of evens){
        sum += number;
    }
    const count = evens.length
    const ava = (sum /count).toFixed(2)

    console.log('even avarage', ava)
}
evenAvarageNumber([10,20,2])

// array multiply
const oddsArrayMultiply = (numbers) =>{
        const odds = []
        for(const number of numbers){
            if(number %2 ===1){
                odds.push(number)
            }
        }

      

        const newOddsMultipyBy2 = odds.map((num)=>num * 2)
        
        console.log('odds multipy array :', newOddsMultipyBy2)

}   

oddsArrayMultiply([10,20,21,25])