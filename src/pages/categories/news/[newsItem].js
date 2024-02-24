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

import { v4 as uuidv4 } from 'uuid'
import NewsCard from '@/components/NewsCard'

const NewsItemPage = ({ params }) => {
  return <NewsCard key={uuidv4()} newsItem={params?.newsItem} />
}
export default NewsItemPage
