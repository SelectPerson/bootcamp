const fs = require('fs');

const dirName = "./files";

fs.readdir(dirName, function(err, filenames) {
  let files = [];

  filenames.forEach(elem => files.push(`${dirName}/${elem}`));

  const readFileOfNumber = ((value) => {
    const result = fs.readFileSync(value) * 1;
    if(isNaN(result)) return 0;
    return result;
  });

  const collectArrNumbers = files.map((elem) => (readFileOfNumber(elem)));

  const sum = collectArrNumbers.reduce((previousValue, currentValue) => previousValue + currentValue);

  console.log("sum", sum);
});


