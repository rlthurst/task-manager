class bulletEditorPage extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement('template');

    template.innerHTML = `
          <style>
          /* Add styling to the whole page */
          * {
              background-color: rgb(255, 255, 255); /* make the background white */
          }
          /* Add styling to h1 elements */
          h1 {
            color: navy; /* make all h1 elements navy colored */
            margin: auto;
            width: 300px;
            text-align: center;
            padding-bottom: 40px;
            padding-top: 40px;
          }
          
          /* Add styling to form element */
          form {
            text-align: center;
            width: 100%;
            flex: 1;
          }
          /* Add styling to main element */
          main{
              display: flex;
              flex-direction: row;
          }
          /* Add styling to input elements */
          input{
            margin-top: 10px;
            margin-bottom: 10px;
            background-color: white;
          }
          /* Add styling to select input fields */
          select{
            margin-top: 10px;
            margin-bottom: 10px;
            background-color: white;
          }
          /* Add styling to the submit button */
          input[type=submit]{
            background-color: red;
          }
          /* Add styling to the reset button */ 
          input[type=reset]{
            background-color: red;
          }
          /* Add styling to the dropdown options */ 
          option{
            background-color: white;
          }
          /* Add styling to the star option */ 
          p{
            /*font-size: 30;*/
            font: larger;
          }
          
          /* Styling for star checkbox */
          .star {
            visibility:hidden;
            font-size:25px;
            cursor:pointer;
          }
          /* The Modal (background) */
          .modal {
            display: block; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            padding-top: 100px; /* Location of the box */
            left: 0;
            top: 0;
            width: 100%; /* Full width */
            height: 100%; /* Full height */
            overflow: auto; /* Enable scroll if needed */
            background-color: rgb(0,0,0); /* Fallback color */
            background-color: rgba(0,0,0,0.4); /* Black w/ opacity */
          }
          
          /* Modal Content */
          .modal-content {
            background-color: #fefefe;
            margin: auto;
            padding: auto;
            border: 2px solid #888;
            width: 50%;
          }
          
          /* The Close Button */
          .close {
            color: #aaaaaa;
            padding-right: 20px;
            float: right;
            font-size: 28px;
            font-weight: bold;
          }
          
          .close:hover,
          .close:focus {
            color: #000;
            text-decoration: none;
            cursor: pointer;
          }
          </style>
          <!-- The Modal -->
          <div id="myModal" class="modal">
          
            <!-- Modal content -->
            <div class="modal-content">
              <span class="close">&times;</span>    
              <div class="modal-header">
                <h1 class="modal-title">Bullet Editor</h4>
              </div>
                  <form onsubmit="return false">
              
                    <input type="checkbox" id="name_check_box" name="name_check_box">
                    <label for="name">Name:</label>
                    <input type="text" id="name" name="name"><br>
                    <label for="category">Category:</label>
                    <select id="category" name="category">
                      <option value="Category1">Category1</option>
                      <option value="Category2">Category2</option>
                      <option value="Category3">Category3</option>
                      <option value="Category4">Category4</option>
                    </select><br>
              
                    <label for="type">Type of Item:</label>
                    <select id="type" name="type">
                      <option value="note">Note</option>
                      <option value="event">Event</option>
                      <option value="task">Task</option>
                    </select><br>
              
                    <label for="dueDate">Due Date:</label>
                    <input type="date" id="dueDate" name="dueDate"><br>
              
                    <!-- Star Checkbox -->
                    <input class="star" type="checkbox" title="important_task">
              
                    <label for="description">Description:</label>
                    <input type="text" id="description" name="description"><br>
              
                    <input type="submit" value="Confirm" id="bulletSubmit">
                    <input type="reset" id="reset_btn">
                  </form>
              
                <!-- Main Script -->
                <script src="script.js" type="module"></script>
              
            </div>
          
          </div>
          `;
    this.attachShadow({ mode: 'open' })
    this.shadowRoot.appendChild(template.content.cloneNode(true))

  }
  // Store old values in data-old attribute, if editor opened from edit button
  // This is needed if editor is closed w/o submitting
  get old(){
    if(!this.shadowRoot.getElementById("name_check_box").dataset.old){
      return null;
    }
    let bulletForm = {
      'description': this.shadowRoot.getElementById("description").dataset.old,
      'title': this.shadowRoot.getElementById("name").dataset.old,
      'category': this.shadowRoot.getElementById("category").dataset.old,
      'type': this.shadowRoot.getElementById("type").dataset.old,
      'date': this.shadowRoot.getElementById("dueDate").dataset.old,
      'checked': this.shadowRoot.getElementById("name_check_box").dataset.old,
    };
    return bulletForm;
  }

  set old(inputBullet){
    this.shadowRoot.getElementById("description").dataset.old = inputBullet.description;
    this.shadowRoot.getElementById("name").dataset.old = inputBullet.title;
    this.shadowRoot.getElementById("category").dataset.old = inputBullet.category;
    this.shadowRoot.getElementById("type").dataset.old = inputBullet.type;
    this.shadowRoot.getElementById("dueDate").dataset.old = inputBullet.date;
    this.shadowRoot.getElementById("name_check_box").dataset.old = inputBullet.checked;
  }

  get bullet(){
    let bulletForm = {
      'description': this.shadowRoot.getElementById("description").value,
      'title': this.shadowRoot.getElementById("name").value,
      'category': this.shadowRoot.getElementById("category").value,
      'type': this.shadowRoot.getElementById("type").value,
      'date': this.shadowRoot.getElementById("dueDate").value,
      'checked': this.shadowRoot.getElementById("name_check_box").checked,
    };
    return bulletForm;
  }

  set bullet(inputBullet){
    this.shadowRoot.getElementById("description").value = inputBullet.description;
    this.shadowRoot.getElementById("name").value = inputBullet.title;
    this.shadowRoot.getElementById("category").value = inputBullet.category;
    this.shadowRoot.getElementById("type").value = inputBullet.type;
    this.shadowRoot.getElementById("dueDate").value = inputBullet.date;
    this.shadowRoot.getElementById("name_check_box").checked = inputBullet.checked;
  }


}

customElements.define('bullet-editor-page', bulletEditorPage);

/**
 * JSON Format:
 * image and audio will only sometimes be there
 *
 * {
 *   title: 'foo',
 *   date: 'foo',
 *   content: 'foo',
 *   image: {
 *     src: 'foo.com/bar.jpg',
 *     alt: 'foo'
 *   },
 *   audio: 'foo.com/bar.mp3'
 * }
 */
