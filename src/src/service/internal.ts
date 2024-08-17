import { Internal, InternalCollection } from "../model/internal"

import { firestoreDB } from "../firebase/init"
import { collection, getDocs } from "firebase/firestore"

const firestore_internal_collection = collection(firestoreDB, "internal")

export async function GetInternalCollection() {
    const collection: InternalCollection = []

    const snapshot = await getDocs(firestore_internal_collection)
    snapshot.forEach(item => {
        collection.push(item.data() as unknown as Internal)
    })
    
    console.log("Internal collection required:", collection)
    
    return collection
}
