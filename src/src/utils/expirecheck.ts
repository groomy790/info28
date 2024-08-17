const now = new Date()
const today_year = now.getFullYear()
const today_month = now.getMonth() + 1 // should add 1 cuz js month starts from 0
const today_day = now.getDate()

export const ExpireCheck = (year: number, month: number, day: number) => {
    if (year > today_year) return false

    if (year === today_year) {
        if (month > today_month) return false
        
        if (month === today_month) {
            if (day >= today_day) return false
        }
    }

    return true
}

// const chlist = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
// chlist.forEach(item => {
//     console.log(`expire ${today_year} ${today_month} ${item}`, ExpireCheck(today_year, today_month, item))
// })
