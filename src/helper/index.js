import { isNumberLike, isEmpty, isUrl } from '@/helper/validate'

export const addZero = (num) => {
  num = Number(Number(num))
  if (num < 10) {
    num = '0' + num
  }
  return String(num)
}

export const filterObject = (obj = {}, transformNum = false) => {
  const params = {}
  for (const key in obj) {
    let data = obj[key]
    if (!isEmpty(data)) {
      if (typeof data === 'string') { data = data.trim() }
      if (transformNum && isNumberLike(data)) {
        data = Number(data)
      }
      params[key] = data
    }
  }
  return params
}

// 路由参数过滤
export const filterParams = (query = {}) => {
  const data = filterObject(query, true)
  for (const key in data) {
    query[key] = data[key]
  }
  return query
}

// 参数对象转参数字符串
export const stringifyParams = (obj = {}, strict = true) => {
  const arr = []
  let str = ''
  if (strict) {
    obj = filterObject(obj)
  } else {
    obj = filterParams(obj)
  }
  for (const key in obj) {
    let data = obj[key]
    if (getType(data) === 'array') {
      data = data.join(',')
    }
    if (!strict || !isEmpty(data)) {
      arr.push(`${key}=${data}`)
    }
  }
  str = arr.join('&')
  if (str.length > 0) {
    str = '?' + str
  }
  return str
}

// 链接转参数对象
export const parseParams = (str = window.location.href) => {
  const params = {}
  const arr = str.split('?')
  const query = arr[1]
  if (!query) { return params }
  const paramsArr = query.split('&')
  paramsArr.forEach((item) => {
    const arrs = item.split('=')
    params[arrs[0]] = arrs[1]
  })
  return params
}

// 追加链接参数
export const putParams = (url = '', putParams = {}) => {
  const oldParams = parseParams(url)
  const path = url.split('?')[0]
  // 去除原有参数
  for (const key in putParams) {
    delete oldParams[key]
  }
  const oldParamsStr = stringifyParams(oldParams)
  let putParamsStr = stringifyParams(putParams, false)
  if (oldParamsStr.includes('?')) {
    putParamsStr = putParamsStr.replace('?', '&')
  }
  return path + oldParamsStr + putParamsStr
}

// 合并链接
export const getFullUrl = (...urls) => {
  urls.slice(1).forEach((value, index) => {
    if (isUrl(value)) {
      urls.slice(0, index + 1).forEach((v, k) => {
        urls[k] = ''
      })
    }
  })
  const arr = urls
    .filter(v => !!v)
    .map(v => v.replace(/\/$/, '').replace(/^\//, ''))
  return arr.join('/')
}

export const getType = (item) => {
  const str = Object.prototype.toString.call(item)
  return str.substring(8, str.length - 1).toLocaleLowerCase()
}

export const random = (n, m) => {
  return Math.floor(Math.random() * (m - n + 1) + n)
}

const stringTemplate = '1234567890qwertyuiopasdfghjklzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM'
export const randomString = (length = 6) => {
  let str = ''
  for (let i = 0; i < length; i++) {
    str += stringTemplate[random(0, stringTemplate.length - 1)]
  }
  return str
}

// 深度拷贝
export const deepEachObjClone = (obj) => {
  const type = getType(obj)
  let temp = obj
  if (typeof obj === 'object') {
    if (type === 'array') {
      temp = []
      obj.map((item, i) => temp.push(deepEachObjClone(item)))
    } else if (type === 'object') {
      temp = {}
      for (const _name in obj) {
        // 忽略掉原型链上的属性
        // eslint-disable-next-line no-prototype-builtins
        if (obj.hasOwnProperty(_name)) {
          temp[_name] = deepEachObjClone(obj[_name])
        }
      }
    }
  } else {
    return temp
  }
  return temp
}

// 获取指定目录的js内容
export const getFileModule = (files) => {
  const modules = {}
  files.keys().forEach((key) => {
    modules[key.replace(/(\.\/|\.js)/g, '')] = files(key).default
  })
  return modules
}

// 将base64转换为file
export const base64ToFile = (dataurl) => {
  const base64Prefix = 'data:image/png;base64,'
  if (!/^data:image\/.+;base64,/.test(dataurl)) {
    dataurl = base64Prefix + dataurl
  }
  const arr = dataurl.split(',')
  const mime = arr[0].match(/:(.*?);/)[1]
  const suffix = String(mime).replace('image/', '')
  const filename = randomString(16) + '.' + suffix
  const bstr = atob(arr[1])
  let n = bstr.length
  const u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  const file = new File([u8arr], filename, {
    type: mime
  })
  return file
}

// file转base64
export const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = (e) => {
      resolve(reader.result)
    }
    reader.onerror = error => reject(error)
  })
}

// 字符串隐藏
export const concealStr = (str = '', firstLength = 3, lastLength = 4) => {
  if (!str || str.length <= firstLength + lastLength) {
    return str
  }
  const reg = new RegExp(`^([\\d\\w]{${firstLength}})[\\d\\w]+([\\d\\w]{${lastLength}})$`, 'g')
  const repeatStr = '*'.repeat(str.length - firstLength - lastLength)
  return String(str).trim().replace(reg, `$1${repeatStr}$2`)
}
