
let dataY = [2023, 2024, 2025, 2026, 2027, 2028, 2029, 2039, 2031]

let data1 =  [282, 269, 257, 245, 233, 220, 208, 196, 184];
let data2 = [282, 269,257,245,245,245,245,245,245];
let data3 = [294,294,294,294,294,294,294,294,294];
let data4 = [352,352,352,352,352,352,352,352,352];
let data5= [352,413,413,413,413,413,413,413,413];
let data6= [352,413,474,474,474,474,474,474,474];
let data7=[352,413,474,536,536,536,536,536,536];
let data8= [352,413,474,536,597,597,597,597,597];
let data9 = [352,413,474,536,597,728,728,728,728];
let data10=[352,413,474,536,597,728,860,860];
let data11=[352,413,474,536,597,728,860,991,991];
let data12=[352,413,474,536,597,728,860,991,1123];
let data13=[352,413,474,536,597,728,860,991,1267];


/*let data = [
    {
      "t1":
      "t2": [282, 269,257,245,245,245,245,245,245],
      "t3": [294,294,294,294,294,294,294,294,294,]

    }
]
*/




$("#enviar").click(function(){
    $("#tAny").empty();
    let valor = parseInt(document.querySelector('input').value);
    console.log(valor);
    if(valor <=600){
        for(let i=0; i< data1.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data1[i]} € </td> </tr>`)
        }

    }
    else if(valor >600 && valor <=900){
        console.log("es el 2")
        for(let i=0; i< data2.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data2[i]} € </td> </tr>`)
        }
    }
    else if(valor >900 && valor <=1126 ){
        console.log("es el 3")
        for(let i=0; i< data3.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data3[i]} € </td> </tr>`)
        }
    }
    else if(valor >1126 && valor <=1300 ){
        for(let i=0; i< data4.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data4[i]} € </td> </tr>`)
        }
    }
    else if(valor >1300 && valor <=1500 ){
        for(let i=0; i< data5.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data5[i]} € </td> </tr>`)
        }
    }
    else if(valor >1500 && valor <=1700 ){
        for(let i=0; i< data6.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data6[i]} € </td> </tr>`)
        }
    }
    else if(valor >1700 && valor <=1900 ){
        for(let i=0; i< data7.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data7[i]} € </td> </tr>`)
        }
    }
    else if(valor >1900 && valor <=2330 ){
        for(let i=0; i< data8.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data8[i]} € </td> </tr>`)
        }
    }
    else if(valor >2330 && valor <=2760 ){
        for(let i=0; i< data9.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data9[i]} € </td> </tr>`)
        }
    }
    else if(valor >2760 && valor <=3190 ){
        for(let i=0; i< data10.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data10[i]} € </td> </tr>`)
        }
    }
    else if(valor >3190 && valor <=3620 ){
        for(let i=0; i< data11.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data11[i]} € </td> </tr>`)
        }
    }
    else if(valor >3620 && valor <=4050 ){
        for(let i=0; i< data12.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data12[i]} € </td> </tr>`)
        }
    }
    else if(valor >4050){
        for(let i=0; i< data13.length; i++){
            $("#tAny").append(` <tr> <td class="main"> ${dataY[i]} </td> <td class="sec"> ${data13[i]} € </td> </tr>`)
        }
    }



    
    
  });






/*
jQuery(document).ready(function ($) {

    console.log("hola?")

    $('#checkbox').change(function(){
      setInterval(function () {
          moveRight();
      }, 3000);
    });
    
      var slideCount = $('#slider ul li').length;
      var slideWidth = $('#slider ul li').width();
      var slideHeight = $('#slider ul li').height();
      var sliderUlWidth = slideCount * slideWidth;
      
      $('#slider').css({ width: slideWidth, height: slideHeight });
      
      $('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });
      
      $('#slider ul li:last-child').prependTo('#slider ul');
  
      function moveLeft() {
          $('#slider ul').animate({
              left: + slideWidth
          }, 200, function () {
              $('#slider ul li:last-child').prependTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      function moveRight() {
          $('#slider ul').animate({
              left: - slideWidth
          }, 200, function () {
              $('#slider ul li:first-child').appendTo('#slider ul');
              $('#slider ul').css('left', '');
          });
      };
  
      $('a.control_prev').click(function () {
          moveLeft();
      });
  
      $('a.control_next').click(function () {
          moveRight();
      });
  
  });    
  */
  