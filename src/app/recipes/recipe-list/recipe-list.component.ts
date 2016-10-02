import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe'
import { RecipeService } from '../recipe.service'
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipeServie: RecipeService) { }

  ngOnInit() {
    this.recipes = this.recipeServie.getRecipes();
    this.recipeServie.recipesChange.subscribe(
      (recipes: Recipe[]) => this.recipes = recipes
    );
  }
}
