"use strict";

$(function(){
  $('#right').on('click', function(){
    $('#image').removeClass('spin-l').addClass('spin-r');
  });
  $('#stop').on('click', function(){
    $('#image').removeClass('spin-l').removeClass('spin-r');
  });
  $('#left').on('click', function(){
    $('#image').removeClass('spin-r').addClass('spin-l');
  });
});
