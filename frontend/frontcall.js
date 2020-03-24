const unirest = require('unirest');

console.log("Start Tests")
unirest
  .get('http://localhost/api/forgot')
  .headers({'Accept': 'application/json', 'Content-Type': 'application/json'})
  .then((response) => {
    if (response.status == 200)
    {
      console.log("Sending You Request")
    }
    else
    {
      console.log("Request Failed")
    }
  })



  unirest
  .get('http://localhost/api/signin')
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
      console.log("Sent Your Information")
    }
    else
    {
      console.log("Fill in Information Again")
    }
  }) 
