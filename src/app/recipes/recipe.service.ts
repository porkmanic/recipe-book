import {Injectable, EventEmitter} from "@angular/core";
import {Recipe} from "./recipe";
import {Ingredient} from "../shared/ingredient";
import {Headers, Http, Response} from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class RecipeService {
  recipesChange = new EventEmitter<Recipe[]>();
  private recipes: Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'http://i.stack.imgur.com/STEuc.png', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork', 1)
    ]),
    new Recipe('Dummy2', 'Dummy2', 'http://i.stack.imgur.com/STEuc.png', [])
  ];

  constructor(private http: Http) {
  }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  storeDate() {
    const body = JSON.stringify(this.recipes);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });
    return this.http.put('https://haoboliu-18de6.firebaseio.com/recipes.json',body,{headers:headers});
  }

  fetchDate() {
    return this.http.get('https://haoboliu-18de6.firebaseio.com/recipes.json')
      .map((response: Response) => response.json())
      .subscribe(
        (data: Recipe[]) => {
          this.recipes = data;
          this.recipesChange.emit(this.recipes);
        }
      );
  }
}
