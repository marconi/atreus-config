import { observable, action } from 'mobx'
import { get, assign } from 'lodash'

export class UIService {
  @observable keyboard = null
  @action setKeyboard = (keyboard) => this.keyboard = keyboard

  @observable showKeyDialogAt = {
    keyModel: null,
    coordinates: {
      top: null,
      left: null,
    },
  }
  @action setShowKeyDialogAt = (keyModel, coordinates) => {
    assign(this.showKeyDialogAt, { keyModel, coordinates })
  }

  @observable activeLayer = 0
  @action setActiveLayer = (layer) => this.activeLayer = layer

  isShowingKeyDialogAt = ([ x, y ]) => {
    if (!this.showKeyDialogAt.keyModel) {
      return false
    }

    const xx = get(this.showKeyDialogAt.keyModel, 'position[0]')
    const yy = get(this.showKeyDialogAt.keyModel, 'position[1]')
    return xx === x && yy === y
  }
}

export default new UIService()
