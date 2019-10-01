"use strict";
module.exports = function (options) 
{
  const { Client } = require('pg');
    
  /*
  */
  function db_connect () 
  {
    try 
    {
      const client = new Client({
        host: (options.remote ? options.ec2DNS : 'localhost'),
        database: 'audience_synergy',
        user: 'power_user',
        password: '4dP(D%NnPj7tj#ex',
        port: 5432,
      })
      client.connect();
      return client;
    }
    catch (err) 
    {
      console.log('database connection error', err);
      return false;
    }
  }

  return db_connect;
}