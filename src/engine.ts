import { pick, getConfig } from './util'


class Engine {
  config: TurlCliOpt
  constructor (opt: TurlCliOpt) {
    this.handleCliOpts(opt)
    this.config = getConfig(this.config)
  }
  handleCliOpts(opt: TurlCliOpt): void {
    this.config = {}
    const cliOpts = ['host', 'port', 'service', 'method', 'args', 'idl', 'vaseDir', 'methodSourceDir', 'synchronizeToMainProcess', 'turlGenDir', 'thriftModulePath', 'bluebirdModulePath', 'nodeInt64ModulePath', 'nodeModulesPath', 'extraReportData']
    // eslint-disable-next-line prefer-spread
    const pickParams: any[] = ([opt] as any[]).concat(cliOpts)
    const results = pick(...pickParams as [any])
    Object.assign(this.config, results)
  }
}

export default Engine
