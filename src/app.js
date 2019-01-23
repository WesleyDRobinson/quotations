import makeState from './makeState'
import gatherQuotations from './gatherQuotations'
import renderCards from './renderCards'
import addFilters from './addFilters'

async function startApp() {
  makeState()
  await gatherQuotations()
  renderCards()
  addFilters()
}

window.addEventListener('load', startApp)
