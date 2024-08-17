const now = new Date()
const today_year = now.getFullYear()
const today_month = now.getMonth()
const today_day = now.getDay()

export const ExpireCheck = (year: number, month: number, day: number) => {
    if (today_year < year) return true
    if (today_month < month) return true
    if (today_day < day) return true

    return false
}