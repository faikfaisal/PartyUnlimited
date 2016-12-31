import {Party} from "../../party/model/party";
/**
 * Created by T897060 on 28/12/2016.
 */
export class GuestListModel {
  numberOfGuests: number;
  party: Party;

  public toString(): string {
    return `Number of guests=${this.numberOfGuests}
          ${this.party}`;
  }

}
