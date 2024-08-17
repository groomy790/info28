import { EmergencyCollection } from "../model/emergency"
import { Emergency } from "../model/emergency"

import { firestoreDB } from "../firebase/init"
import { collection, getDocs } from "firebase/firestore"

const firestore_emergency_collection = collection(firestoreDB, "emergency")

export async function GetEmergencyCollection() {
    const collection: EmergencyCollection = []

    const snapshot = await getDocs(firestore_emergency_collection)
    snapshot.forEach(item => {
        collection.push(item.data() as unknown as Emergency)
    })
    
    console.log("Emergency collection required:", collection)
    
    return collection
}
