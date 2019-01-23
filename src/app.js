import makeState from './lib/makeState'
import gatherQuotations from './lib/gatherQuotations'
import renderCards from './lib/renderCards'
import addFilters from './lib/addFilters'

async function startApp() {
  makeState()
  await gatherQuotations()
  renderCards()
  addFilters()
}

window.addEventListener('load', startApp)
