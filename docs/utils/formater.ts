export const replaceInvalidCharter = (str: string) => {
  const regex = /&/g
  return str.replace(regex, '-')
}
