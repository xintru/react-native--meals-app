class Category {
  constructor(id: number, title: string, color: string) {
    this.id = id
    this.title = title
    this.color = color
  }

  readonly id: number
  readonly title: string
  readonly color: string
}

export default Category
