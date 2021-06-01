class DateEntry extends HTMLElement {
  constructor() {
    super();
    const template = document.createElement("template");

    template.innerHTML = `
          <style>
            .date {
                display: grid;
                align-items: center;
                height: 3em;
                font-size: 1.3em;
                background-color: rgba(167, 200, 220, 0.925);
                border-radius: 0.5em;
                margin: 0.3rem;
                text-align: center;
            }
            
            .date:hover {
                display: grid;
                align-items: center;
                height: 3em;
                font-size: 1.3em;
                background-color: rgba(123, 151, 169, 0.925) !important;
                border-radius: 0.5em;
                margin: 0.3rem;
                text-align: center;
            }
            .active{
                display:none ;
            }


          </style>
          <section class="date-entry">
            <div class="date-inner-entry">
                <div class="date">Time</div>
                <div class="active">false</div>
            </div>
          </section>
          `;

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /**
   * Set the date information
   */
  set date(date) {
    this.shadowRoot.querySelector(".date").innerText = date;
    this.shadowRoot.querySelector(".active").innerText = "false";

  }

  /**
   * Get the date information
   */
  get date() {
    return this.shadowRoot.querySelector(".date").innerText;
  }

  /**
   * Checks if active is set to true or false
   */
  get checkActive() {
    if (this.shadowRoot.querySelector(".active").innerText == "true") {
      return true;
    } else {
      return false;
    }
  }

  /**
   * Toggle the active of date
   */
  set active(active) {
    if (active) {
      this.shadowRoot.querySelector(".date").style.backgroundColor =
        "rgba(60, 77, 87, 0.925)";
      this.shadowRoot.querySelector(".active").innerText = "true";
    } else {
      this.shadowRoot.querySelector(".date").style.backgroundColor =
        "rgba(167, 200, 220, 0.925)";
      this.shadowRoot.querySelector(".active").innerHTML = "false";
    }
  }
}

customElements.define("date-entry", DateEntry);