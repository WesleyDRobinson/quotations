// a [].map() callback
export default (filter, index, array) => {
  filter.class = 'pa2 pa3-ns w4 f6 f5-ns'

  return wire(filter)`<button 
  class=${filter.class} 
  onclick=${filter.onclick} 
  data-subject=${filter.subject}>${filter.text}</button>`
}
