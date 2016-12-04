function Contact( firstName, lastName, phone, email )
{
  this.firstName = firstName;
  this.lastName = lastName;
  this.phone = phone;
  this.email = email;
}

var contacts = [];

function init()
{
  var addContactButton = document.getElementById("addContact");
  addContactButton.addEventListener('click', addContact);
}

function addContact()
{
  var aContact = createContact();

  contacts.push(aContact);

  var tBody = document.getElementById("tBody");
  var lastRow = document.getElementById("lastRow");

  var tr = document.createElement("tr");
  var tdFirstName = document.createElement("td");
  var tdLastName = document.createElement("td");
  var tdPhone = document.createElement("td");
  var tdEmail = document.createElement("td");

  tdFirstName.textContent = aContact.firstName;
  tdLastName.textContent = aContact.lastName;
  tdPhone.textContent = aContact.phone;
  tdEmail.textContent = aContact.email;

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdPhone);
  tr.appendChild(tdEmail);

  tBody.insertBefore(tr, lastRow);
}

function createContact()
{
  var firstName = document.getElementById("FirstName").value;
  var lastName = document.getElementById("LastName").value;
  var phone = document.getElementById("Phone").value;
  var email = document.getElementById("email").value;
  var contact = new Contact( firstName, lastName, phone, email );
  return contact;
}

window.addEventListener('load', init);
