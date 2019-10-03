"use strict";
module.exports = function (options) 
{
  /**
   * Determines if a value is a monad.
   * @param { Any } val - some value.
   * @returns { Boolean } - Returns whether or not the value is a monad.
   */
  function is_monad (val)
  {
    if (val.mtype) 
    {
      if (val.mtype === "ResultMonad") return true; 
      if (val.mtype === "OptionMonad") return true; 
    }
    return false;
  }

  return is_monad;
}