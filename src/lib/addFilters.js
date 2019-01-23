import filterCards from './filterCards'

const { bind, wire } = hyperHTML

const addFilters = function addFilters() {
  const subjects = [
    'all',
    'life',
    'love',
    'marriage',
  ]
  const filters = subjects.map(subject => ({
    onclick: filterCards,
    subject,
    text: subject.toUpperCase(),
  }))
  bind(document.getElementById("card-filter"))`${filters.map(
    filter => wire(filter)`<button class="pa2 pa3-ns w4 f6 f5-ns" onclick=${filter.onclick} data-subject=${filter.subject}>${filter.text}</button>`
  )}`
}

export default addFilters
