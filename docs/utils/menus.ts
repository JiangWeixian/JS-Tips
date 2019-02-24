import { ignoreFolders, rootPath, base } from './config'
import { amendPathName, createRouterUrl } from './formater'
import * as path from 'path'
import * as fs from 'fs'

const isEmpty = require('lodash/isEmpty')

var folders: string[] = []

const isDirectory = (value: string) => {
  return fs.statSync(value).isDirectory()
}

export const getVaildFolders = () => {
  if (!isEmpty(folders)) {
    return folders
  }
  const allFolders: string[] = fs.readdirSync(rootPath)
  const valildFolders = allFolders
    .filter(v => {
      const isVaild = ignoreFolders.indexOf(v) === -1
      return isVaild
    })
    .map(v => {
      return `${rootPath}/${v}`
    })
    .filter(v => {
      return isDirectory(v)
    })
  folders = valildFolders
  return valildFolders
}

const isMdFiles = (value: string) => {
  return path.extname(value).toLowerCase() === '.md'
}

interface Menus {
  [x: string]: string[]
}

export const getMenus = (): Menus => {
  const valildFolders = !isEmpty(folders) && folders || getVaildFolders()
  const menus: Menus = {}
  valildFolders.forEach(dirpath => {
    let _files = fs
      .readdirSync(dirpath)
      .filter((v: string) => isMdFiles(v) && v !== 'README.md')
    _files = amendPathName(_files, dirpath)
      .map((v: string) => v.slice(0, v.length - 3).trim())
    const _folderName = path.basename(dirpath)
    if (!isEmpty(_files)) {
      menus[createRouterUrl(_folderName)] = [''].concat(_files)
    }
  })
  return menus
}
