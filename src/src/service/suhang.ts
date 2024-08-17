import { SuhangCollection, Suhang } from "../model/suhang"

import { firestoreDB } from "../firebase/init"
import { collection, getDocs } from "firebase/firestore"

const firestore_suhang_collection = collection(firestoreDB, "suhang")

export async function GetSuhangCollection() {
    const collection: SuhangCollection = []

    const snapshot = await getDocs(firestore_suhang_collection)
    snapshot.forEach(item => {
        collection.push(item.data() as unknown as Suhang)
    })
    
    console.log("Suhang collection required:", collection)
    
    return collection
}
