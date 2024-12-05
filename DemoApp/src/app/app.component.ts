import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormControl, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { Observable } from 'rxjs';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { RecipeDetailsComponent } from './components/recipe-details/recipe-details.component';
import { RecipesListComponent } from "./components/recipes-list/recipes-list.component";
import { RecipeService } from './services/recipe.service';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    RecipesListComponent,
    RecipeDetailsComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp';
  readonly dialog = inject(MatDialog);

  searchNameControl: FormControl = new FormControl('')
  searchIngredientControl: FormControl = new FormControl('')

  ingredientsObs: Observable<string[]>

  constructor(private recipeService: RecipeService) {
    this.ingredientsObs = this.recipeService.getIngredientsObs()
  }

  ngOnInit() {
    this.searchNameControl.valueChanges.subscribe(x => this.recipeService.onSearchNameChange(x))
    this.searchIngredientControl.valueChanges.subscribe(x => this.recipeService.onSearchIngredientChange(x))
  }

  openDialog() {
    const dialogRef = this.dialog.open(NewRecipeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  cleanSearchInput() {
    this.searchNameControl.setValue("")
  }


}
