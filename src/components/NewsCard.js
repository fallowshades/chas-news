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
