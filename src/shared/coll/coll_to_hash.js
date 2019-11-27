"use strict";
module.exports = function (options) 
{    
  /*
    console.log(coll_to_hash("id", [{id: 1}, {id: 2}, {id: 3}, {}, {id: 4}]))
  */
  function coll_to_hash (field, coll) 
  {
    let ret = {};
    coll.map(
      (v) => 
      {
        if (v[field] !== undefined) 
        {
          ret[v[field]] = v
        }
      });
    return ret;
  }

  return coll_to_hash;
}