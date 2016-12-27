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

  var searchButton = document.getElementById("search");
  searchButton.addEventListener('click', search);
}

function search()
{
  var nameToSearch = prompt( "Insert FirstName" );
  var lastNameToSearch = prompt( "Insert LastName" );

  var found = false;
  var contactIndex = 0;

  for( var i = 0; i < contacts.length; i++)
  {
    if( contacts[i].firstName == nameToSearch && contacts[i].lastName == lastNameToSearch )
    {
      found = true;
      contactIndex = i;
    }
  }

  if( found == true )
    alert( "Contact Found!!!" + "\nFirst Name: " + contacts[contactIndex].firstName + "\nLast Name: "
          + contacts[contactIndex].lastName + "\nPhone: " + contacts[contactIndex].phone + "\nE-mail: "
          + contacts[contactIndex].email + "\n");
  else
    alert( "Contact Not Found!" );
}

function resetFields()
{
  document.getElementById("FirstName").value = "";
  document.getElementById("LastName").value = "";
  document.getElementById("Phone").value = "";
  document.getElementById("email").value = "";
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
  var tdAction1 = document.createElement("td");
  var tdAction2 = document.createElement("td");
  var deleteButton = document.createElement("button");
  var modifyButton = document.createElement("button");

  deleteButton.addEventListener('click', function()
  {
    tBody.removeChild(tr);
  });

  modifyButton.addEventListener('click', function()
  {
    var newFirstName = prompt("Insert new First Name");
    var newLastName = prompt("Insert new Last Name");
    var newPhone = prompt("Insert new Phone");
    var newEmail = prompt("Insert new E-mail");

    if( newFirstName != "" && newFirstName != null )
      tdFirstName.textContent = newFirstName;
    if( newLastName != "" && newLastName != null )
      tdLastName.textContent = newLastName;
    if( newPhone != "" && newPhone != null )
      tdPhone.textContent = newPhone;
    if( newEmail != "" && newEmail.includes("@") && newEmail != null )
      tdEmail.textContent = newEmail;
  });

  tdAction1.appendChild(deleteButton);
  tdAction2.appendChild(modifyButton);

  tdFirstName.textContent = aContact.firstName;
  tdLastName.textContent = aContact.lastName;
  tdPhone.textContent = aContact.phone;
  tdEmail.textContent = aContact.email;
  deleteButton.textContent = "DeleteContact";
  modifyButton.textContent = "modifyContact";

  tr.appendChild(tdFirstName);
  tr.appendChild(tdLastName);
  tr.appendChild(tdPhone);
  tr.appendChild(tdEmail);
  tr.appendChild(tdAction1);
  tr.appendChild(tdAction2);

  if( tdFirstName.textContent != "" && tdLastName.textContent != "" && tdPhone.textContent != "" && tdEmail.textContent != "")
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
