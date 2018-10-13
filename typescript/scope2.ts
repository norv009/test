class scopeTest{
    testFunction1(){
        var a =10;
        if(10){
            var a=10;
        }
        console.log(a);
    }
    testFunction2(){
        var a =10;
        if(10){
            var a=10;
        }
        console.log(a);
    }

    testFunction3(){
        var ar=[];
        for(var index=0;index<10;index++){
            ar.push(function(){
                console.log(index);
            });
        }

        ar.forEach(element =>{
            element();
        });

      
    }

    testFunction4(){
        var ar=[];
        for(var index=0;index<10;index++){
            var kc = function(index){
                return function(){
                    console.log(index);
                };
            }
            ar.push(kc(index));
        }

        ar.forEach(element =>{
            element();
        });

      
    }
}

var apple = new scopeTest();
console.log(apple.testFunction4());
