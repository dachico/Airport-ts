import dayjs from "dayjs";
import { EventEmitter } from "events";

/* Just some practice - IGNORE
const myEmitter = new EventEmitter(); // object of the event class
myEmitter.on("TEST-EVENT", () => {
  console.log("The test event was fired");
}); // the callback function will be executed when we emit this event
myEmitter.emit("TEST-EVENT"); // emit function responsible to emit a practicular event identifed by a name */

// Extend the Flight class with event emitter to allow it to handle events
export class Flight extends EventEmitter {
  private number: number;
  private origin: string;
  private destination: string;
  private departed?: string;
  private landed?: string;

  constructor(number: number, origin: string, destination: string) {
    super(); // calling super() to get access to the methods and properties of EVentEmitter, the super() function calls the constructor of the parent function which in this case is EventEmitter
    this.number = number;
    this.origin = origin;
    this.destination = destination;
  }

  get fNumber(): number {
    return this.number;
  }

  set fNumber(v: number) {
    this.number = v;
  }

  get fOrigin(): string {
    return this.origin;
  }

  set fOrigin(v: string) {
    this.origin = v;
  }

  get fDestination(): string {
    return this.destination;
  }

  set fDestination(v: string) {
    this.destination = v;
  }

  get fDeparted(): string | undefined {
    return this.departed;
  }

  get fLanded(): string | undefined {
    return this.landed;
  }

  depart() {
    this.departed = dayjs().format("YYYY-MM-DD HH:mm:ss");
    setTimeout(() => this.land(), Math.random() * 4000 + 1000);
  }

  private land() {
    this.landed = dayjs().format("YYYY-MM-DD HH:mm:ss");
    this.emit("landed", {
      number: this.number,
      origin: this.origin,
      destination: this.destination,
      departed: this.departed,
      landed: this.landed,
    });
  }
}

// let f = new Flight(5, "test", "tasty");
// console.log(f);
