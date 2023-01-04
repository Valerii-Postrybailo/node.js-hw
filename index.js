const contactsListOperations = require('./contacts')

const { Command } = require("commander");
const program = new Command();

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const contacts = contactsListOperations.listContacts()
      return contacts

    case "get":
      const contactById = contactsListOperations.getContactById(id)
      return contactById

    case "add":
      const newContact = contactsListOperations.addContact(name,email,phone)
      return newContact
      

    case "remove":
      const deletedContact = contactsListOperations.removeContact(id)
      return deletedContact

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
