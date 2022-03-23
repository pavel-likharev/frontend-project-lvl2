import * as fs from 'fs';
import * as _ from 'lodash';

console.log(_.capitalize('test'));

const getData = (filepath) => {
  const data = fs.readFileSync(`__fixtures__/${filepath}`, 'utf8');
  return JSON.parse(data);
};

const compareFiles = (file1, file2) => {
  const data1 = getData(file1);
  const data2 = getData(file2);

  const entries1 = Object.entries(data1);
  const entries2 = Object.entries(data2);

  console.log(entries1);
};

compareFiles('file1.json', 'file2.json');
