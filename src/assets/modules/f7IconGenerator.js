/*
    how to use?
    pass an object with class & name on its cild 


    example : {
        class: "material or f7 ",
        name: "your icon name"
    }

    detail: https://framework7.io/vue/icon.html
*/

export default function(_payload) {
  if (!_payload) { 
    console.error('unable generate icon: icon not found')
    return
  }

  return {
    [`${_payload.class}`]: _payload.name
  }
}