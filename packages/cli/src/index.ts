import { Command } from 'commander'
import { add } from './commands/add.js'
import { init } from './commands/init.js'
import { update } from './commands/update.js'

const program = new Command()

program
  .name('adms-rds-ui')
  .description('CLI for adding ADMS RDS UI components to your project')
  .version('0.0.1')

program
  .command('init')
  .description('Initialize ADMS RDS UI in your project')
  .option('-y, --yes', 'Skip prompts and use defaults')
  .action(init)

program
  .command('add [components...]')
  .description('Add components to your project')
  .option('-y, --yes', 'Skip prompts')
  .option('-o, --overwrite', 'Overwrite existing files')
  .action(add)

program
  .command('update [components...]')
  .description('Update installed components to the latest registry version')
  .option('-y, --yes', 'Apply all updates without confirming')
  .option('-o, --overwrite', 'Overwrite without confirming (alias of --yes)')
  .option('-c, --check', 'List outdated components without writing any files')
  .action(update)

program.parse()
