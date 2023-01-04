const fs = require('fs').promises; 
const path = require('path')

const {v4} = require('uuid')

const contactsPath = path.join(__dirname, 'db/contacts.json')

///////////////////////////////////////////////////////////////////////

function listContacts() {
  fs.readFile(contactsPath)
  .then(data => {
    const parsedContacts = JSON.parse(data);
    return console.table(parsedContacts)
  })

  .catch(err => console.log(err.message));
}

//////////////////////////////////////////////////////////////////////////

function getContactById(contactId ) {
  fs.readFile(contactsPath)
  .then(data => {
    const parsedContacts = JSON.parse(data);
    const result = parsedContacts.find(item => item.id === String(contactId))
    if (!result){
      return console.log((`Contact with id = ${contactId} not found!`))
    } else{
      return console.log(result)
    }
  })

  .catch(err => console.log(err.message));
}

/////////////////////////////////////////////////////////////////////////////

function removeContact(contactId) {
  fs.readFile(contactsPath)
  .then(data => {
    const parsedContacts = JSON.parse(data);
    const indx = parsedContacts.findIndex(item => item.id === String(contactId))
    if (!indx === -1){
      return console.log("There is no contact with such id")
    } 

    const [removeContact] = parsedContacts.splice(indx,1)
    fs.writeFile(contactsPath, JSON.stringify(parsedContacts))
    return console.log(removeContact)
  })
  .catch(err => console.log(err.message));
}

///////////////////////////////////////////////////////////////////////

function addContact(name, email, phone) {
  fs.readFile(contactsPath)
  .then(data => {
    const parsedContacts = JSON.parse(data);
    const newContacts = { id : v4(), name, email,phone }
    parsedContacts.push(newContacts)
    fs.writeFile(contactsPath, JSON.stringify(parsedContacts))
    
    return console.log(parsedContacts);
  })

  .catch(err => console.log(err.message));
}


module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact, 
}

