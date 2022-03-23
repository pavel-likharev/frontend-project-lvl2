#!/usr/bin/env node
import * as fs from 'fs';
import { Command } from 'commander';
import * as _ from 'lodash';

const getData = (filepath) => {
  const data = fs.readFileSync(`__fixtures__/${filepath}`, 'utf8');
  return JSON.parse(data);
};

const compareFiles = (file1, file2) => {
  const result = '';
  const data1 = getData(file1);
  const data2 = getData(file2);

  const entries = Object.entries(data1);
  const entries2 = Object.entries(data2);
  const sortData = _.sortBy([1, 2, 3, 5, 4]);
  console.log(entries1);
  console.log(sortEnt);
};

const program = new Command();

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('0.0.1')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .option('-f, --format <type>', 'output format')
  .action(compareFiles);

program.parse(process.argv);
