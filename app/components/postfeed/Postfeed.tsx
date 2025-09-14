"use client";
import React, { useEffect, useState } from "react";
import Postinput from "./Postinput";
import Posts from "./Posts";
import { ModeToggle } from "../dark-theme/ModeToggle";
import {
  collection,
  DocumentData,
  onSnapshot,
  orderBy,
  query,
  QueryDocumentSnapshot,
} from "firebase/firestore";
import { db } from "@/firebase";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/reduxModals/store";
import { BadgePoundSterling } from "lucide-react";

const Postfeed = () => {
  const name = useSelector((state: RootState) => state.user.name);
  const [posts, setPosts] = useState<
    QueryDocumentSnapshot<DocumentData, DocumentData>[]
  >([]);



   useEffect(() => {
    //1-choose the collection
    //2-create query to make post go in desc order by timestamp
    const q = query(collection(db, "posts"), orderBy("timestamp", "desc"));

    //3-onsnapshot listens for change in our post collection automatically/  listener for DocumentSnapshot
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const snapshotDocs = snapshot.docs; // docs contains every single document inside the collection
      setPosts(snapshotDocs); // use the onsnapshot func to pass all posts collection in posts state,
    });
    return unsubscribe;
  }, []);



  return (
    <div className="flex-grow  overflow-y-auto border border-gray-200 text-foreground">
      <div
        className="py-4 sm:text-xl sticky top-0 z-50
      bg-background bg-opacity-80 backdrop-blur-sm font-bold border-b border-gray-100 px-3 mb-3
      flex justify-between items-center"
      >
        <> Home</>
        <ModeToggle />
      </div>

      <Postinput  />

      {name ? (
        posts.map((post) => 
          // 4- render with .map() /mapping posts having acess to data

          <Posts key={post.id} data={post.data()} />
        )
      ) : (
        <div className="flex justify-center">
          <p className=" flex gap-2 w-fit text-center mt-20 p-3 bg-yellow-500 rounded-sm px-5 text-white  hover:bg-yellow-400 transition cursor-pointer">
            {" "}
            Login or Signup to see Posts <BadgePoundSterling />
          </p>
        </div>
      )}
    </div>
  );
};

export default Postfeed;

{
  /* 
    1-collection(db, "something") → pick the collection from db.

2- query(..., orderBy("field", "desc")) → sort.

3-onSnapshot(query, cb) → real-time listener.If someone adds/edits/deletes a document, your UI updates instantly without refreshing.

snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })) → get plain objects.

4-setState(...) → render with .map().

timestamp.toDate() → convert Firestore time. use npm install react-moment

*/
}
