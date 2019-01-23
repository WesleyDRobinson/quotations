import filterCards from "./eventHandlers/filterCards"

export default subject => ({
  onclick: filterCards,
  subject,
  text: subject.toUpperCase(),
})
