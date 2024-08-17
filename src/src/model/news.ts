export interface News {
    name: string
    subject: string
    category: string
    body: Array<string>
    links: Array<{ name: string, url: string }>
    expire: { year: number, month: number, day: number }
}
