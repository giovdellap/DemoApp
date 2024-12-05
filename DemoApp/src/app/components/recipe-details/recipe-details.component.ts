import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Observable } from 'rxjs';
import { Recipe } from '../../model/recipe';
import { CustomDateFormatPipe } from '../../pipes/custom-date-format.pipe';
import { RecipeService } from '../../services/recipe.service';

@Component({
  selector: 'app-recipe-details',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    CustomDateFormatPipe
  ],
  templateUrl: './recipe-details.component.html',
  styleUrl: './recipe-details.component.css'
})
export class RecipeDetailsComponent {

  showDetailsObs: Observable<boolean>
  currentRecipeObs: Observable<Recipe>

  constructor(private recipeService: RecipeService) {
    this.showDetailsObs = this.recipeService.getShowDetailsObs()
    this.currentRecipeObs = this.recipeService.getSelectedRecipeObs()
  }




}
