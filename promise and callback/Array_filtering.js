var arrr = [1,4,2,5,3,9,7,3];

function filterAarr(arrr, cb){
    return new Promise((res,rej)=>{
       var  arrfiltered = [];
       for(i=0; i<arrr.length; i++){
          if(cb(arrr[i])){
            arrfiltered.push(arrr[i]);
          }
       }
       res(arrfiltered)

    });
    
   
}

filterAarr(arrr,function Even(num){return num%2 == 0})
.then((val)=>{console.log("Even Number"+ val)})
.catch((error)=>{console.log("error"+ error)})