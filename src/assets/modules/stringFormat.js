export function firstWord (value) {
  if (!value) { return '' }
  return value.split(' ')[0]
}
export function fromUnderscore (value) {
  if (!value) { return '' }
  return value.replace(/_/g, ' ')
}