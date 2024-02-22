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

###

#### an empty instance to be modified directly with useRef

bookmarkSlice.jsx

```js
import { createSlice } from '@reduxjs/toolkit'

const bookmarkSlice = createSlice({
  name: 'bookmarks',
  reducers: {},
})

export default bookmarkSlice.reducer
```

StoreProvider.js

- access the store and populate it with initial state
- (must do this for every new page we navigate to hence need a wrapper to insert bookmarks and children)

```js
import { useRef } from 'react'
import { Provider } from 'react-redux'
import { makeStore } from '../lib/store'
import { initializeCount } from '../lib/features/bookmark/bookmarkSlice'

import { useAppSelector, useAppDispatch, useAppStore } from '../lib/hooks'
import {
  initializeProduct,
  setProductName,
} from '../lib/features/bookmark/bookmarkSlice'

export default function StoreProvider({ bookmarks, children }) {
  const storeRef = useRef(null)
  if (!storeRef.current) {
    storeRef.current = makeStore()
    storeRef.current.dispatch(initializeCount(bookmarks))
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}
```

hooks.js

- will be the wrapper to every unique page and insert data do the store that contain the shared state
- (just an assumption --> documentation:"set route-specific data")

```js
import { useDispatch, useSelector, useStore } from 'react-redux'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch
export const useAppSelector = useSelector
export const useAppStore = useStore
```

####

```js

```

####

```js

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
