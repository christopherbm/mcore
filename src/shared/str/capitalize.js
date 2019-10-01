"use strict";
module.exports = function (options) 
{    
  /*
  */
  function capitalize (str) 
  { 
    return str.charAt(0).toUpperCase() + str.substr(1, str.length - 1); 
  }

  return capitalize;
}