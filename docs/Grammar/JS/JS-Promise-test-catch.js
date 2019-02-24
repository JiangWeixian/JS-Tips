Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw 'Oh no!';
  })
  .catch( reason => {
    console.error( 'onRejected function called: ' + reason );
  })
  .then(() => {
    console.log( "then-resovle" );
  }, () => {
    console.log( "then-reject" );
  })