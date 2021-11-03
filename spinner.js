//process.stdout.write('hello from spinner1.js... \rheyyy\n');

for (let i = 100; i < 10000; i += 900) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, i);

  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, i + 200);

  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, i + 400);

  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, i + 600);
}