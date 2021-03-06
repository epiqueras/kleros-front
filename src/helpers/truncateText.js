export const truncateText = (address, digits) => {
  if (!address) return
  if (address.length <= digits) return address

  return address.substring(0, digits) + '...'
}
