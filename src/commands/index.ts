import { CommanderStatic } from 'commander'
import init from './init'
import vase from './vase'

export interface CmdPlugin {
  cli(program: CommanderStatic): void
}

const plugins = [init, vase]

export default plugins
