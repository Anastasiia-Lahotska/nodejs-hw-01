/*import { readContacts } from "../utils/readContacts.js";*/
import { writeContacts } from "../utils/writeContacts.js";
/*import { createFakeContact} from "../utils/createFakeContact.js";*/

export const removeAllContacts = async () => {
    await writeContacts([]);
};

removeAllContacts();
