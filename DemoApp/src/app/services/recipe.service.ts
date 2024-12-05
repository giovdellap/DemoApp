import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { mockRecipes } from '../data/recipes';
import { Recipe } from '../model/recipe';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  recipes: Recipe[] = []
  recipesBS: BehaviorSubject<Recipe[]> = new BehaviorSubject(this.recipes)

  showDetails: boolean = false
  showDetailsBS: BehaviorSubject<boolean> = new BehaviorSubject(this.showDetails)
  selectedRecipeBS: BehaviorSubject<Recipe> = new BehaviorSubject({} as Recipe)

  searchName: string = ""
  searchIngredient: string = ""

  ingredientsBS: BehaviorSubject<string[]> = new BehaviorSubject<string[]>([])

  constructor() {
    let ls = localStorage.getItem('DemoApp')
    if(ls) {
      this.recipes = JSON.parse(ls)
    }
    else {
      this.recipes = mockRecipes
    }
    this.showRecipes()
    this.ingredientsBS.next(this.getIngredients())
  }

  //RECIPE METHODS

  addRecipe(recipe: Recipe) {
    recipe.id = this.recipes[this.recipes.length -1].id + 1
    this.recipes.push(recipe)
    localStorage.setItem('DemoApp', JSON.stringify(this.recipes))
    this.showRecipes()
    this.ingredientsBS.next(this.getIngredients())
  }

  getRecipes() {
    return this.recipes
  }

  selectRecipe(recipe: Recipe) {
    this.selectedRecipeBS.next(recipe)
    if(!this.showDetails) {
      this.showDetails = true
      this.showDetailsBS.next(this.showDetails)
    }
  }

  getRecipe(id: number) {
    return this.recipes.find(elem => elem.id === id)
  }

  deleteRecipe(id:number) {
    this.recipes = this.recipes.filter(elem => elem.id != id)
    localStorage.setItem('DemoApp', JSON.stringify(this.recipes))
    this.showRecipes()
    this.ingredientsBS.next(this.getIngredients())
  }

  // OBSERVABLE METHODS

  getObservable() {
    return this.recipesBS.asObservable()
  }

  getSelectedRecipeObs() {
    return this.selectedRecipeBS.asObservable()
  }

  getShowDetailsObs() {
    return this.showDetailsBS.asObservable()
  }

  getIngredientsObs() {
    return this.ingredientsBS.asObservable()
  }

  // UTILS

  showRecipes() {
    let selection = this.recipes
    if(this.searchName !== "") {
      selection = selection.filter(elem => elem.name.includes(this.searchName)) 
    }
    if (this.searchIngredient !== "") {
      selection = selection.filter(elem => {
        let toInclude: boolean = false
        for(const ingredient of elem.ingredients) {
          if(ingredient.name === this.searchIngredient) {
            toInclude = true
          }
        }
        return toInclude
      })
    }
    this.recipesBS.next(selection)
  }

  getIngredients() {
    let ingredients: string[] = [""]
    for (const recipe of this.recipes) {
      for (const ingredient of recipe.ingredients) {
        if (!ingredients.includes(ingredient.name)) ingredients.push(ingredient.name)
      }
    }
    return ingredients
  }

  onSearchNameChange(name: string) {
    this.searchName = name
    this.showRecipes()
  }

  onSearchIngredientChange(name: string) {
    this.searchIngredient = name
    this.showRecipes()
  }
}
