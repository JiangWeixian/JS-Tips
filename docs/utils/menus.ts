import { ignoreFolders, rootPath, base } from './config'
import * as path from 'path'
import * as fs from 'fs'

const isEmpty = require('lodash/isEmpty')

var folders = []

const isDirectory = (value: string) => {
  return fs.statSync(value).isDirectory()
}

const getVaildFolders = () => {
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
  valildFolders.forEach(v => {
    const _files = fs
      .readdirSync(v)
      .filter(v => isMdFiles(v) && v !== 'README.md')
      .map(v => v.slice(0, v.length - 3).trim())
    const _folderName = path.basename(v)
    if (!isEmpty(_files)) {
      menus[`${base}${_folderName}${base}`] = [''].concat(_files)
    }
  })
  return menus
}
