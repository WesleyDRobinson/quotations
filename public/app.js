window.addEventListener('load', startApp)

function startApp() {
  const main = document.querySelector('main')
  const { bind, wire } = hyperHTML
  const quotationCards = main.state.quotations.map(
    quotation => {
      const style = `order: ${quotation.order};`
      return wire(quotation)`
  <div class="w-100 measure ma3 pa3 br2 near-black bg-near-white shadow-2 avenir lh-copy" style=${style}>
    <p class=${quotation.render}>${quotation.text}</p>
    <p class="fr cf mt0">${quotation.author}</p>
  </div>
`
    }
  )

  bind(main)`
    <div class="pa2 flex flex-column flex-column-reverse justify-center">
      ${quotationCards}
    </div>
  `
}
