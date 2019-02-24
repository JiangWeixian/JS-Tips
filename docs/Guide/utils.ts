import { getVaildFolders } from '../utils/menus'
import { base } from '../utils/config'
import * as fs from 'fs'

const template: string = fs.readFileSync(__dirname + '/template.md').toString()

console.log(template)

export const createLink = (url: string) => {
  return url
}

console.log(base)
