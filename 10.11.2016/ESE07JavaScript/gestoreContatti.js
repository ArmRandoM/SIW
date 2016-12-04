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

  var resetFieldsButton = document.getElementById("resetFields");
  resetFieldsButton.addEventListener('click', resetFields);
}

function resetFields()
{
  document.getElementById("FirstName").value = " ";
  document.getElementById("LastName").value = " ";
  document.getElementById("Phone").value = " ";
  document.getElementById("email").value = " ";
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
  var tdAction = document.createElement("td");
  var deleteButton = document.createElement("button");

  deleteButton.addEventListener('click', function()
  {
    tBody.removeChild(tr);
  });

  tdAction.appendChild(deleteButton);

  tdFirstName.textContent = aContact.firstName;
  tdLastName.textContent = aContact.lastName;
  tdPhone.textContent = aContact.phone;
  tdEmail.textContent = aContact.email;
  deleteButton.textContent = "DeleteContact";

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdPhone);
  tr.appendChild(tdEmail);
  tr.appendChild(tdAction);

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
