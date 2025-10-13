class ExternalLink extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const href = this.getAttribute("href");
    if (!href) {
      console.error('ExternalLink component requires an "href" attribute.');
      return;
    }

    const link = document.createElement("a");
    link.href = href;
    link.target = "_blank";
    link.rel = "noreferrer";
    link.classList.add("external-link");

    // Move the original content from <external-link> into the new <a> tag.
    while (this.firstChild) {
      link.appendChild(this.firstChild);
    }

    this.replaceWith(link);
  }
}

customElements.define("external-link", ExternalLink);
