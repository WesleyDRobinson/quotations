((dom) => {
  const main = dom.querySelector('main')
  main.state = main.state || {}
  main.state.quotations = [
    {
      subjects: ['marriage'],
      text: 'There is no more lovely, friendly and charming relationship, communion or company than a good marriage.',
      author: 'Martin Luther',
      source: 'Table Talk',
      sourceDetail: '292',
    },
    {
      subjects: ['marriage', "women's empowerment", 'life'],
      text: 'Let women then go on—not asking for favors, but claiming as a right the removal of all hindrances to their elevation in the scale of being—let her receive encouragement for the proper cultivation of all her powers, so that she may enter profitably into the active business of life ... Then in the marriage union, the independence of the husband and wife will be equal, their dependence mutual, and their obligation reciprocal.',
      author: 'Lucretia [Coffin] Mott',
      source: 'Discourse on Women',
      sourceDetail: '[delivered December 17, 1849], last paragraph',
    },
    {
      subjects: ['marriage', 'eyes'],
      text: 'Keep your eyes wide open before marriage, half shut afterwards.',
      author: 'Benjamin Franklin',
      source: 'Poor Richards Almanac',
      sourceDetail: 'June',
    },
    {
      subjects: ['marriage', "women's empowerment", 'life'],
      text: 'Marriage, to women as to men, must be a luxuruy, not a necessity; an incident of life, not all of it. And the only possible way to accomplish this great change is to accord to women equal power in the making, shaping and controlling of the circumstances of life.',
      author: 'Susan B Anthony',
      source: 'Speech on Social Purity',
      sourceDetail: '[Spring 1875]',
    },
    {
      subjects: ['marriage', 'love'],
      text: `Let me not to the marriage of true minds
Admit impediments. Love is not love
Which alters when it alteration finds,
Or bends with the remover to remove:
O, no! it is an ever-fixed mark,
That looks on tempests and is never shaken;
It is the star to every wandering bark,
Whose worth's unknown, although his height be taken.
Love's not Time's fool, those rosy lips and cheeks
Within his bending sickle's compass come;
Love alters not with his brief hours and weeks,
But bears it out even to the edge of doom.
If this be error, and upon me prov'd,
I never writ, nor no man ever lov'd.`,
      author: 'Shakespeare',
      source: 'Sonnet 116',
      sourceDetail: '',
      render: 'pre',
      order: 1,
    }, {
      subjects: ['marriage', "women's empowerment", 'life'],
      text: 'Marriage is the only actual bondage known to our law. There remain no legal slave, except the mistress of every house.',
      author: 'John Stuart Mill',
      source: 'The Subjection of Women',
      sourceDetail: '4',
    },
    {
      subjects: ['marriage', 'union'],
      text: 'Marriage resembles a pair of shears, so joined that they can not be separated; often moving in opposite direction, yet always punishing anyone who comes between them.',
      author: 'Sydney Smith',
      source: 'Lady Hollands Memoirs',
      sourceDetail: 'I, 11',
    },
    {
      subjects: ['marriage', 'choice', 'life'],
      text: 'Life does not give itself to one who tries to keep all its advantages at once... morality may perhaps consist solely in the courage of making a choice.',
      author: 'Léon Blum',
      source: 'On Marriage',
      sourceDetail: '',
    },
    {
      subjects: ['marriage'],
      text: 'I married beneath me. All women do.',
      author: 'Nancy Astor',
      source: 'Attributed',
      sourceDetail: '',
    },
    {
      subjects: ['marriage', 'eternity'],
      text: 'The sum which two married people owe to one another defied calculation. It is an infinite debt, which can only be discharged through all eternity.',
      author: 'Johann Wolfgang von Goethe',
      source: 'Elective Affinities',
      sourceDetail: 'I, 9',
    },
  ]
})(document)
