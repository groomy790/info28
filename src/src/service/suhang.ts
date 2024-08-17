import { EmergencyCollection } from "../model/emergency"

const FAKE_ASS_DATA: EmergencyCollection = [
    {
        name: "수학 논술형 수행",
        subject: "수학",
        category: "비상",
        body: ["A", "Bㅁㄴㅇㅁㅇ", "asfafC"],
        expire: { year: 2024, month: 12, day: 31},
        links: [
            { name: "asdad", url: "https://www.examplec.com" }
        ]
    },
    {
        name: "동아afafasdf",
        subject: "기타",
        category: "비상",
        body: ["Aasf", "Bsafas1313fsadf", "Casdfasdf"],
        expire: { year: 2024, month: 12, day: 31},
        links: [
            { name: "sf2g312341412412341ddad", url: "https://www.google.com" }
        ]
    }
]

export function GetSuhangCollection() {
    return FAKE_ASS_DATA
}
