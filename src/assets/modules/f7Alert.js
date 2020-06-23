export default {
  show (payload) {
    const colorEnum  = (val) => {
      let rslt
      switch (val) {
      case 'error':
        rslt = 'bg-color-red'
        break
      case 'success':
        rslt = 'bg-color-green'
        break          
      default:
        rslt = 'bg-color-yellow'
        break
      }
      return rslt
    }

    const _t = payload.vm.$f7.toast.create({
      cssClass: colorEnum(payload.type),
      text: payload.text,
      position: 'top',
      closeTimeout: payload.autoClose ? 2500 : null
    })
    _t.open()
  }
}