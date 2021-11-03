const spinner2 = function(str, howMany, firstDelay, nextDelay) {
  let delay = firstDelay;
  for (let i = 0; i < howMany; i++) {
    for (let ch of str) {
      setTimeout(() => {
        process.stdout.write(`\r${ch}   `);
      }, delay);
      delay += nextDelay;
    }
  }
  setTimeout(() => {
    console.log();
  }, delay);
};

spinner2("|/-\\", 3, 100, 200);
