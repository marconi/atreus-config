import { observable, action } from 'mobx'

export default class LayerModel {
  @observable name
  @action setName = (name) => this.name = name

  @observable rows = []
  @action setRows = (rows) => this.rows = rows

  constructor (name, rows) {
    this.setName(name);
    this.setRows(rows);
  }
}
