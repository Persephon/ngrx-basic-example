import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.model';
import { Store } from '@ngrx/store';
import * as ShoppingListActions from '../store/shopping-list.actions';

@Component({
  selector: 'app-shopping-list-form',
  templateUrl: './shopping-list-form.component.html',
  styleUrls: ['./shopping-list-form.component.scss']
})
export class ShoppingListFormComponent {

  constructor (private store: Store<{ingredients: Array<Ingredient>}>) {}

  onSubmit(form: NgForm) {
    const value = form.value;
    const newIngredient = new Ingredient(value.name, value.amount);

    this.store.dispatch(new ShoppingListActions.AddIngredient(newIngredient));
    form.reset();
  }

}
