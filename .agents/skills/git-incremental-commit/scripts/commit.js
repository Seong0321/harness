#!/usr/bin/env node

const { execSync } = require('child_process');

const VALID_CATEGORIES = ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore'];

function printUsage() {
  console.log('Usage:');
  console.log('  node commit.js --file <file-path> --category <category> --message "<Korean message>"');
  console.log('  node commit.js --push');
  console.log('\nValid categories: ' + VALID_CATEGORIES.join(', '));
}

function parseArgs() {
  const args = process.argv.slice(2);
  const parsed = {};
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--file') parsed.file = args[++i];
    else if (args[i] === '--category') parsed.category = args[++i];
    else if (args[i] === '--message') parsed.message = args[++i];
    else if (args[i] === '--push') parsed.push = true;
    else if (args[i] === '--help') parsed.help = true;
  }
  return parsed;
}

function runCommand(command) {
  try {
    return execSync(command, { encoding: 'utf8' }).trim();
  } catch (error) {
    console.error(`Error executing command: ${command}`);
    console.error(error.message);
    process.exit(1);
  }
}

const args = parseArgs();

if (args.help || Object.keys(args).length === 0) {
  printUsage();
  process.exit(0);
}

if (args.push) {
  console.log('Pushing commits to remote...');
  const result = runCommand('git push');
  console.log(result || 'Push completed successfully.');
  process.exit(0);
}

if (!args.file || !args.category || !args.message) {
  console.error('Error: Missing required arguments (--file, --category, and --message are all required).');
  printUsage();
  process.exit(1);
}

if (!VALID_CATEGORIES.includes(args.category)) {
  console.error(`Error: Invalid category "${args.category}". Must be one of: ${VALID_CATEGORIES.join(', ')}`);
  process.exit(1);
}

// Stage file
console.log(`Staging file: ${args.file}`);
runCommand(`git add "${args.file}"`);

// Format commit message
const commitMessage = `${args.category}: ${args.message}`;
console.log(`Committing with message: "${commitMessage}"`);

// Commit
runCommand(`git commit -m "${commitMessage.replace(/"/g, '\\"')}"`);
console.log('Commit successful.');
