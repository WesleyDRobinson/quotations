// [].map() callback
const { wire } = hyperHTML

export default function mapQuotations(quotation, index, array) {
  quotation.style = `order: ${quotation.order || index + 100};`
  quotation.render += ` mt0`
  quotation.slug = quotation.text.slice(0, 21).replace(/ /g, '-').toLowerCase()
  quotation.rootClass = 'cf w-100 measure mv3 pa3 br2 near-black bg-near-white shadow-2 avenir lh-copy'
  quotation.sourceClass = 'fl mv0 i ttu f6 black-70'
  quotation.authorClass = 'fr mv0 pr3 dark-blue'

  return wire(quotation)` 
<div id=${quotation.slug} class=${quotation.rootClass} style=${quotation.style}>
  <p class=${quotation.render}>${quotation.text}</p>
  <p class=${quotation.sourceClass}>
    ${quotation.source}
    <span class="f7">${quotation.sourceDetail ? ` ${quotation.sourceDetail}` : ''}</span>
  </p>
  <p class=${quotation.authorClass}>${quotation.author}</p>
</div>`
}
