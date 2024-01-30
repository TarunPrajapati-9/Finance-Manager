export class ListTemplate {
    constructor(container) {
        this.container = container;
    }
    render(item, heading, pos) {
        const li = document.createElement("li");
        li.innerHTML = `<h4>${heading}</h4><p>${item.format()}</p>`;
        pos === "start" ? this.container.prepend(li) : this.container.append(li);
    }
}
