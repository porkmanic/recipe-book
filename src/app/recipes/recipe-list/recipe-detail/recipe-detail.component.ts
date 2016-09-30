import { RecipeService } from './../../recipe.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router'
import { Recipe } from '../../recipe';
import { ShoppingListService } from '../../../shopping-list/shopping-list.service'
import { Subscription } from 'rxjs/Rx'
@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit, OnDestroy {

  private subscription: Subscription;
  private recipeIndex: number;
  selectedRecipe: Recipe;
  constructor(private sls: ShoppingListService, 
              private route: ActivatedRoute, 
              private recipesService: RecipeService,
              private router: Router) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      params => {
        this.recipeIndex = params['id'];
        this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
      }
    )
  }

  onAddToShoppingList() {
    this.sls.addItem(this.selectedRecipe.ingredients);
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  onEdit() {
    this.router.navigate(['/recipes',this.recipeIndex, 'edit']);
  }

  onDelete() {
    this.recipesService.deleteRecipe(this.selectedRecipe);
    this.router.navigate(['/recipes']);
  }
}
