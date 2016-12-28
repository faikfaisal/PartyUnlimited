import {Injectable} from '@angular/core';
import {PartyService} from "../../party/service/party.service";
import {Party} from "../../party/model/party";

@Injectable()
export class PartySearchService {
  parties: Party[];

  constructor() {
  }

  searchByName(term: string, partyService: PartyService): Party[] {
    const parties = partyService.getParties();
    parties.subscribe(party => this.parties = party);
    var filteredParties = this.parties.filter(party => party.name.includes(term));

    return filteredParties;
  }

}
