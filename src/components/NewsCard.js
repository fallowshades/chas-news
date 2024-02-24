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
  } = newsItem || { article_id: '' }
  return (
    <Card className="bg-muted">
      <CardHeader>
        <CardTitle>Card title</CardTitle>
        <CardDescription>p</CardDescription>
      </CardHeader>

      <CardContent>{/* card info */}</CardContent>
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
