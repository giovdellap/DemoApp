export class Recipe {
  name: string = ""
  id: number = 0
  date: Date = new Date()
  ingredients: Ingredient[] = []
  procedure: string = ""
}

export class Ingredient {
  name: string = ""
  quantity: string = ""
}
