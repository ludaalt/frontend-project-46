#!/usr/bin/env node
import { Command } from 'commander';

const program = new Command();

program.option('-V, --version ').option('-s, --separator <char>');

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.');

program.parse();
