# chas news

## navigering

### skapa mapp/folder structur

- några folders och filer

#### importera components

```sh
npx shadcn-ui@latest init
```

- setup Button

```sh
npx shadcn-ui@latest init
```

#### länk till en ny sida

index.js

```js
import { Button } from '@/components/ui/button'
import Link from 'next/link'
```

```js
export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <p>tjo</p>
      <p>hej</p>
      <Button asChild className="mt-4">
        <Link href="/(dashboard)/International_news/page">
          international news
        </Link>
      </Button>
    </main>
  )
}
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

### placera alla element i context som har en nav och eventuellt en sidebar

- skapa Navbar.js

layoutProvider.js

```js
import Navbar from '@/components/Navbar'

const LayoutContext = createContext()

const Layout = ({ children }) => {
  return (
    <LayoutContext.Provider value={{}}>
      <main className="grid lg:grid-cols-5">
        {/* first-col hide on small screen */}

        {/* second-col hide dropdown on big screen */}

        <div className="lg:col-span-4">
          <Navbar />
          <div className="py-16 px-4 sm:px-8 lg:px-16">{children}</div>
        </div>
      </main>
    </LayoutContext.Provider>
  )
}
export const useLayoutContext = () => useContext(LayoutContext)
export default Layout
```

#### detta är möjligt genom att wrappa appen i ens context. sidebar och nav följer låd modellen

```js
import '@/styles/globals.css'
import Layout from './layoutProvider'
export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />;
    </Layout>
  )
}
```

## hämta data remote och sedan lokalt

### data från api till chas-news pages\international_news

#### Fixa länk enligt page router

index.js

```js
<Link href="/international_news">international news</Link>
```

#### hämta data och kopiera json

```js
/**
 * const DIN_API_NYCKEL = 'pub_'
const QUERY_PARAMETERS = '&country=us&category=world'
export async function GET() {
  const filePath = path.resolve(
    process.cwd(),
    'assets',
    'international_news.json'
  )
  const res = await fetch()

  //`https://newsapi.org/v2/everything?apiKey=${DIN_API_NYCKEL}${QUERY_PARAMETERS}`
  // const data = await res.json()

  return {
    props: {
      news: data,
    },
  }
}
 */
```

```js
import { getLocalData } from '../lib/localdata'

export async function getStaticProps() {
  const localData = await getLocalData()
  console.log(localData)
  return {
    props: { news: localData },
  }
}
```

#### var hitter vi json filen?

- enligt dokumentation https://vercel.com/guides/loading-static-file-nextjs-api-route

json\data.json

```js
[
  {
    "article_id": "7a0bd0a62f3c00a41cb3ea58fdae8c10",
    "title": "Mark Noke murder accused says he was 'at home taking drugs'",
    "link": "https://www.dailyecho.co.uk/news/24129573.mark-noke-murder-accused-says-at-home-taking-drugs/?ref=rss",
    "keywords": null,
    "creator": null,
    "video_url": null,
    "description": "A man accused of murdering Mark Noke during a failed robbery in Southampton has told a jury he was not present as he was at home taking drugs",
    "content": "ONLY AVAILABLE IN PAID PLANS",
    "pubDate": "2024-02-20 03:30:00",
    "image_url": "https://www.dailyecho.co.uk/resources/images/17767476/?type=app&htype=0",
    "source_id": "dailyecho",
    "source_url": "https://www.dailyecho.co.uk",
    "source_icon": "https://ik.imagekit.io/plantoraImg/domain_icons/dailyecho.png",
    "source_priority": 232843,
    "country": ["united kingdom"],
    "category": ["top"],
    "language": "english",
    "ai_tag": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "sentiment_stats": "ONLY AVAILABLE IN PROFESSIONAL AND CORPORATE PLANS",
    "ai_region": "ONLY AVAILABLE IN CORPORATE PLANS"
  },
  ...

]
```

\lib\localdata.js

```js
import fsPromises from 'fs/promises'
import path from 'path'

export async function getLocalData() {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'src/json/data.json')
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as json
  const objectData = JSON.parse(jsonData)

  return objectData
}
```

#### skapa fina nyhets kort

```sh
npx shadcn-ui@latest add badge separator card
npm install uuid
```

international_news.js

```js
import Link from 'next/link'
import NewsCard from '@/components/NewsCard'

