import {Component, OnInit} from "@angular/core";
import {Party} from "../../party/model/party";
import {Observable} from "rxjs";
import {Store} from "@ngrx/store";
import * as fromRoot from "../../party/reducers";
import * as party from "../../party/actions/party";
import {Router} from "@angular/router";


@Component({
  selector: 'app-homescreen',
  templateUrl: 'homescreen.html',
  styleUrls: ['homescreen.css']
})
export class HomescreenComponent implements OnInit {
  parties$: Observable<Party[]>;
  searchText$: Observable<string>;

  constructor(private store: Store<fromRoot.PartyState>, private router: Router) {
  }

  ngOnInit() {
    this.searchText$ = this.store.select(fromRoot.getSearchQuery);
    this.searchText$.subscribe(searchQuery => {
      if (searchQuery == "") {
        this.store.dispatch(new party.SearchAction(searchQuery));
      }
    });
    this.parties$ = this.store.select(fromRoot.getSearchResults);
  }

  handleSearchText(searchText: string) {
    this.store.dispatch(new party.SearchAction(searchText));
  }

  handleSelectedParty(selectedParty: Party): void {
    this.store.dispatch(new party.SelectAction(selectedParty.id));
    this.router.navigate(['/party', selectedParty.id]);
  }
}
