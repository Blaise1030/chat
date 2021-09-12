import {db} from "@/firebase";

const MESSAGE = "messages";

export const sendMessage = async ({user_name, user_id, payload}: any) => {
  await db.collection(MESSAGE).add({
    date: Date.now(),
    user_name,
    user_id,
    payload,
  });
};

export const getMessageStream = async (onSnapshot: (a: any[]) => void) => {
  return db
    .collection(MESSAGE)
    .onSnapshot((data) => onSnapshot(data.docs.map((d) => d.data())));
};
