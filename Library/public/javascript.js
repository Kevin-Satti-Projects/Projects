function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  if (read == true) {
    this.read = "Yes";
  } else {
    this.read = "No";
  }
  this.info = function () {
    console.log(
      title + " by " + author + ", " + pages + " pages, " + read + "."
    );
  };
}

function showForm() {
  let block1 = document.createElement("div");
  block1.className = "block";
  let block2 = document.createElement("div");
  block2.className = "block";
  let block3 = document.createElement("div");
  block3.className = "block";
  let block4 = document.createElement("div");
  block4.className = "block";
  let block5 = document.createElement("div");
  block5.className = "block";
  let block6 = document.createElement("div");
  block6.className = "block";
  let block7 = document.createElement("div");
  block7.className = "block";
  let block8 = document.createElement("div");
  block8.className = "block8";
  let exitText = document.createTextNode("X");
  let exit = document.createElement("button");
  let form = document.createElement("div");
  let submit = document.createElement("button");
  let submitText = document.createTextNode("submit");
  submit.id = "submitButton";
  let titleText = document.createTextNode("Title");
  titleText.className = "formText";
  let title = document.createElement("INPUT");
  title.className = "formInput";
  title.required = true;
  let authorText = document.createTextNode("Author");
  authorText.className = "formText";
  let author = document.createElement("INPUT");
  author.className = "formInput";
  author.required = true;
  let pagesText = document.createTextNode("Pages");
  pagesText.className = "formText";
  let pages = document.createElement("INPUT");
  pages.className = "formInput";
  pages.type = "number";
  let readText = document.createTextNode("Read?");
  readText.className = "readText";
  let read = document.createElement("INPUT");
  read.setAttribute("type", "checkbox");
  read.className = "readInput";
  exit.appendChild(exitText);
  submit.appendChild(submitText);
  form.appendChild(exit);
  form.appendChild(block8);
  form.appendChild(titleText);
  form.appendChild(block5);
  form.appendChild(title);
  form.appendChild(block1);
  form.appendChild(authorText);
  form.appendChild(block6);
  form.appendChild(author);
  form.appendChild(block2);
  form.appendChild(pagesText);
  form.appendChild(block7);
  form.appendChild(pages);
  form.appendChild(block3);
  form.appendChild(readText);
  form.appendChild(read);
  form.appendChild(block4);
  form.appendChild(submit);

  form.className = "form";
  document.body.appendChild(form);
  exit.addEventListener("click", function removeForm() {
    document.body.removeChild(form);
  });
  submit.addEventListener("click", function addBookToLibrary() {
    if (title.checkValidity() === false) {
      alert("Please enter a title!");
    }
    if (author.checkValidity() === false) {
      alert("Please enter an author!");
    }
    console.log(pages);
    if (pages.checkValidity() === false || pages.value === "") {
      alert("Please enter a number of pages!");
    }
    if (
      title.checkValidity() === true &&
      author.checkValidity() === true &&
      pages.checkValidity() === true &&
      pages.value !== ""
    ) {
      let book = new Book(title.value, author.value, pages.value, read.checked);
      let tableRef = document.getElementById("table");
      let newRow = tableRef.insertRow();
      let newTitle = newRow.insertCell(0);
      let newAuthor = newRow.insertCell(1);
      let newPages = newRow.insertCell(2);
      let newRead = newRow.insertCell(3);
      let newRemove = newRow.insertCell(4);
      let newTitleText = document.createTextNode(book.title);
      let newAuthorText = document.createTextNode(book.author);
      let newPagesText = document.createTextNode(book.pages);
      let newReadText = document.createTextNode(book.read);
      let link = document.createElement("a");
      let trashImage = document.createElement("img");
      trashImage.src = "Images/index.png";
      trashImage.alt = "Remove Book";
      trashImage.id = String(newRow.rowIndex);
      trashImage.addEventListener("click", function removeBookFromLibrary() {
        let ID = trashImage.id;
        document.getElementById("table").deleteRow(trashImage.id);
        for (
          let i = ID;
          i <= document.getElementById("table").rows.length;
          i++
        ) {
          if (document.getElementById(i) !== null) {
            document.getElementById(i).id = i - 1;
          }
        }
      });
      link.appendChild(trashImage);
      newTitle.appendChild(newTitleText);
      newAuthor.appendChild(newAuthorText);
      newPages.appendChild(newPagesText);
      newRead.appendChild(newReadText);
      newRemove.appendChild(link);
    }
  });
}

document.getElementById("newBookButton").addEventListener("click", showForm);
document
  .getElementById("removeHobbit")
  .addEventListener("click", function removeHobbitFromLibrary() {
    document.getElementById("table").deleteRow(1);
    for (let i = 1; i <= document.getElementById("table").rows.length; i++) {
      if (document.getElementById(i) !== null) {
        document.getElementById(i).id = i - 1;
      }
    }
  });
