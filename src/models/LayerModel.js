import { observable, action } from 'mobx'

export default class LayerModel {
  @observable rows = []
  @action setRows = (rows) => this.rows = rows

  constructor (rows) {
    this.setRows(rows);
  }
}
