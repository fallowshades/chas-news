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
    dispatch(addBookmark(newsItem))
  }

  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>

      <CardContent>
        {image_url && <img src={image_url} alt={title} />}
        <p>
          this news source allow its users to bookmark their favorite news. go
          ahead you may pat us on our shoulders.
        </p>
        <Button onClick={bookmark}>
          <p className="text-sky-400"> Bookmark</p>
        </Button>

        <div>
          {false && (
            <div>
              {' '}
              <p>more services our wonderful news source provides</p>
              {newsItem?.file_url && (
                <a href={file_url} download>
                  Download File
                </a>
              )}
              {newsItem?.audio_url && (
                <audio controls>
                  <source src={audio_url} type="audio/mpeg" />
                  Your browser does not support the audio tag.
                </audio>
              )}
            </div>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-4">
        {newsItem?.article_id ? (
          <Button asChild size="sm">
            <Link href={`/categories/news/${newsItem?.article_id}`}>
              <p className="text-sky-400">...read more</p>
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
