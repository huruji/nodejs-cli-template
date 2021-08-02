import chalk from 'chalk'
import consola from 'consola'

const logger = {
  log(prefix: string, ...args: string[]):void {
    if (!args.length) {
      return
    }
    consola.log.apply(consola, [prefix, ...args])
  },
  info(...args: string[]):void {
    const prefix = chalk.green('[INFO]')
    consola.info.apply(consola, [prefix, ...args])
  },
  warn(...args: string[]):void {
    consola.warn.apply(consola, [...args])
  },
  success(...args: string[]):void {
    consola.success.apply(consola, [...args])
  },
  error(...args: string[]):void {
    if (!args.length) {
      return
    }
    const prefix = chalk.red('[ERROR]')
    // 将错误信息输出到 stderr
    consola.error(consola, [prefix, ...args])
  }
}

export default logger
