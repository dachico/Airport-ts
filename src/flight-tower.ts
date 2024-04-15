import { Flight } from "./flight";

export class FlightsTower {
  private flights: Flight[] = [];
  private destinations: string[] = [];

  get flightsCount(): number {
    return this.flights.length;
  }

  get flightsDestinations(): string[] {
    let uniqueDestinations: string[] = [];
    for (let destination of this.destinations) {
      if (!uniqueDestinations.includes(destination)) {
        uniqueDestinations.push(destination);
      }
    }
    return uniqueDestinations;
  }

  async createFlights() {
    let url = "https://api.npoint.io/a4429717c3b5df271ab1";
    const res = await fetch(url);
    const data = await res.json();

    data.flights.forEach(
      (data: { number: number; origin: string; destination: string }) => {
        const flight = new Flight(data.number, data.origin, data.destination);
        this.flights.push(flight);
        if (!this.destinations.includes(data.destination)) {
          this.destinations.push(data.destination);
        }
        flight.on("landed", (type: any) => {
          console.log(
            `Flight landed: Number=${type.number} Origin=${type.origin} Destination=${type.destination} Departed at=${type.departed} Landed at=${type.landed}`
          );
        });
        // console.log(
        //   `Flight created: Number=${data.number}, Origin: ${data.origin}, Destination: ${data.destination}`
        // );
      }
    );
  }

  departAllFlights() {
    this.flights.forEach((flight) => flight.depart());
  }
}
