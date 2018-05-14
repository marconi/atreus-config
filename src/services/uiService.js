import { observable, action } from 'mobx'
import { get, assign } from 'lodash'

export class UIService {
  @observable keyboard = null
  @action setKeyboard = (keyboard) => this.keyboard = keyboard

  @observable showKeyDialogAt = {
    position: [],
    coordinates: {
      top: null,
      left: null,
    },
  }
  @action setShowKeyDialogAt = (position, coordinates) => {
    assign(this.showKeyDialogAt, { position, coordinates })
  }

  isShowingKeyDialogAt = ([ x, y ]) => {
    if (!this.showKeyDialogAt.position.length) {
      return false
    }

    const xx = get(this.showKeyDialogAt, 'position[0]')
    const yy = get(this.showKeyDialogAt, 'position[1]')
    return xx === x && yy === y
  }
}

export default new UIService()
