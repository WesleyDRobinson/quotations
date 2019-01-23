import mapQuotations from './callbacks/mapQuotations'

const { bind } = hyperHTML

export default function renderCards(
  cards = window.__globalState.quotations,
  containerId = 'card-container') {
  const half = cards.length / 2
  const firstHalf = cards.slice(0, half).map(mapQuotations)
  const secondHalf = cards.slice(half).map(mapQuotations)
  bind(document.getElementById(containerId))`
<article class="cf">
  <div class="fl w-100 w-50-l">
    ${firstHalf}
  </div>
  <div class="fl w-100 w-50-l">
    ${secondHalf}
  </div>
</article>`
}
