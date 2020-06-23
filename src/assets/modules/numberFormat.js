export function formatNumber (value) {
  if (!value) { return 0 }
  const val = (value / 1).toFixed(0).replace('.', ',')
  return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')
}
export function formatCardNumber (value) {
  if (!value) { return 0 }
  return value.toString().replace(/\B(?=(\d{4})+(?!\d))/g, '-')
}
export function formatPrice (value) {
  if (!value) { return 'IDR 0' }
  const tmp = value.toString().split('.')
  const val = (tmp[0] / 1).toFixed(0).replace('.', ',')
  return 'IDR ' + val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') + 
  (tmp[1] ? ',' + tmp[1] : '')

}
export function formatFlatNumber (value) {
  if (!value) { return 0 }
  return value.split('.').join('')
}
