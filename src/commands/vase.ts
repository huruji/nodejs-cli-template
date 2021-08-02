import { CommanderStatic } from 'commander'
import type { CmdPlugin } from './'

const cli = (program: CommanderStatic): void => {
  program
    .usage("generate vase file")
    .command("vase")
    .option('-i <idl>')
    .action(async (opt: any) => {
      console.log('vase command')
    })
}

export default {
  cli
} as CmdPlugin
