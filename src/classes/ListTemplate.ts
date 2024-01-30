import { HasFormatter } from "../interfaces/HasFormatter.js";

export class ListTemplate {
  constructor(private container: HTMLUListElement) {}

  render(item: HasFormatter, heading: string, pos: "start" | "end") {
    const li = document.createElement("li");
    li.innerHTML = `<h4>${heading}</h4><p>${item.format()}</p>`;

    pos === "start" ? this.container.prepend(li) : this.container.append(li);
  }
}
