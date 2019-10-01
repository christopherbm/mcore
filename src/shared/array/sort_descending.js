"use strict";
module.exports = function (options) 
{    
  /**
   Sort flat array in descending order (highest to lowest).
   */
  function sort_descending (a, b) 
  {
    if (a < b) return 1;
    if (a > b) return -1;
    return 0;
  }

  return sort_descending;
}