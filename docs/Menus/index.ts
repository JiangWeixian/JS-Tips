import { getVaildFolders } from '../utils/menus'
import { createRouterUrl } from '../utils/formater'
import { templatePath } from './config'
import * as fs from 'fs'
import * as path from 'path'

const getTemplate = (pathStr = templatePath) => {
  return fs.readFileSync(templatePath).toString()
} 

export const createLink = (url: string, text: string) => {
  return `[${text}](${url})`
}

export const createLI = (value: string) => {
  return `* ${value}`
}

export const createH2 = (title: string) => {
  return `## ${title}`
}

export const createUL = (
  uls: string[]
) => {
  const arr = uls.map(e => {
    return createLI(e)
  })
  return arr.join('\n')
}

export const createH1Section = (title: string, content: string) => {
  const h1 = createH2(title)
  return h1 + '\n\n' + content
} 

interface MenusSchema {
  url: string
  text: string
}

export const createMenus = (
  menus: MenusSchema[]
) => {
  const arr = menus.map(e => {
    return createLink(e.url, e.text)
  })
  return createUL(arr)
}

export const createGuideMenus = (title = '目录') => {
  const folders: MenusSchema[] = getVaildFolders()
    .map(e => {
      const dirName = path.basename(e)
      return {
        url: createRouterUrl(dirName),
        text: dirName
      }
    })
  return createMenus(folders)
}

export const createGuideReadme = (fileName = 'README.md') => {
  const menus = createGuideMenus()
  const template = getTemplate()
  const data = template + '\n' + menus
  fs.writeFileSync(`${__dirname}/${fileName}`, data)
}

console.log(createGuideReadme())
