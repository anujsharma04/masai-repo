
//1.problem


let newarr = [70,98,86,88,76];
var xyz = newarr.reduce((acc,crr)=>{
//    console.log(crr += acc)
   return acc += crr;
    
}, 0)

var avrage = xyz/newarr.length;
// console.log(avrage);



function codingscorecheck(x,y){
    return new Promise((res,rej)=>{
        setTimeout( function(){

            if(y<=x){
                res("Your avrage coding score is - "+x)
            }
            else{
                rej("Sorry you haven’t cleared the coding round.")
            }
        },2000)
    })
}

// codingscorecheck(avrage,43)
// .then((val)=>{console.log(val)})
// .catch((val)=>{console.log(val)})

//2.problem

function hukumuscorecheck(arrr,cutoff){
    return new Promise((res,rej)=>{
        setTimeout(function(){
            if(cutoff<=arrr){
                res("your hukumu score is - "+ arrr)
            }
            else{
                rej("Sorry you haven’t cleared the HUKUMU round.")
            }
        }, 2000)
    })
}

// hukumuscorecheck(avrage,75)
// .then((val)=>{console.log(val)})
// .catch((val)=>{console.log(val)})

function unitMovementCheck(hukumu, coding, cutoff) {
    return new Promise((res, rej) => {
        setTimeout(function() {
            if (hukumu >= cutoff && coding >= cutoff) {
                res("Your HUKUMU score is - " + hukumu + " and your coding score is - " + coding);
            } else {
                rej("Sorry you haven’t cleared the final cutoff.");
            }
        }, 2000);
    });
}

// Problem 3

(async function() {
    try {
        const codingResult = await codingscorecheck(avrage, 43);
        console.log(codingResult);

        const hukumuResult = await hukumuscorecheck(avrage, 75);
        console.log(hukumuResult);

        const finalResult = await unitMovementCheck(avrage, avrage, 50);
        console.log(finalResult);
    } catch (error) {
        console.log(error);
    }
})();