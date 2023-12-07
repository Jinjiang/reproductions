
export type PlainBeer = {
  name: string;
  type: string;
  price: number;
}

export class Beer {
  constructor(
    /**
     * name of the instance
     */
    readonly name: string,

    /**
     * type of the beer
     */
    readonly type: string,

    /**
     * price for a single bottle.
     */
    readonly price: number,
  ) {}

  /**
   * serialize a Beer into
   * a serializable object.
   */
  toObject() {
    return {
      name: this.name,
      type: this.type,
      price: this.price
    };
  }

  /**
   * create a Beer object from a 
   * plain object.
   */
  static from(plainBeer: PlainBeer) {
    return new Beer(
      plainBeer.name,
      plainBeer.type,
      plainBeer.price
    );
  }
}
