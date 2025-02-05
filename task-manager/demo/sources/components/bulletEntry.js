class BulletEntry extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");

    template.innerHTML = `
          <head>
          <link rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.6.3/css/all.css"
            crossorigin="anonymous">
          </head>
          <style>
            @keyframes slide-up {
              0% {
                  opacity: 0;
                  transform: translateY(20px);
              }
              100% {
                  transform: translateY(0);
              }
            }

            @keyframes fade-up {
              0% {
                  opacity: 0;
              }
              100% {
                  opacity: 1;
              }
            }

            .bullet-entry .bullet {
              display: flex;
              align-items: center;
              height: 3em;
              font-size: 1.3em;
              background-color: rgba(167, 200, 220, 0.925);
              border-radius: 0.5em;  
              margin:0.3rem;
              text-align: left;
              padding-left: 0.5rem;
              animation: slide-up 0.4s ease;
              position: relative;
              max-width: 875px;

              vertical-align: middle;
              -webkit-transform: perspective(1px) translateZ(0);
              transform: perspective(1px) translateZ(0);
              box-shadow: 0 0 1px rgba(0, 0, 0, 0);
              -webkit-transition-duration: 0.3s;
              transition-duration: 0.3s;
              -webkit-transition-property: transform;
              transition-property: transform;
            }

            .bullet-entry .bullet:hover{
              -webkit-transform: scale(1.035);
              transform: scale(1.035);
            }

            .bullet-entry .bullet-button {
              display:none;

              border: none;
              margin: 0.5rem;
              line-height: 1rem;
              font-size: 1rem;
              border-radius: 0.5em;  
              padding: 8px;
              background-color: rgb(204, 225, 243);
              

              vertical-align: middle;
              -webkit-transform: perspective(1px) translateZ(0);
              transform: perspective(1px) translateZ(0);
              box-shadow: 0 0 1px rgba(0, 0, 0, 0);
              -webkit-transition-duration: 0.3s;
              transition-duration: 0.3s;
              -webkit-transition-property: transform;
              transition-property: transform;
            }

            .bullet-entry .bullet-button:active {
              box-shadow: 0 5px #336699;
              transform: translateY(4px);
            }

            .bullet-entry .bullet-button:hover {
              background-color: rgb(234, 243, 250);
              filter: brightness(135%);
              -webkit-transform: scale(1.1);
              transform: scale(1.1);
            }
            
            .bullet-entry .title {
              text-align: left;
              height: 25.6px;
              cursor: text;
              padding: 0px 10px;
              max-width: 650px;
              overflow: hidden;
              margin-right: 10px;
            }
            .bullet-entry .des{
              overflow:expand;
              display:none;
              align-items: center;
              height: auto;
              max-width: 825px;
          
              background-color: rgba(167, 200, 220, 0.925);
              font-size: 1em;
              border-radius: 0.5em;  
              margin:0.5rem;
              text-align: left;
              margin-left: 1.5rem;
              padding: 0.5rem;
              opacity: 1;
            }
            .bullet-entry .date{
                display:none;
            }
            .bullet-entry .category{
                display:none;
            }
            .bullet-entry .type{
                display:none;
            }
            .bullet-entry .completedCheck{
                display:none;
            }
            .checkbox {
              -webkit-appearance: none;
              background-color: #fafafa;
              width:15px;
              height:15px;
              padding: 10px;
              margin-left:9px;
              border-radius: 3px;
              display: inline-block;
              position: relative;
            }
            
            .checkbox:checked:after {
              content: "\u2714";
              font-size: 30px;
              position: absolute;
              top: -10px;
              left: 3px;
              color: #0994ff;
              animation: fade-up 0.8s ease;
            }
            
            .check-container{
              width:30px;
              display: flex;
              align-items: center;
              padding-right: 1rem;
            }

            .dot{
              display: flex;
              width:30px;
              align-items: center;
            }

            .dash{
              display: flex;
              width:30px;
              align-items: center;
            }

            #dash-text{
              width:100%;
              padding:15px;
            }

            .down{
              opacity:0;
              position:absolute;
              bottom:0%;
              margin-left:12px;
            }

            .fa-chevron-down{
              color:#727375;
            }

            #dot-text{
              padding:15px;
            }

            .editor{
			        border:solid 1px #ccc;
			        padding: 20px;
			        min-height:200px;
              display: block;
              cursor: text;
              max-width: 800px;
              word-wrap: break-word;
            }
            .sample-toolbar{
			        border:solid 1px #ddd;
			        background:#f4f4f4;
			        padding: 5px;
			        border-radius:3px;
            }

            .bullet:hover #left-buttons > i,
            .bullet:hover #bullet-category,
            .bullet:hover #left-buttons > label,
            .bullet:hover .down{
              opacity:1;
              cursor: pointer;
            }
            .bullet:hover .title {
              border-bottom: outset;
            }

            .bullet:hover {
              cursor: help;
            }

            .sample-toolbar > i{
			        cursor:pointer;
		        }

            .sample-toolbar > i:hover{
              color: #d60e96;
		        }

            #left-buttons {
              display: flex;
              flex-direction: row;
              align-self: flex-end;
              float: right;
              padding-right: 20px;

            }

            #left-buttons > i,
            #left-buttons > label{
              opacity:0;
              padding: 0px 10%;
              color: #585a5c;
              margin-left: auto;
            }
            #left-buttons > i:hover,
            #left-buttons > label:hover,
            #bullet-date:hover + #calender {
              color: #272a3b;
            }
            
            #bullet-category{
              opacity:0;
              appearance: none;
              background-color: #d1d7de;
              border-radius: 8px;

              border: none;
              border-color: coral;
              
              margin-right: 5px;
              padding:1%;

              text-align-last:center;
              direction: rtl;

              font-family: inherit;
              font-size: inherit;
              cursor: inherit;
              line-height: inherit;
              margin-left: auto;
            }

            #bullet-category:hover{
              background-color:#a7b4c2;
            }

            #bullet-category:focus{
              outline: none; 
            }

            input[type="date"]::-webkit-calendar-picker-indicator {
              background: red ;
              color: red ;
              cursor: pointer;
              
              position: absolute;
              right: 0;
              top: 0;
              left: -75%;
              bottom: 0;
              margin:0 auto;
            }

            #calender{
              position: relative !important;
              top: 15%;
            }

            #bullet-date{
              height:0px;
              width:0px;
              z-index:1;
              opacity: 0; 
              pointer-events: auto;
            }
          </style>
          <section class="bullet-entry">
            <div class="bullet">
                <span class="check-container">
                  <input class="checkbox" type="checkbox" id="bullet-check">
                  <div class="down"><i class="fas fa-chevron-down fa-xs"></i></div>
                </span>
                <span class="dash">
                  <div id="dash-text">-</div>
                  <div class="down"><i class="fas fa-chevron-down fa-xs"></i></div>
                </span>
                <span class="dot">
                  <div id="dot-text">&#8226;</div>
                  <div class="down"><i class="fas fa-chevron-down fa-xs"></i></div>
                </span>

                <span class="title" id="bullet-title"
                  onkeydown="if(event.key == 'Enter'){event.preventDefault()}"> 
                </span>
                <select id="bullet-category" name="category">
                  <option value='{"title":"Default","color":"Blue"}'>Default</option>
                </select>

                
                
                <div id="left-buttons">
                  <label for="bullet-date" class="fas fa-calendar" id="calender" style="z-index:0;"><input type="date" id="bullet-date"></label>
                  <i class="fas fa-trash" id ="bullet-delete"></i>
                </div>


                <button class="bullet-button edit-bullet-button">edit</button>
                <button class="bullet-button bullet-detail-button">detail</button>
                <button class="bullet-button bullet-delete-button" id = "bullet-delete">delete</button>

                <span class="type">demo</span>

            </div>
            <div class="des">
            	<div class="sample-toolbar">
                <i class="fas fa-bold fa-fw" onmousedown="event.preventDefault();" onclick="document.execCommand('bold', false);"></i>
                <i class="fas fa-italic fa-fw" onmousedown="event.preventDefault();" onclick="document.execCommand('italic', false);"></i>
                <i class="fas fa-list fa-fw" onmousedown="event.preventDefault();" onclick="document.execCommand('insertunorderedlist', false);"></i>
                <i class="fas fa-save fa-fw" id="detail-save" style="float: right"></i>
              </div>

              <div class="editor" id="detail-editor" ondblclick="this.contentEditable = true;">
	            </div>
            </div>
          </section>
          `;
    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(template.content.cloneNode(true));
  }

  /**
   * Get old detail 
   */
  get oldDetail() {
    return this.shadowRoot.getElementById("detail-editor").dataset.old;
  }

  /**
   * Change the old value of bullet 
   * @param {*} input  - New value of bullet
   */
  set oldDetail(input) {
    this.shadowRoot.getElementById("detail-editor").dataset.old = input;
  }

  /**
   * Return the current bullet information
   */
  get bullet() {
    let entryObj = {
      title: this.shadowRoot.querySelector(".title").innerText,
      checked: this.shadowRoot.querySelector(".checkbox").checked,
      description: this.shadowRoot.querySelector(".editor").innerHTML,
      date: this.shadowRoot.getElementById("bullet-date").value,
      category: this.shadowRoot.getElementById("bullet-category").name,
      type: this.shadowRoot.querySelector(".type").innerText,
    };
    return entryObj;
  }

  /**
   * Set the bullet information
   */
  set bullet(newBullet) {
    this.shadowRoot.querySelector(".title").innerText = newBullet.title;
    this.shadowRoot.querySelector(".checkbox").checked = newBullet.checked;
    this.shadowRoot.querySelector(".editor").innerHTML = newBullet.description;
    this.shadowRoot.getElementById("bullet-date").value = newBullet.date;
    this.shadowRoot.getElementById("bullet-category").name = newBullet.category;
    this.shadowRoot.querySelector(".type").innerText = newBullet.type;

    if (newBullet.category != "Default") {
      let category = JSON.parse(newBullet.category);

      if (category.color == "Red") {
        this.shadowRoot.querySelector(".bullet").style.backgroundColor =
          "rgba(224, 90, 70,0.5)";
        this.shadowRoot.querySelector(".des").style.backgroundColor =
          "rgba(224, 90, 70,0.5)";
      } else if (category.color == "Yellow") {
        this.shadowRoot.querySelector(".bullet").style.backgroundColor =
          "rgba(229, 191, 106,0.5)";
        this.shadowRoot.querySelector(".des").style.backgroundColor =
          "rgba(229, 191, 106,0.5)";
      } else if (category.color == "Blue") {
        this.shadowRoot.querySelector(".bullet").style.backgroundColor =
          "rgba(167, 200, 220,0.925)";
        this.shadowRoot.querySelector(".des").style.backgroundColor =
          "rgba(167, 200, 220,0.925)";
      } else if (category.color == "Orange") {
        this.shadowRoot.querySelector(".bullet").style.backgroundColor =
          "rgba(224, 138, 87,0.5)";
        this.shadowRoot.querySelector(".des").style.backgroundColor =
          "rgba(224, 138, 87,0.5)";
      } else if (category.color == "Green") {
        this.shadowRoot.querySelector(".bullet").style.backgroundColor =
          "rgba(42, 157, 143,0.5)";
        this.shadowRoot.querySelector(".des").style.backgroundColor =
          "rgba(42, 157, 143,0.5)";
      }
    }

    //Set the bullet type and opacity
    this.shadowRoot.querySelector(".bullet").style.opacity = "1";
    this.shadowRoot.querySelector(".des").style.opacity = "1";
    if (newBullet.type == "note") {
      this.shadowRoot.querySelector(".check-container").style.display = "none";
      this.shadowRoot.querySelector(".dash").style.display = "grid";
      this.shadowRoot.querySelector(".dot").style.display = "none";
    } else if (newBullet.type == "task") {
      if (this.shadowRoot.querySelector(".checkbox").checked) {
        this.shadowRoot.querySelector(".bullet").style.opacity = "0.25";
        this.shadowRoot.querySelector(".des").style.opacity = "0.25";
      }
      this.shadowRoot.querySelector(".check-container").style.display = "grid";
      this.shadowRoot.querySelector(".dash").style.display = "none";
      this.shadowRoot.querySelector(".dot").style.display = "none";
    } else {
      this.shadowRoot.querySelector(".dot").style.display = "grid";
      this.shadowRoot.querySelector(".check-container").style.display = "none";
      this.shadowRoot.querySelector(".dash").style.display = "none";
    }
  }

  /**
   * Shortcut to return entry category
   */
  get category() {
    return this.shadowRoot.getElementById("bullet-category").name;
  }

  /**
   * Set the new category 
   */
  set category(newCategory) {
    this.shadowRoot.getElementById("bullet-category").name = newCategory;
  }
  
  /**
   * Set the check box entry
   */
  set checked(flag) {
    this.shadowRoot.querySelector(".checkbox").checked = flag;
  }

  set showCategoryList(flag) {
    if (flag) {
      console.log("Check");
    }
  }

  set categoryList(inputList) {
    let categorySelect = this.shadowRoot.getElementById("bullet-category");
    // Delete all current options
    while (categorySelect.options.length) categorySelect.remove(0);

    // Append default category
    let defaultCategory = document.createElement("option");
    defaultCategory.append(document.createTextNode("Default"));
    defaultCategory.value = '{"title":"Default","color":"Blue"}';
    categorySelect.appendChild(defaultCategory);

    // Append remaining categories
    inputList.forEach(function (item) {
      // create new option element
      let opt = document.createElement("option");

      // create text node to add to option element (opt)
      opt.appendChild(document.createTextNode(item.title));

      // set value property of opt
      opt.value = JSON.stringify({ title: item.title, color: item.color });

      // add opt to end of select box (sel)
      // Skip default
      if (item.title != "Default") {
        categorySelect.appendChild(opt);
      }
    });
    categorySelect.value = categorySelect.name;
  }

  
}


customElements.define("bullet-entry", BulletEntry);