import { v4 as uuidv4 } from 'uuid'
const International_news = ({ news }) => {
  console.log(news)
  return (
    <div>
      <h1>Latest international news</h1>

      {news.map((item) => {
        return <NewsCard key={uuidv4()} newsItem={item} />
      })}
    </div>
  )
}
export default International_news
```

NewsCard.js

```js
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@radix-ui/themes'
import { Link } from '@radix-ui/themes'
import Image from 'next/image'
const NewsCard = ({ newsItem }) => {
  const {
    ai_region,
    ai_tag,
    article_id,
    category,
    content,
    country,
    creator: creator,
    description,
    image_url,
    keywords: keywords,
    language,
    link,
    pubData,
    sentiment,
    sentiment_stats,
    source_icon: source_icon,
    source_id,
    source_priority,
    source_url,
    title,
    video_url: video_url,
  } = newsItem
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>p</CardDescription>
      </CardHeader>

      <CardContent>{/* card info */}</CardContent>
      <CardFooter className="flex gap-4">
        <Button asChild size="sm">
          <Link href={`/news/${newsItem.article_id}`}>...</Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
export default NewsCard
```

## använd redux toolkit som cache då

https://redux-toolkit.js.org/usage/nextjs

### individuella artikelsidor (international news)

#### serverside anrop

##### uh dokumentation

- givvet att någon artikel navigerar till hemsidan https://nextjs.org/docs/pages/building-your-application/routing/linking-and-navigating

- behöver generera alla möjliga utfall angående navigering, annars https://nextjs.org/docs/messages/invalid-getstaticpaths-value

\categories\news\[newsItems].js

- behöver map för att skapa en "non-mutable" array.

```ts
export async function getStaticPaths() {
  return {
    paths: Array<string | { params: { [key: string]: string } }>,
    fallback: boolean,
  }
}
```

##### kod

```js
import { getLocalDataID, getAllLocalDataIDs } from '@/lib/localdata'

// Define the getStaticPaths function
export async function getStaticPaths() {
  // Fetch all possible news item IDs
  const allNewsItemIDs = await getAllLocalDataIDs()

  // Map the IDs to the required format for Next.js
  const paths = allNewsItemIDs.map((id) => ({
    params: { newsItem: id.toString() },
  }))

  return {
    paths,
    fallback: false, // Or true if you want to handle paths not generated at build time
  }
}

// Define the getStaticProps function
export async function getStaticProps({ params }) {
  console.log(params)
  // Fetch the specific news item based on the ID
  const localData = await getLocalDataID(params.id)
  console.log(localData)
  return {
    props: { newsItem: localData },
  }
}
```

#### totals 2 queries för att returnera enstaka artikel och alla id paths

localData.js

```js
export async function getLocalDataID(id) {
  // Get the path of the json file
  const filePath = path.join(process.cwd(), 'src/json/data.json')
  // Read the json file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as json

  jsonData.filter((newsItem) => newsItem.article_id == id)
  const objectData = JSON.parse(jsonData)

  return objectData
}
```

localData.js

```js
export async function getAllLocalDataIDs() {
  // Get the path of the JSON file
  const filePath = path.join(process.cwd(), 'src/json/data.json')
  // Read the JSON file
  const jsonData = await fsPromises.readFile(filePath)
  // Parse data as JSON
  const objectData = JSON.parse(jsonData)

  // Extract all unique IDs from the data
  const allIDs = objectData.map((newsItem) => newsItem.article_id)

  // Return unique IDs
  return [...new Set(allIDs)]
}
```

#### modifiera kort för att också handera enstaka artiklar. KISS :> (em..)

- footer kan navigera till artikel eller hem

```js
const NewsCard = ({ newsItem }) => {
...

return(
  ...
        <CardFooter className="flex gap-4">

        {newsItem?.article_id ? (
          <Button asChild size="sm">
            <Link href={`/categories/news/${newsItem?.article_id}`}>
              ...read more
            </Link>
          </Button>
        ) : (
          <Button asChild size="sm">
            <Link href={`/`}>...back to home</Link>
          </Button>
        )}
      </CardFooter>
)

}
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

```

```
