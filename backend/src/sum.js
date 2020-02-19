const bcrypt = require('bcrypt');

function sum(a, b) {
    return a + b;
  }
  



function testHash(myPlaintextPassword, saltRounds) {
    //const saltRounds = 12; // Number of Salt rounds

    // Place holder for actually recieving a plaintext password from frontend
    //const myPlaintextPassword = 'password123';
    //const someOtherPlaintextPasword = 'otherpassword123'
    ret = bcrypt.hashSync(myPlaintextPassword, saltRounds)
    return ret
}


function testLogin(hash, myPlaintextPassword) {
  return bcrypt.compareSync(myPlaintextPassword, hash)
}




module.exports = {sum, testHash, testLogin};