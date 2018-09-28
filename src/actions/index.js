const representativeAction = (type, data = {}, key = "") => ({
  type: type,
  data,
  key
})
export default representativeAction
