import { readContacts } from "../utils/readContacts.js";
import { writeContacts } from "../utils/writeContacts.js";
/*import { createFakeContact} from "../utils/createFakeContact.js";*/

export const removeLastContact = async () => {
    const contacts = await readContacts();
    const updatedContacts = contacts.slice(0,-1);
    await writeContacts(updatedContacts);
};

removeLastContact();
