import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";

const form = document.querySelector(".new-item-form") as HTMLFormElement;

// Inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let values: [string, string, number];
  values = [tofrom.value, details.value, amount.valueAsNumber];

  let doc: HasFormatter;
  //first way
  // type.value === "invoice"
  //   ? (doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber))
  //   : (doc = new Payment(tofrom.value, details.value, amount.valueAsNumber));

  //second way
  type.value === "invoice"
    ? (doc = new Invoice(...values))
    : (doc = new Payment(...values));

  list.render(doc, type.value, "end");
});
