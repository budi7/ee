/*
  array : [
    {
      key: ...
      label: ...
    }
  ]

*/


export default {
  fromInput (array, value) {
    if (!array || !value) { 
      console.error('unable select data: input not found')
      return
    }

    const tmp = array.filter(dt => {
      return dt.label === value
    })
    return tmp[0].key
  },
  toInput (payload) {
    console.log(payload)
  }
}