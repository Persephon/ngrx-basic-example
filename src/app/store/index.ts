import { ActionReducerMap } from "@ngrx/store";
import { ShoppingListState, shoppingListReducer } from "./shopping-list.reducer";

export const rootReducer = {};

export interface AppState {
    shoppingList: ShoppingListState;
};

export const reducers: ActionReducerMap<AppState, any> = {
    shoppingList: shoppingListReducer
};