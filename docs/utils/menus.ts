import { ignoreFolders, rootPath } from './config'
import { amendPathName, createRouterUrl } from './formater'
import * as path from 'path'
import * as fs from 'fs'

const isEmpty = require('lodash/isEmpty')

var folders: string[] = []

export const isDirectory = (value: string) => {
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

export const getChildMenus = (dirPath: string, prefix: string) => {
  let menus: string[] = []
  let _files = fs
      .readdirSync(dirPath)
  _files.forEach(e => {
    if (isDirectory(`${dirPath}/${e}`) && e !== 'node_modules') {
      menus = menus.concat(getChildMenus(`${dirPath}/${e}`, `${prefix}/${e}`))
    } else {
      const isVaild = isMdFiles(e) && e !== 'README.md'
      isVaild && amendPathName([ e ], dirPath)
      isVaild && menus.push(`${prefix}/${e.slice(0, e.length - 3).trim()}`)
    }
  })
  return menus
}

interface Menus {
  [x: string]: string[]
}

export const getMenus = (): Menus => {
  const valildFolders = getVaildFolders()
  const menus: Menus = {}
  valildFolders.forEach(dirpath => {
    let _files = fs
      .readdirSync(dirpath)
    let _folders = _files.filter((v: string) => isDirectory(`${dirpath}/${v}`))   
    _files = _files.filter((v: string) => isMdFiles(v) && v !== 'README.md')
    
    _files = amendPathName(_files, dirpath)
      .map((v: string) => v.slice(0, v.length - 3).trim())
    const _folderName = path.basename(dirpath)
    _files = [''].concat(_files)
    menus[createRouterUrl(_folderName)] = _files
    if (!isEmpty(_folders)) {
      let childMenus: string[] = []
      _folders.forEach(e => {
        childMenus = childMenus.concat(getChildMenus(`${dirpath}/${e}`, e))
      })
      if (!isEmpty(childMenus)) {
        menus[createRouterUrl(_folderName)] = _files.concat(childMenus)
      }
    }
  })
  return menus
}
