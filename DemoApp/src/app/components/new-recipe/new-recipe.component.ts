import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Ingredient, Recipe } from '../../model/recipe';
import { RecipeService } from '../../services/recipe.service';


@Component({
  selector: 'app-new-recipe',
  standalone: true,
  imports: [
    MatInputModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    CommonModule,
    MatButtonModule
  ],
  templateUrl: './new-recipe.component.html',
  styleUrl: './new-recipe.component.css'
})
export class NewRecipeComponent {

  readonly dialogRef = inject(MatDialogRef<NewRecipeComponent>);


  titleControl: FormControl = new FormControl('')
  ingredientControl: FormControl = new FormControl('')
  quantityControl: FormControl = new FormControl('')
  procedureControl: FormControl = new FormControl('')

  ingredients: Ingredient[] = []


  constructor(private recipeService: RecipeService) {
    this.dialogRef.updateSize('500px')
  }

  addIngredient() {
    if(this.ingredientControl.value !== "" && this.quantityControl.value !== "") {
      let ingredient: Ingredient = {
        name: this.ingredientControl.value,
        quantity: this.quantityControl.value
      }
      this.ingredients.push(ingredient)
      this.ingredientControl.setValue("")
      this.quantityControl.setValue("")
    }
  }

  deleteIngredient(ingredient: Ingredient) {
    this.ingredients = this.ingredients.filter(ingr => ingr !== ingredient)
  }

  addRecipe() {
    let recipe: Recipe = {
      id: 0,
      name: this.titleControl.value,
      date: new Date(),
      ingredients: this.ingredients,
      procedure: this.procedureControl.value
    }
    this.recipeService.addRecipe(recipe)
    this.dialogRef.close()
  }

  closeDialog() {
    this.dialogRef.close()
  }





}
