import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';
import { CustomDateFormatPipe } from '../../pipes/custom-date-format.pipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipes-list',
  standalone: true,
  imports: [
    CommonModule,
    MatIconModule,
    MatCardModule,
    MatButtonModule,
    CustomDateFormatPipe
  ],
  templateUrl: './recipes-list.component.html',
  styleUrl: './recipes-list.component.css'
})


export class RecipesListComponent {

  recipesObs: Observable<Recipe[]>
  constructor(private recipeService: RecipeService) {
    this.recipesObs = this.recipeService.getObservable()
  }

  deleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id)
  }

  selectRecipe(recipe: Recipe) {
    console.log('recipe selected')
    this.recipeService.selectRecipe(recipe)
  }

}
