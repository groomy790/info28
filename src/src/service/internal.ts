import { InternalCollection } from "../model/internal"

const FAKE_ASS_DATA: InternalCollection = [
    {
        name: "수능dasdasfasdf",
        subject: "전asfdasf과목",
        category: "비sfasdf상",
        body: ["A", "B", "sdffC"],
        expire: { year: 2024, month: 12, day: 31},
        links: [
            { name: "asasdfdsfdad", url: "https://www.google.com" }
        ]
    },
    {
        name: "동아리 신&*&(&%*청",
        subject: "기<><><><><>타",
        category: "비asdf87b상",
        body: ["Aasf", "Bsafsada*(H&*(&)(SFDf", "Casdfasdf"],
        expire: { year: 2024, month: 12, day: 31},
        links: [
            { name: "sf2gddad", url: "https://www.google.com" }
        ]
    }
]

export function GetInternalCollection() {
    return FAKE_ASS_DATA
}
