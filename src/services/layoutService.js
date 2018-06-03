import { map, reduce, forEach, find, assign } from 'lodash'
import { observable, action, computed } from 'mobx'

import defaultKeys from './defaultLayout'
import { KeyModel } from '../models'
import keyCodes from './keyCodes.json'

export class LayoutService {
  @observable rows = []
  @action setRows = (rows) => this.rows = rows

  @observable keyCodes = []
  @action setKeyCodes = (keyCodes) => this.keyCodes = keyCodes

  constructor () {
    this.init()
  }

  init = () => {
    this.initAllKeyCodes()
    this.initDefaultLayout()
  }

  initAllKeyCodes = () => {
    this.setKeyCodes(reduce(keyCodes, (result, codes, groupName) => {
      result[groupName] = map(codes, this.reify)
      return result
    }, {}))
  }

  initDefaultLayout = () => {
    this.setRows(map(defaultKeys, (keys, i) => {
      return map(keys, ({ symbol, ...rest }, j) => {
        let key = this.getKeyCodeBySymbol(symbol)
        if (key) {
          key = assign(key, rest)
        } else {
          console.error('Error looking up default key:', symbol)
        }
        return key
      })
    }))
  }

  getKeyCodeBySymbol = (symbol) => {
    let key = null
    forEach(this.keyCodes, (codes) => {
      key = find(codes, { symbol }) || null
      if (key) {
        return false
      }
    })
    return key
  }

  @computed get keyCodesOptions () {
    return map(this.keyCodes, (codes, groupName) => {
      return {
        label: groupName,
        options: map(codes, ({ symbol, description }) => ({
          value: symbol,
          label: description,
        })),
      }
    })
  }

  reify = (data) => new KeyModel(data)
}

export default new LayoutService()
