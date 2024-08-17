import { EmergencyCollection } from "../model/emergency"

const FAKE_ASS_DATA: EmergencyCollection = [
    {
        name: "수능 신청",
        subject: "전과목",
        category: "비상",
        body: ["A", "B", "C"],
        expire: { year: 2024, month: 12, day: 31},
        links: [
            { name: "asdad", url: "https://www.google.com" }
        ]
    },
    {
        name: "동아리 신청",
        subject: "기타",
        category: "비상",
        body: ["Aasf", "Bsafsadf", "Casdfasdf"],
        expire: { year: 2024, month: 12, day: 31},
        links: [
            { name: "sf2gddad", url: "https://www.google.com" }
        ]
    }
]

export function GetEmergencyCollection() {
    return FAKE_ASS_DATA
}
