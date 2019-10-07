"use strict";
module.exports = function (options) 
{ 
  const axios = require("axios");
  const result_ok = require("../monads/result_ok")();
  const result_err = require("../monads/result_err")();
  const is_monad = require("../monads/is_monad")();

  /*
  */
  function axios_post (url, data) 
  {
    return axios.post(url, data)
      .then(
        (resp) => 
        {
          if (is_monad(resp)) return resp;
          return result_ok(resp);
        })
      .catch(
        (err) => 
        {
          if (is_monad(err)) return err;
          return result_err(err);
        });
  }

  return axios_post;
}