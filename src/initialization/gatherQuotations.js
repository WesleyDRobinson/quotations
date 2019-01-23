import { showLoader, hideLoader } from '../components/loaders.js'
import list from "../lib/aws/list"

export default async function gatherQuotations() {
  let quotations
  try {
    showLoader()
    quotations = await list("quotations")
  } catch (e) {
    console.error(e)
  }

  __globalState.quotations = quotations || []
  hideLoader()
}
