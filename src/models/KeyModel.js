import { forEach } from 'lodash'
import { observable, action } from 'mobx';

export default class KeyModel {
  @observable name = ''
  @observable position = []
  @observable topLabel = ''
  @observable bottomLabel = ''
  @observable isThumb = false

  @action update = (data) => forEach(data, (val, key) => this[key] = val)

  constructor (data) {
    this.update(data);
  }
}
