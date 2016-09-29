import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe'
@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Dummy','Dummy','http://guides.global/images/guides/global/dummy_web_page.jpg',[]),
    new Recipe('Dummy2','Dummy2','http://guides.global/images/guides/global/dummy_web_page.jpg',[])
  ];
  @Output() recipeSelected = new EventEmitter<Recipe>();
  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe: Recipe) {
    this.recipeSelected.emit(recipe);
  }
}