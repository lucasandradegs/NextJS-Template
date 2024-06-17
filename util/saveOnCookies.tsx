import Cookies from 'js-cookie'

export const saveToCookie = (cookieName: string, value: string) => {
  Cookies.set(cookieName, value)
}

export const getCookie = (cookieName: string) => {
  if (!Cookies.get(cookieName)) {
    return 'dark'
  }
  return Cookies.get(cookieName)
}

export function saveCookie(value: string, name: string, temp: number) {
  Cookies.set(name, value, { expires: temp }) // 1 dia
}
