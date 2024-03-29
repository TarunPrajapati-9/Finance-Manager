import { Invoice } from "./classes/Invoice.js";
import { ListTemplate } from "./classes/ListTemplate.js";
import { Payment } from "./classes/Payment.js";
const form = document.querySelector(".new-item-form");
// Inputs
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector("ul");
const list = new ListTemplate(ul);
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, details.value, amount.valueAsNumber];
    let doc;
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
