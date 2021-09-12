import {db} from "@/firebase";

const MESSAGE = "messages";

export const sendMessage = async ({user_name, user_id, payload, type}: any) => {
  await db.collection(MESSAGE).add({
    date: Date.now(),
    user_name,
    user_id,
    payload,
    type,
  });
};

export const getMessageStream = async (onSnapshot: (a: any[]) => void) => {
  return db
    .collection(MESSAGE)
    .orderBy("date", "desc")
    .limit(10)
    .onSnapshot((data) => onSnapshot(data.docs.map((d) => d.data())));
};
