import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { of } from 'rxjs';
import { Community } from 'src/app/models/enums/location.enum';
import { StandModel } from 'src/app/models/stand-model';
import { fakeStands } from 'src/app/search-page/search-results/stands/mockStands';

@Injectable({
  providedIn: 'root',
})
export class DatabaseService {
  // stands BehaviorSubject
  private readonly _stands = new BehaviorSubject<StandModel[]>([]);
  private readonly _filters = new BehaviorSubject<string[]>(['none']);
  //
  readonly stands$ = this._stands.asObservable();

  // goes out to state
  get stands(): StandModel[] {
    return this._stands.getValue();
  }

  constructor() {}

  pushToObservable(vals: StandModel[]): void {
    this._stands.next(vals);
  }

  getAllStandLocations(): Observable<string[]> {
    // this.pushToObservable(fakeStands);

    // filter array of objects and return surbubs
    let suburbs: string[] = fakeStands.map((stand) => stand.suburb);
    // filter suburbs and get unique subarbs
    let uniqueSubarbs: string[] = [...new Set(suburbs)].splice(0, 5);

    return of(uniqueSubarbs);
  }

  // Pushes searched stands into _satnds BehaviourSubject
  searchStandsFromSurbab(surbab: string): void {
    // change to using a pipe to filter stands
    console.log(surbab);
    let filteredStands = fakeStands.filter((stand) =>
      stand.suburb.includes(surbab)
    );
    this.pushToObservable(filteredStands);
  }

  sortStands(sortType: String): Observable<StandModel[]> {
    if (sortType === 'price') {
      return of(
        fakeStands.sort((stand1, stand2) =>
          stand1.price < stand2.price ? -1 : 1
        )
      );
    } else {
      return of(fakeStands);
    }
  }

  filterStands(fPriceLow: number, fPriceHi: number): Observable<StandModel[]> {
    return of(
      fakeStands.filter(
        (stand) => stand.price > fPriceLow && stand.price < fPriceHi
      )
    );
  }

  filterWithCommunitytype(communityType: Community): void {
    let myStands$ = of(fakeStands);
    myStands$
      .pipe
      // filter:
      ();
  }
}

// export class TodosStoreService {

//   // - We set the initial state in BehaviorSubject's constructor
//   // - Nobody outside the Store should have access to the BehaviorSubject
//   //   because it has the write rights
//   // - Writing to state should be handled by specialized Store methods (ex: addTodo, removeTodo, etc)
//   // - Create one BehaviorSubject per store entity, for example if you have TodoGroups
//   //   create a new BehaviorSubject for it, as well as the observable$, and getters/setters
//   private readonly _todos = new BehaviorSubject<[]>([]);

//   // Expose the observable$ part of the _todos subject (read only stream)
//   readonly todos$ = this._todos.asObservable();

//   // the getter will return the last value emitted in _todos subject
//   get todos(): [] {
//     return this._todos.getValue();
//   }

//   // assigning a value to this.todos will push it onto the observable
//   // and down to all of its subsribers (ex: this.todos = [])
//   set todos(val: []) {
//     this._todos.next(val);
//   }

//   addTodo(title: string) {
//     // we assaign a new copy of todos by adding a new todo to it
//     // with automatically assigned ID ( don't do this at home, use uuid() )
//     this.todos = [
//       ...this.todos,

//     ];
//   }

// }
