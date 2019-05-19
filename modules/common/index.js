import path from 'path'
export default function nuxtCommonModule () {
  this.addPlugin(path.resolve(__dirname, 'plugin.js'))
}
