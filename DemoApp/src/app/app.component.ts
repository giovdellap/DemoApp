import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { RouterOutlet } from '@angular/router';
import { NewRecipeComponent } from './components/new-recipe/new-recipe.component';
import { RecipesListComponent } from "./components/recipes-list/recipes-list.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MatButtonModule,
    RecipesListComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'DemoApp';
  readonly dialog = inject(MatDialog);


  openDialog() {
    const dialogRef = this.dialog.open(NewRecipeComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }


}
