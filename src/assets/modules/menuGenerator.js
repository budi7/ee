/*
    example payload: 
        _menu => [ key_menu1, key_menu2 ....]
        _dictionary => [ 
            { key_menu: value },
            ....
        ]
*/

export default function(_menu, _dictionary) {
  if (!_dictionary) { console.error('unable generate menu: dictionary is empty'); return }
  if (!_menu) { console.error('unable generate menu: menu is empty'); return }

  let generatedMenu = {}
  _menu.forEach((dt) => {
    generatedMenu[dt] = _dictionary[dt]
  })

  return generatedMenu
}