import { map, reduce, forEach, find, assign, cloneDeep } from 'lodash'
import { observable, action, computed, toJS } from 'mobx'

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
          key = this.reify(assign(cloneDeep(key), rest))
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

    if (!key) {
      console.error('Error looking up key:', symbol)
    }

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

  dumpRows = () => JSON.stringify(toJS(this.rows), null, 2)
}

export default new LayoutService()
