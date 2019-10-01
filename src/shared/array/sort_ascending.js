"use strict";
module.exports = function (options) 
{    
  /**
   Sort flat array in ascending order (lowest to highest).
   */
  function sort_ascending (a, b) 
  {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  }

  return sort_ascending;
}