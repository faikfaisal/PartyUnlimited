export class Address {
  constructor(public street: string,
              public province: string, public city: string,
              public postalCode: string, public apartment?: string, public country = "Canada") {
  }

  public toString() {
    return `${this.street}, ${this.city}, ${this.province}, ${this.postalCode}, ${this.country}`;
  }
}

export class Venue {
  constructor(public name: string, public address: Address) {
  }

  public toString() {
    return `${this.name}, ${this.address}`;
  }
}
export class Party {
  constructor(public id: string, public name: string, public venue: Venue, public description: string,
              public dateTime: Date) {
  }
}

// export interface Party {
//   id: string;
//   name: string;
//   venue: {
//     name: string;
//     address: {
//       street: string;
//       province: string;
//       city: string;
//       postalCode: string;
//       apartment?: string;
//       country: "Canada",
//     }
//   };
// }
