import { FlightsTower } from "./flight-tower";

async function main() {
  const tower = new FlightsTower();
  await tower.createFlights();
  console.log(`Total flights created: ${tower.flightsCount}`);
  console.log(`Unique destiations: ${tower.flightsDestinations}`);

  tower.departAllFlights();
}

main();
