function sleep(time) {
  let startTime = new Date();
  while (new Date() - startTime < time) {}
  console.log('<--Next Loop-->');
}

setTimeout(() => {
  console.log('timeout1');
  var now = Date.now()
  console.log(now)
  setTimeout(() => {
      console.log('timeout3', Date.now() - now);
      sleep(1000);
  });
  new Promise((resolve) => {
      console.log('timeout1_promise');
      resolve();
  }).then(() => {
      console.log('timeout1_then');
  });
  sleep(1000);
});
   
setTimeout(() => {
  console.log('timeout2');
  var now = Date.now()
  console.log(now)
  setTimeout(() => {
      console.log('timeout4');
      sleep(1000);
  });
  new Promise((resolve) => {
      console.log('timeout2_promise');
      resolve();
  }).then(() => {
      console.log('timeout2_then');
  });
  sleep(1000);
}, 500);