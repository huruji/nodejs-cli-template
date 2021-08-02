#!/usr/bin/env node

import('v8-compile-cache')
import program from 'commander'
import commands from './commands'
import { sync as loadJsonFileSync } from 'load-json-file'
import updateNotifier from 'update-notifier2'
import * as path from 'path'

const pkg = loadJsonFileSync<{ name: string; version: string; publishConfig: { registry: string } }>(path.resolve(__dirname, '../package.json'))
const { version } = pkg
const registryUrl = pkg.publishConfig.registry
const installCommand = `npm i -g ${pkg.name}`

updateNotifier({
  pkg,
  updateCheckInterval: 1000 * 60,
  registryUrl,
  shouldNotifyInNpmScript: true,
}).notify({
  installCommand,
})

if (commands.length) {
  commands.forEach(plugin => plugin.cli.apply(null, [program]))
}

program.version(version)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}



program.parse(process.argv)

process.on('unhandledRejection', (error) => {
  console.error(error)
  process.exit(1)
})



