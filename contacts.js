const fs = require('fs').promises; 
const path = require('path')

const {v4} = require('uuid')

const contactsPath = path.join(__dirname, 'db/contacts.json')

///////////////////////////////////////////////////////////////////////

// function listContacts() {
//   fs.readFile(contactsPath)
//   .then(data => {
//     const parsedContacts = JSON.parse(data);
//     return console.table(parsedContacts)
//   })

//   .catch(err => console.log(err.message));
// }

///////////////////////////////////////////////////////////

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");

    return JSON.parse(data);
  } catch (err) {
    console.log(err.message);
  }
}

/////////////////////////////////////////////////////////////////////////

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, "utf-8");
    const contacts = JSON.parse(data);
    const result = contacts.find(item => item.id === String(contactId))

    if (!result){
      return console.log((`Contact with id = ${contactId} not found!`))
    } else{
      return result
    }
  } catch (err) {
    console.log(err.message);
  }
}

/////////////////////////////////////////////////////////////////////////////

async function removeContact(contactId) {
  try{
  const data = await fs.readFile(contactsPath, "utf-8");
  const parsedContacts = JSON.parse(data);
  const indx = parsedContacts.findIndex(item => item.id === String(contactId))
    if (!indx === -1){
      return console.log("There is no contact with such id")
    } 
    const [removeContact] = parsedContacts.splice(indx,1)
    fs.writeFile(contactsPath, JSON.stringify(parsedContacts))
    return removeContact
  } catch(err){
    console.log(err.message)}
}

///////////////////////////////////////////////////////////////////////

async function addContact(name, email, phone) {
  try{
    const data = await fs.readFile(contactsPath, "utf-8");
    const parsedContacts = JSON.parse(data);
    const newContacts = { id : v4(), name, email,phone }
    parsedContacts.push(newContacts)
    fs.writeFile(contactsPath, JSON.stringify(parsedContacts))
    
    return parsedContacts

    } catch(err){
      console.log(err.message)}
}


module.exports = {
  listContacts,
  addContact,
  getContactById,
  removeContact, 
}

