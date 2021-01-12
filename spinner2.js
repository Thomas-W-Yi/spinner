const spinner2 = () => {
  let spinPosition = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ','\r\n   ' ], timeout = 100;
  for (let i = 0; i <= spinPosition.length * 2 - 1; i++) {
    let index = i === 9 ? 4 : i === 8 ? 0 : i < 4 ? i : i - 4;
    setTimeout(() => {
      process.stdout.write(spinPosition[index]);
    }, timeout);
    timeout += 200;
  }
};


