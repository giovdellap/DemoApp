import { Injectable } from '@angular/core';
import { Recipe } from '../model/recipe';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  recipes: Recipe[] = []
  recipesBS: BehaviorSubject<Recipe[]> = new BehaviorSubject(this.recipes)

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe)
    this.recipesBS.next(this.recipes)
  }

  getRecipes() {
    return this.recipes
  }

  getObservable() {
    return this.recipesBS.asObservable()
  }

  getRecipe(id: number) {
    return this.recipes.find(elem => elem.id === id)
  }
}
