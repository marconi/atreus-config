import { map } from 'lodash'
import { observable, action } from 'mobx'

import rows from './keys'
import { KeyModel } from '../models'
import keyCodes from './keyCodes'

export class LayoutService {
  @observable rows = []
  @action setRows = (rows) => this.rows = rows

  @observable keyCodes = []
  @action setKeyCodes = (keyCodes) => this.keyCodes = keyCodes

  constructor () {
    this.init()
  }

  init = () => {
    this.setRows(map(rows, (keys) => map(keys, this.reify)))
    this.setKeyCodes(map(keyCodes, (codes, groupName) => {
      return {
        label: groupName,
        options: map(codes, ({ symbol, description }) => ({
          value: symbol,
          label: description,
        })),
      }
    }))
  }

  reify = (data) => new KeyModel(data)
}

export default new LayoutService()
