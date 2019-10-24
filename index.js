$(document).ready(function(){

       $.getJSON("http://ip-api.com/json/", function (data) {
             var str = data.isp;
alert("isp => "+str);
    });
});
