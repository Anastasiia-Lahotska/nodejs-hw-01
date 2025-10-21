import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
import { createFakeContact} from "../utils/createFakeContact.js";


export const generateContacts = async (number) => {
    const contacts = await readContacts();
    const newContact = Array.from({ length: number }, createFakeContact);
    const updatedContacts = [...contacts, ...newContact];
    await writeContacts(updatedContacts);
};

generateContacts(5);
