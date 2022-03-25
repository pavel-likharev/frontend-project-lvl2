import * as fs from 'fs';
import _ from 'lodash';
import path from 'path';

const STATES = {
  added: '+',
  deleted: '-',
};

const getData = (filepath) => {
  const fullPath = path.resolve(process.cwd(), filepath);
  const data = fs.readFileSync(fullPath, 'utf8');
  return JSON.parse(data);
};

const gendiff = (file1, file2) => {
  const data1 = getData(file1);
  const data2 = getData(file2);

  const keys = _.sortBy([...Object.keys(data1), ...Object.keys(data2)]);
  const uniqeKeys = keys.filter((key, index) => keys.indexOf(key) === index);

  const result = uniqeKeys.reduce((acc, key) => {
    if (Object.hasOwn(data1, key) && Object.hasOwn(data2, key)) {
      if (data1[key] === data2[key]) {
        const newAcc = `${acc}
    ${key} = ${data1[key]}`;
        return newAcc;
      }
      const newAcc = `${acc}
  ${STATES.deleted} ${key} = ${data1[key]}
  ${STATES.added} ${key} = ${data2[key]}`;

      return newAcc;
    }
    if (Object.hasOwn(data1, key)) {
      const newAcc = `${acc}
  ${STATES.deleted} ${key} = ${data1[key]}`;
      return newAcc;
    }
    const newAcc = `${acc}
  ${STATES.added} ${key} = ${data2[key]}`;
    return newAcc;
  }, '{');

  console.log(`${result}
}`);
};

export default gendiff;
