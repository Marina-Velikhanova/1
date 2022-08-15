try {
    console.log (a); 
    let a = 3;
  } catch(err) {
    console.log('let must be declared'); 
  }

  try {
    function Divideby0 (x) {
        if (x === 0) {
            throw new Error ("cannot be divided by zero");
        } 
        console.log (1/x);
    }
    Divideby0 (0);
  } catch(err) {
    console.log (err.message) ; 
  } 