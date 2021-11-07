var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
    
   var r =  data.filter(x)
   function x(a){
    //  1.Get all the countries from Asia continent /region using Filter function//
         console.log(a.continents,a.region)

        //  2.Get all the countries with a population of less than 2 lakhs using Filter function//

        if( a.population<200000){
            console.log(a.population,a.region)
            
        }
  
      
   
    } 
    
}