var request = new XMLHttpRequest();
request.open('GET','https://restcountries.com/v3.1/all', true);
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
    console.log(data);
        var r=data.array.forEach(x) 
        function x(a)
            {
                console.log(a.name)
            }

    

    
    
}