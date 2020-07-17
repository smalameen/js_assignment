function feetToMile(feet){
    if ( feet < 0){
        return 'Undefined'
    }else{
      return feet/5280;
    }
}
var mile = feetToMile(1);
console.log(mile);


function woodCalculator(chair, table, bed){
    if(chair <=0 || table <=0 || bed <=0){
        return "undefined";
    }else{
          return  (chair*1)+(table*3)+(bed*5);

    }
}
var result = woodCalculator(1,2,1);
console.log(result);


function brickCalculator(tolaSize){
    
    var first = 15;
    var second = 12;
    var third = 10;

    if (tolaSize<0 || tolaSize ==0){
   
        console.log("No brick is needed");
    }
     else{
            if( tolaSize <=10){
                var sumBrick = tolaSize*15*1000;
                console.log(sumBrick);


            } else if( tolaSize <= 20){
                first = first*10;
                 second = tolaSize - 10;
                 tolaSize = first + (second*12);
                 var sumBrick= tolaSize*1000;


            } else{
                  var sumBrick = 270000 +(tolaSize=(tolaSize-20)*10*1000);
            }
            return sumBrick;
        }
}
 var result=brickCalculator(40);
 console.log(result);




    
 function tinyFriend(friendsName){
    var min = friendsName[0];
        for( var i=0; i<friendsName.length; i++){
            var element= friendsName[i];
            if (element.length < min.length)
            min = element;
    
        }
        return min;
    }
    var friendsName = ["Al Amin","Bappy","Abdullah","Tonmoy","TabijKha","Tiny"];
    var result = tinyFriend(friendsName);
    console.log("My tiny friend name is ",result);