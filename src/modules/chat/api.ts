import {db} from "@/firebase";

const CONTACT = "contact";
const USER = "user";

type ContactModle = {
  contact_id: string;
  contact_name: string;
  contact_of_id: string;
  contact_since: number;
  recent_message?: string;
  recent_message_date?: string;
  doc_id?: string;
};

type UserModel = {
  user_id: string;
  user_name: string;
};

const getUserContactStream = ({
  userId,
  onSnapshot,
}: {
  userId: string;
  onSnapshot: Function;
}) => {
  return db
    .collection(CONTACT)
    .where("contact_id", "==", userId)
    .onSnapshot((data) =>
      onSnapshot(
        data.docs.map(
          (doc) => ({doc_id: doc.id, ...doc.data()} as ContactModle)
        )
      )
    );
};

const addUserContact = async ({
  user_id,
  contact_id,
}: {
  user_id: string;
  contact_id: string;
}) => {
  const new_contact = await db
    .collection(USER)
    .where(user_id, "==", contact_id)
    .get();
  const {user_name} = new_contact.docs[0].data() as UserModel;
  await db.collection(CONTACT).add({
    contact_id,
    user_name,
    contact_of_id: user_id,
    contact_since: Date.now(),
  });
};

export {addUserContact, getUserContactStream};
