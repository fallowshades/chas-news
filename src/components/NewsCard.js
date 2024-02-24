import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { addBookmark } from '@/lib/features/bookmark/bookmarkSlice'
import { Button } from '@radix-ui/themes'
import { Link } from '@radix-ui/themes'
import Image from 'next/image'
import { useSelector, useDispatch } from 'react-redux'
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
  } = newsItem || { article_id: '' }

  const dispatch = useDispatch()

  const bookmark = () => {
    dispatch(addBookmark(article_id))
  }

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>p</CardDescription>
      </CardHeader>

      <CardContent>
        <p>
          this news source allow its users to bookmark their favorite news. go
          ahead you may pat us on our shoulders.
        </p>
        <Button onClick={bookmark}>
          <p className="text-sky-400"> Bookmark</p>
        </Button>
      </CardContent>
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
    </Card>
  )
}
export default NewsCard
