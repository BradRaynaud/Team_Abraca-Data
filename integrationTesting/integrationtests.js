const unirest = require('unirest');

console.log("Start Tests")
unirest
  .get('http://localhost/api/hello_world')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Hello_World: Passed")
    }
    else
    {
      console.log("Hello_World: Failed")
    }
  })


  unirest
  .get('http://localhost/api/mongoroute')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Mongo Query: Passed")
    }
    else
    {
      console.log("Mongo Query: Failed")
    }
  })


  unirest
  .get('http://localhost/api/datastuff')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Flask Query: Passed")
    }
    else
    {
      console.log("Flask Query: Failed")
    }
  })


  unirest
  .get('http://localhost/api/datastuff')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Flask Query: Passed")
    }
    else
    {
      console.log("Flask Query: Failed")
    }
  }) 


  unirest
  .get('http://localhost/api/signup')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Salt & Hash: Passed")
    }
    else
    {
      console.log("Salt & Hash: Failed")
    }
  })


  unirest
  .get('http://localhost/api/login')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Login Verify: Passed")
    }
    else
    {
      console.log("Login Verify: Failed")
    }
  }) 