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
  var addContactButton = $("#addContact");
  addContactButton.on('click', addContact);

  var resetFieldsButton = $("#resetFields");
  resetFieldsButton.on('click', resetFields);

  var searchButton = $("#search");
  searchButton.on('click', search);

  var colorButton = $("#backgroundColor");
  colorButton.on('click', color);
}

function color()
{
  $("body").css({'background-color': 'red'});
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
  $("#FirstName").val("");
  $("#LastName").val("");
  $("#Phone").val("");
  $("#email").val("");
}

function addContact()
{
  var aContact = createContact();

  contacts.push(aContact);

  var tBody = $("#tBody");
  var lastRow = $("#lastRow");

  var tr = $("<tr></tr>");
  var tdFirstName = $("<td></td>");
  var tdLastName = $("<td></td>");
  var tdPhone = $("<td></td>");
  var tdEmail = $("<td></td>");
  var tdAction1 = $("<td></td>");
  var tdAction2 = $("<td></td>");
  var deleteButton = $("<button></button>");
  var modifyButton = $("<button></button>");

  deleteButton.on('click', function()
  {
    tr.remove();
    contacts.remove(aContact);
  });

  modifyButton.on('click', function()
  {
    var newFirstName = prompt("Insert new First Name");
    var newLastName = prompt("Insert new Last Name");
    var newPhone = prompt("Insert new Phone");
    var newEmail = prompt("Insert new E-mail");

    if( newFirstName != "" && newFirstName != null )
      tdFirstName.text(newFirstName);
    if( newLastName != "" && newLastName != null )
      tdLastName.text(newLastName);
    if( newPhone != "" && newPhone != null )
      tdPhone.text(newPhone);
    if( newEmail != "" && newEmail.includes("@") && newEmail != null )
      tdEmail.textContent(newEmail);
  });

  tdAction1.append(deleteButton);
  tdAction2.append(modifyButton);

  tdFirstName.text(aContact.firstName);
  tdLastName.text(aContact.lastName);
  tdPhone.text(aContact.phone);
  tdEmail.text(aContact.email);
  deleteButton.text("Delete Contact");
  modifyButton.text("Modify Contact");

  tr.append(tdFirstName);
  tr.append(tdLastName);
  tr.append(tdPhone);
  tr.append(tdEmail);
  tr.append(tdAction1);
  tr.append(tdAction2);

  if( tdFirstName.text() != "" && tdLastName.text() != "" && tdPhone.text() != "" && tdEmail.text() != "")
    lastRow.before(tr);
}

function createContact()
{
  var firstName = $("#FirstName").val();
  var lastName = $("#LastName").val();
  var phone = $("#Phone").val();
  var email = $("#email").val();
  var contact = new Contact( firstName, lastName, phone, email );
  return contact;
}

$(document).ready(init);
