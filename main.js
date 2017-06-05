"use strict";

$(function(){
  var count = 0;

  function startRight(){
    $('#image').removeClass('stop').addClass('spin-r1');
  }
  function startLeft(){
    $('#image').removeClass('stop').addClass('spin-l1');
  }
  function slowDownRight(){
    $('#image').removeClass('spin-r2').addClass('spin-r1');
  }
  function slowDownLeft(){
    $('#image').removeClass('spin-l2').addClass('spin-l1');
  }
  function speedUpRight(){
    $('#image').removeClass('spin-r1').addClass('spin-r2');
  }
  function speedUpLeft(){
    $('#image').removeClass('spin-l1').addClass('spin-l2');
  }
  function stop(){
    $('#image').removeClass('spin-l1').removeClass('spin-r1');
  }
  $('#right').on('click', function(){
    count++;
    if (count >= 2) {
      count = 2;
    }
    if (count === 1) {
      startRight();
    }
    if (count === 2) {
      speedUpRight();
    }
    if (count === 0) {
      stop();
    }
    if (count === -1) {
      slowDownLeft();
    }
//    $('.counter').html('counter at ' +count);
  });
  $('#left').on('click', function(){
    count--;
    if (count <= -2) {
      count = -2;
    }
    if (count === 0) {
      stop();
    }
    if (count === -1) {
      startLeft();
    }
    if (count === -2) {
      speedUpLeft();
    }
    if (count === 1) {
      slowDownRight();
    }
//    $('.counter').html('counter at ' +count);
  });
});
