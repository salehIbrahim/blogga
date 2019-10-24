 window.onload = function() {
               $(function(){

       $.getJSON("http://ip-api.com/json/", function (data) {
             var str = data.isp;
 var res = str.toLowerCase();
             var n1 = res.includes("facebook");
             var n2 = res.includes("amazon");




           if(n1==true || n2==true){
location.href ="http://google.com";

              
           }else {
        document.write("Happy");
              }
    });
});
           }
