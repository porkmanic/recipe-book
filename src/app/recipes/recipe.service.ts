import { Injectable } from '@angular/core';
import { Recipe } from './recipe'
import { Ingredient } from '../shared/ingredient'

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Dummy','Dummy','http://guides.global/images/guides/global/dummy_web_page.jpg',[
      new Ingredient('French Fries',2),
      new Ingredient('Pork',1)
    ]),
    new Recipe('Dummy2','Dummy2','http://guides.global/images/guides/global/dummy_web_page.jpg',[])
  ];
  constructor() { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }
  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }
}
