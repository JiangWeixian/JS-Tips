// 测试then-reject捕获错误，不会被catch
Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw 'Oh no!';
  })
  .then( () => {
    console.log( "then-resovle" );
  },() => {
    console.log( "then-reject" );
  })
  .catch( reason => {
    console.error( 'onRejected function called: ' + reason );
  })

// 没有then-reject，有catch
Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw 'Oh no!';
  })
  .then(() => {
    console.log( "then-resovle" );
  })
  .catch( reason => {
    console.error( 'onRejected function called: ' + reason );
  })

// 没有then-reject，没有catch
Promise.resolve()
  .then( () => {
    // Makes .then() return a rejected promise
    throw 'Oh no!';
  })
  .then(() => {
    console.log( "then-resovle" );
  })