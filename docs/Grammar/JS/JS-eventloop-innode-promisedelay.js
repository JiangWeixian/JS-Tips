function sleep(time) {
  let startTime = new Date();
  while (new Date() - startTime < time) {}
  console.log('<--Next Loop-->');
}

setTimeout(() => { //S1
  console.log('timeout1');
  setTimeout(() => { // S11
      console.log('timeout3');
      sleep(1000);
  });
  process.nextTick(function () { // S1.PN
    console.log('nexttick1')
  })
  new Promise((resolve) => { // S1.P1
    console.log('timeout1_promise1');
    resolve()
  }).then(() => {
    console.log('timeout1_then1');
  });
  new Promise((resolve) => { // S1.P2
      console.log('timeout1_promise2');
      resolve()
  }).then(() => {
      setTimeout(function () { // S12
        console.log('timeout1_then2');
      }, 500)
  });
  sleep(1000);
});
   
setTimeout(() => { //S2
  console.log('timeout2');
  setTimeout(() => { // S21
      console.log('timeout4');
      sleep(1000);
  });
  new Promise((resolve) => {
      console.log('timeout2_promise');
      resolve();
  }).then(() => { // S21.P.then
      console.log('timeout2_then');
  });
  sleep(1000);
}, 500);