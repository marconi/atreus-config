import { forEach } from 'lodash'
import { observable, action } from 'mobx'

export default class KeyModel {
  @observable symbol = null
  @observable position = []
  @observable topLabel = null
  @observable bottomLabel = null
  @observable description = null
  @observable isThumb = false

  @action update = (data) => forEach(data, (val, key) => this[key] = val)

  constructor (data) {
    this.update(data);
  }
}
