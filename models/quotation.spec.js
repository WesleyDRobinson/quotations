define("quotation", () => {
  it('has the "right" shape', t => {
    const rightShape = {
      author: string("who wrote or said or is attributed?"),
      source: string("where it came from"),
      subjects: array(of(string("what's it about?"))),
      text: string("the quotation"),
      sourceDetail: string("extra info about the source"),
      order: number("order to render"),
      render: string("css information")
    }

    t.deepEqual(quotation, rightShape)
  })
})
