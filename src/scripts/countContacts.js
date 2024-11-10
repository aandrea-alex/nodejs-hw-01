import { readContacts } from "../utils/readContacts.js";

export const countContacts = async () => {
   const db = await readContacts();
   return db.length;
};

console.log(await countContacts());
