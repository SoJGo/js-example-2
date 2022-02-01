class View {
  constructor() {
    this.mainContainerEl = document.querySelector('#main-container');

    console.log(this.mainContainerEl);
  }

  addParagraph(text) {
    let p = document.createElement("p");
    p.innerText = text;
    this.mainContainerEl.append(p);
  }
}

module.exports = View;