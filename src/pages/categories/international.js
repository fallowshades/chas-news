import Link from 'next/link'
import NewsCard from '@/components/NewsCard'

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

import { getLocalData } from '@/lib/localdata'

export async function getStaticProps() {
  const localData = await getLocalData()
  console.log(localData)

  return {
    props: { news: localData },
  }
}
import { v4 as uuidv4 } from 'uuid'
const International_news = ({ news }) => {
  console.log(news)
  return (
    <div className="  p-4 grid grid-col gap-4">
      <h1 className="p-4 text-2xl  ">Latest international news</h1>

      {news.map((item) => {
        return <NewsCard key={uuidv4()} newsItem={item} />
      })}
    </div>
  )
}
export default International_news
