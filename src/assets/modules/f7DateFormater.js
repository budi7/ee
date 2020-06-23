export default {
  fromInput (payload) {
    if (!payload) {
      console.error('unable parse date: input not found')
      return
    } 

    var arr=[]
    for (var i=0;i<payload.length;i++){
      var d=new Date(payload[i])
      d.setDate(d.getDate()+1)
      arr.push(d.toISOString().slice(0,10))
    }
    return arr
  },
  toInput (payload) {
    console.log(payload)
    if (!payload) {
      console.error('unable parse date: input not found')
      return
    } 

    // from y-m-d
    const tmp = payload.split('-')

    let now =  new Date(tmp[0],(parseInt(tmp[1] - parseInt(1))),tmp[2])
    return`${now.getUTCFullYear()}-${(now.getUTCMonth()+1).toString().padStart(2, '0')}-${now.getUTCDate().toString().padStart(2, '0')} ${now.getUTCHours().toString().padStart(2, '0')}:${now.getUTCMinutes().toString().padStart(2, '0')}:${now.getUTCSeconds().toString().padStart(2, '0')}`

  }
}