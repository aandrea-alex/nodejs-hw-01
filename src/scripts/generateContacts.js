import { readContacts } from '../utils/readContacts.js';
import { createFakeContact } from '../utils/createFakeContact.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = async (number) => {
  try {
    const currentContacts = await readContacts();  
    const newContacts = [];

    for (let i = 0; i < number; i++) {
      newContacts.push(createFakeContact());
    }

    const updatedContacts = [...currentContacts, ...newContacts];

    writeContacts(updatedContacts);

    console.log(`${number} нових контактів успішно додано.`);
  } catch (error) {
    console.error('Помилка при генерації контактів:', error);
  }
};

generateContacts(5);
