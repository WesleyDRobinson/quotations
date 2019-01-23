import renderCards from '../renderCards'

export default function filterCards({ target }) {
  const subject = target.getAttribute('data-subject')
  const { quotations } = window.__globalState
  const filteredQuotations = quotations
    .filter(quotation => quotation.subjects.includes(subject))
  const cards = subject === 'all' ? quotations : filteredQuotations
  renderCards(cards)
}
