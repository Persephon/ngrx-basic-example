import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredientsObservable: Observable<{ingredients: Array<Ingredient>}>= this.store.select('shoppingList');

  constructor(
    private store: Store<{shoppingList: {ingredients: Array<Ingredient>}}>
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }
}
