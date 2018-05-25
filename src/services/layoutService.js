import { map } from 'lodash'
import { observable, action } from 'mobx'

import rows from './keys'
import { KeyModel } from '../models'

export class LayoutService {
  @observable rows = []
  @action setRows = (rows) => this.rows = rows

  constructor () {
    this.init()
  }

  init = () => {
    this.setRows(map(rows, (keys) => map(keys, this.reify)))
  }

  reify = (data) => new KeyModel(data)
}

export default new LayoutService()
