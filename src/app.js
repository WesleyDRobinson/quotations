import makeState from './initialization/makeState'
import gatherQuotations from './initialization/gatherQuotations'
import renderCards from './lib/renderCards'
import addFilters from './initialization/addFilters'

async function startApp() {
  makeState()
  await gatherQuotations()
  renderCards()
  addFilters()
}

window.addEventListener('load', startApp)
