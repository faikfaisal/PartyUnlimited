import {Injectable} from '@angular/core';
import {Party, Address, Venue} from "../model/party";
import {Observable} from 'rxjs/Rx';

@Injectable()
export class PartyService {

  constructor() {
  }

  private getMockParties(): Party[] {

    let address = new Address("490 Glenelm crescent", "ON", "Kitchener", "N2L 5C8", "A");
    let trist = new Venue("Trist", address);


    let party = new Party("1", "Color festival", trist, "Playing with color", new Date('1968-11-16T00:00:00'));
    let partyOne = new Party("2", "semi festival", trist, "some festival", new Date('1968-11-16T00:00:00'));
    let partyTwo = new Party("3", "yello festival", trist, "yellow with coor", new Date('1968-11-16T00:00:00'));
    let partyThree = new Party("4", "Oshiega festival", trist, "Oshiyega with coor", new Date('1968-11-16T00:00:00'));


    let list_of_parties: Party[] = [
      party,
      partyOne,
      partyTwo,
      partyThree
    ];

    return list_of_parties;
  }

  getParties(): Observable<Party[]> {

    return Observable.of(this.getMockParties());
  }

  searchParty(query: string): Observable<Party[]> {

    if (query == "") {
      return this.getParties();
    }

    return this.getParties().map(
      parties => parties.filter(
        party => party.name.toLowerCase().includes(query)
      )
    );
  }
}
