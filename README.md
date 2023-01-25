Completed tasks:

# Get contact by ID
<img src="https://i.ibb.co/1LmnPPJ/photo-2023-01-04-12-42-30.jpg" alt="photo-2023-01-04-12-42-30" border="0">

# Add new contact 
<img src="https://i.ibb.co/ZLfv3PY/photo-2023-01-04-12-42-34.jpg" alt="photo-2023-01-04-12-42-34" border="0">

# Remove contact
<img src="https://i.ibb.co/hg5fLyk/photo-2023-01-04-12-42-38.jpg" alt="photo-2023-01-04-12-42-38" border="0">

# Receive and display the entire list of contacts in the form of a table (console.table)
<img src="https://i.ibb.co/5kzZLsz/photo-2023-01-04-13-08-26.jpg" alt="photo-2023-01-04-13-08-26" border="0">

Base of Node.js

Крок 1️⃣

Ініціалізація npm в проекті
В корені проекту створений файл index.js
Поставлений пакет nodemon як залежність розробки (devDependencies)
В файлі package.json додано "скрипти" для запуску index.js
Є скрипт start який запускає index.js за допомогою node
Є скрипт dev який запускає index.js за допомогою nodemon

Крок 2️⃣

У корені проекту створена папка db. Для зберігання контактів використано файл contacts.json

У корені проекту створено файл contacts.js.

Зроблено імпорт модулів fs і path для роботи з файловою системою
Створено змінну contactsPath і записано шлях до файлу contacts.json. Для складання шляху використано методи модуля path.
Додано функції для роботи з колекцією контактів. У функціях використано модуль fs та його методи readFile() і writeFile()
Зроблено експорт створених функцій через module.exports


Базовий вміст файлу contacts.js:

/*
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

Крок 3️⃣

Зроблено імпорт модуля contacts.js в файлі index.js та перевірено працездатність функції для роботи з контактами.

Крок 4️⃣

В файлі index.js імпортується пакет yargs для зручного парса аргументів командного рядка. Використано функцію invokeAction() яка отримує тип виконуваної дії і необхідні аргументи. Функція викликає відповідний метод з файлу contacts.js передаючи йому необхідні аргументи.

Базовий вміст файлу index.js:

const argv = require("yargs").argv;

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);

Так само, для парсинга аргументів командного рядка, тут може використовуватись модуль [commander] (https://www.npmjs.com/package/commander). Це більш популярна альтернатива модуля yargs: 

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

// TODO: рефакторити
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      break;

    case "get":
      // ... id
      break;

    case "add":
      // ... name email phone
      break;

    case "remove":
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);


Крок 5️⃣

Команди запущені в терміналі і зроблено окремий скріншот результату виконання кожної з них.

# Отримуємо і виводимо весь список контактів у вигляді таблиці (console.table)
node index.js --action="list"

# Отримуємо контакт по id
node index.js --action="get" --id=5

# Додаємо контакт
node index.js --action="add" --name="Mango" --email="mango@gmail.com" --phone="322-22-22"

# Видаляємо контакт
node index.js --action="remove" --id=3

Загальні критерії виконання:

Створено репозиторій REST API додатку. 

При створенні репозиторія використаний бойлерплейт. 

Пулл-реквест (PR) з відповідною таскою відправлений менторові на перевірку. 

Код відповідає технічному завданню проекта.

При виконанні коду не виникає необроблених помилок.

Назва змінних, властивостей і методів починається з малої літери і записуються в нотації CamelCase. 

Використовуються англійські іменники Назва функції або методу містить дієслово.

У коді немає закоментуваних ділянок коду.

Проект коректно працює з актуальною LTS-версією Node.
