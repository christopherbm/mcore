"use strict";
module.exports = function (options) 
{ 
  const axios = require("axios");

  /*
  */
  function axios_download (url, data) 
  {
    return axios({
      method: "post",
      url: url,
      data: data,
      responseType: "blob"
    });
  }

  return axios_download;
}