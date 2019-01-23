import makeButtons from '../lib/callbacks/makeButtons'
import shapeSubjects from '../lib/shapeSubjects'

const { bind } = hyperHTML

const addFilters = function addFilters(filterContainer) {
  const _container = filterContainer || document.getElementById("card-filter")
  const subjects = [
    'all',
    'life',
    'love',
    'marriage',
  ]
  const filters = subjects.map(shapeSubjects).map(makeButtons)
  bind(_container)`${filters}`
}

export default addFilters
