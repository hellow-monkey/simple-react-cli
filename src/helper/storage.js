import { isJsonString } from '@/helper/validate'

const s = window.sessionStorage
const l = window.localStorage

const fn = (storage = s) => {
  return {
    get (key) {
      let data = storage.getItem(key)
      if (isJsonString(data)) {
        data = JSON.parse(data)
      }
      return data
    },
    set (key, value) {
      if (typeof value === 'object') {
        value = JSON.stringify(value)
      }
      storage.setItem(key, value)
    },
    append (key, value, mergeKey = null) {
      let data = this.get(key)
      if (Array.isArray(data)) {
        if (mergeKey) {
          data.forEach((item, k) => {
            if (item[mergeKey] === value[mergeKey]) {
              data.splice(k, 1)
            }
          })
        }
        data.unshift(value)
      } else {
        data = [value]
      }
      this.set(key, data)
    },
    has (key, id, val) {
      const data = this.get(key)
      if (Array.isArray(data)) {
        return data.filter(item => item[id] === val).length > 0
      }
      return false
    },
    remove (key) {
      storage.removeItem(key)
    },
    clear () {
      storage.clear()
    }
  }
}

export default fn()

export const sessionStorage = fn(s)
export const localStorage = fn(l)
