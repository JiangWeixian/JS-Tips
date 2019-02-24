export { base } from '../config'

const path = require('path')

export const ignoreFolders = [
  'utils',
  '.vuepress',
  'Menus',
  'Guide'
]

export const rootPath = path.resolve(__dirname, '../')

export const routeIndex = ''
