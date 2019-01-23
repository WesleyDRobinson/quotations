const { wire } = hyperHTML
const main = document.querySelector('main')
const div = wire()`
<div class="absolute top-0 right-0 bottom-0 left-0 flex justify-center items-center">
  <div class="br-100 bg-green b--green h3 w3 animated fadeOut zoomIn infinite"></div> 
</div>
`
export const showLoader = function showLoader() {
  main.classList.add('relative', 'vh-100')
  main.appendChild(div)
}

export const hideLoader = function hideLoader() {
  main.classList.remove('relative', 'vh-100')
  div.remove()
}
