import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, catchError, switchMap, tap } from 'rxjs/operators';
import { ItemService } from '../services/item.service';
import { ItemAction, SAVE_ITEM, ADDED_ITEM, UPDATED_ITEM, LOAD_ITEMS, LOADED_ITEMS, REMOVE_ITEM, REMOVED_ITEM, LOAD_ITEM, LOADED_ITEM, SET_ERROR } from './actions/item.actions';

// the actual response to the component dispatch as vue actions
@Injectable()
export class AppEffects {

  loadItems$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_ITEMS),
      switchMap((action) => //a kind of filter : only wants data in pipe regarding loading items
        this.itemService.realQuery().pipe(
          map((items) => ({ // this is the finale data on loadItems$ observable pipe , that will go back to reducer that will update the store
            type: LOADED_ITEMS,
            items,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      )
    );
  });
  loadItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(LOAD_ITEM),
      tap(() => console.log('Effects: load item ==> service')),
      switchMap((action) =>
        this.itemService.getById(action.itemId,action.itemId).pipe(
          tap(() => console.log('Effects: Got item from service ===> Reducer')),
          map((item) => ({
            type: LOADED_ITEM,
            item
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  });
  removeItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(REMOVE_ITEM),
      switchMap((action) =>
        this.itemService.remove(action.itemId,action.itemId).pipe(
          tap(() => console.log('Effects: Item removed by service ===> Reducer')),
          map(() => ({
            type: REMOVED_ITEM,
            itemId: action.itemId,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })
        )
      ),
    );
  })
  saveItem$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(SAVE_ITEM),
      switchMap((action) =>
        this.itemService.save(action.item).pipe(
          tap(() => console.log('Effects: Item saved by service, inform the ===> Reducer')),
          map((savedItem) => ({
            type: (action.item.id) ? UPDATED_ITEM : ADDED_ITEM,
            item: savedItem,
          })),
          catchError((error) => {
            console.log('Effect: Caught error ===> Reducer', error)
            return of({
              type: SET_ERROR,
              error: error.toString(),
            })
          })

        )
      )
    );
  })
  constructor(
    private actions$: Actions<ItemAction>,
    private itemService: ItemService
  ) { }
}
