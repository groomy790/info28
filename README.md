# Info28

Info notification site for 2-8 class of paju jisan school in 2024

## How to use

- `/docs/how to en.md`: English document of how to use
- `/docs/how to ko.md`: Korean document of how to use

## Firebase

Info28 use firebase as a database.
So, CRUD of data is conducted by the owner of firebase.

### Internal database structure

> Use typescript to describe abstract firestore structure

```ts
type News = {
    name: string
    subject: string
    category: string
    body: Array<string>
    links: Array<string>
    expire: { year: number, month: number, day: number }
}

type SuhangCollection = Array<News> // performance evaluation
type InternalCollection = Array<News> // school activities
type EmergencyCollection = Array<News> // some very very important things

type Firestore = {
    suhang: SuhangCollection
    internal: InternalCollection
    emergency: EmergencyCollection
}
```
