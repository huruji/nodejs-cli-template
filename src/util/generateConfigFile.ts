import * as fs from 'fs'
import * as path from 'path'
import * as inquirer from 'inquirer'
import chalk from 'chalk'
import logger from './logger'
import { initReport } from './track'

export default async (reportData?: Record<string, any>):Promise<void> => {
  const configFilePath = path.join(process.cwd(), 'turl.config.js')
  const isExists = fs.existsSync(configFilePath)
  if (isExists) {
    const { override } = await inquirer.prompt({
      name: 'override',
      type: 'confirm',
      default: false,
      message:
        'It seems that you already have a turl configuration, do you want to override it?'
    })

    if (!override) {
      logger.info('\nAborting...')
      return
    }
  }
  const content = fs.readFileSync(path.resolve(__dirname, `../tpl/turl.config.js`))
  const configContent = content.toString()
  fs.writeFileSync(configFilePath, configContent, {
    flag: 'w+'
  })
  initReport(reportData || {})
  console.log('\n')
  logger.info(`📝  Configuration file created at ${chalk.cyan(configFilePath)}`)
}
