import { TicketManager } from "./ticketManager.js";
import { DatabaseService } from "./databaseService.js";
import { EmailService } from "./emailService.js";

const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.on("buy", (email, price, timestamp) => {
  emailService.send(email);
  databaseService.save(email, price, timestamp);
});

ticketManager.on("error", (email, price, timestamp) => {
  console.error("Gracefuly handled the error");
});

ticketManager.buy("test1@email.com", 10);
ticketManager.buy("test2@email.com", 10);
ticketManager.buy("test3@email.com", 10);
ticketManager.buy("test4@email.com", 10);
