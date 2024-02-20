import Image from 'next/image'
import { Inter } from 'next/font/google'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div
      className={`flex min-h-screen flex-col items-center  p-24 ${inter.className}`}
    >
      <p>hej</p>
      <Button asChild className="mt-4">
        <Link href="/international_news">international news</Link>
      </Button>
    </div>
  )
}
