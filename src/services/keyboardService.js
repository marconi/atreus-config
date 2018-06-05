import { map, forEach, find, assign } from 'lodash'
import { observable, action, computed, toJS } from 'mobx'

import defaultLayout from './defaultLayout'
import { KeyModel } from '../models'
import keyCodes from './keyCodes.json'
import LayerModel from '../models/LayerModel';

export class keyboardService {
  @observable layers = []
  @action addLayer = (layer) => this.layers.push(layer)

  @observable keyCodes = []
  @action setKeyCodes = (keyCodes) => this.keyCodes = keyCodes

  constructor () {
    this.init()
  }

  init = () => {
    this.setKeyCodes(keyCodes)

    // init default layout
    const rows = map(defaultLayout, (row, i) => {
      return map(row, ({ symbol, ...rest }) => {
        let key = this.getKeyCodeBySymbol(symbol)
        if (key) {
          key = this.reify(assign({}, key, rest))
        }
        return key
      })
    })
    this.addLayer(new LayerModel('Layer 0', rows))
  }

  getKeyCodeBySymbol = (symbol) => {
    let keyCode = null
    forEach(this.keyCodes, (keyCodes) => {
      keyCode = find(keyCodes, { symbol }) || null
      if (keyCode) {
        return false
      }
    })

    if (!keyCode) {
      console.error('Error looking up key code:', symbol)
    }

    return keyCode
  }

  @computed get keyCodesOptions () {
    return map(this.keyCodes, (keyCodes, groupName) => {
      return {
        label: groupName,
        options: map(keyCodes, ({ symbol, description }) => ({
          value: symbol,
          label: description,
        })),
      }
    })
  }

  getLayer = (layerNum) => (this.layers.length > layerNum) ? this.layers[layerNum] : null

  reify = (data) => new KeyModel(data)

  dumpRows = () => JSON.stringify(toJS(this.layers), null, 2)
}

export default new keyboardService()
