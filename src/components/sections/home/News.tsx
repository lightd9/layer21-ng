"use client"

import Reveal from "@/components/animations/Reveal"
import { ArrowRight, Calendar, Tag } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export interface NewsArticle {
  slug: string
  url: string
  title: string
  excerpt: string
  category: "Regulation" | "NRS" | "E-invoicing" | "Industry" | "Product"
  date: string
  image: string
  featured?: boolean
}

const ARTICLES: NewsArticle[] = [
  {
    slug: "implementation-of-taxpayer-identification-tax-id",
    url: "https://www.nrs.gov.ng/news/news/news-release-3",
    title: "IMPLEMENTATION OF TAXPAYER IDENTIFICATION (Tax ID)",
    excerpt:
      "Kindly note that this public notice is specifically intended for organizations that currently use the TIN validation API to veryiy taxpayer's details.",
    category: "NRS",
    date: "2026-05-22",
    image: "/newsjpeg3.png",
    featured: true,
  },
  {
    slug: "introducing-partial-payment-support-for-invoice-status-updates",
    url: "https://einvoice.firs.gov.ng/changelog#april-2026",
    title: "Introducing Partial Payment Support for Invoice Status Updates",
    excerpt:
      "Support for PARTIAL payment status has now been introduced, enabling taxpayers to record installment-based or split payments against a single invoice.",
    category: "E-invoicing",
    date: "2026-04-28",
    image: "/newjpeg4.png",
  },
  {
    slug: "introducing-invoice-quantity-codes-resource",
    url: "https://einvoice.firs.gov.ng/changelog#april-2026",
    title: "Introducing Invoice Quantity Codes Resource",
    excerpt:
      "A new resource endpoint, base_url/api/v1/invoice/resources/invoice-quantity-codes, has been added to...",
    category: "E-invoicing",
    date: "2026-04-28",
    image: "/newsjpeg2.png",
  },
  {
    slug: "new-tax-categories-for-fiscalization",
    url: "https://einvoice.firs.gov.ng/changelog#april-2026",
    title: "Introducing New Tax Categories for Fiscalization",
    excerpt:
      "In line with extant tax laws and reporting requirements, new tax categories have been introduced...",
    category: "E-invoicing",
    date: "2026-02-18",
    image: "/newsjpeg1.png",
  },
]

const CATEGORY_STYLES: Record<NewsArticle["category"], string> = {
  "E-invoicing": "bg-amber-50 text-amber-800",
  "NRS": "bg-blue-50 text-blue-800",
  "Industry": "bg-emerald-50 text-emerald-800",
  "Product": "bg-violet-50 text-violet-800",
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function CategoryBadge({ category }: { category: NewsArticle["category"] }) {
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-bold ${CATEGORY_STYLES[category]}`}
    >
      <Tag className="h-3 w-3" />
      {category}
    </span>
  )
}

function FeaturedCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative grid overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg lg:grid-cols-2"
    >
      <div className="relative h-64 lg:h-full">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-col justify-center gap-4 p-8">
        <div className="flex items-center gap-3">
          <CategoryBadge category={article.category} />
          <span className="flex items-center gap-1.5 text-sm text-slate-500">
            <Calendar className="h-3.5 w-3.5" />
            {formatDate(article.date)}
          </span>
        </div>

        <h3 className="text-2xl font-black leading-tight text-slate-950 sm:text-3xl">
          {article.title}
        </h3>

        <p className="text-base leading-7 text-slate-600">{article.excerpt}</p>

        <span className="mt-2 inline-flex items-center gap-2 text-sm font-bold text-blue-600 transition group-hover:gap-3">
          Read article
          <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

function ArticleCard({ article }: { article: NewsArticle }) {
  return (
    <Link
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg"
    >
      <div className="relative h-44 w-full overflow-hidden">
        <Image
          src={article.image}
          alt={article.title}
          fill
          sizes="(min-width: 1024px) 33vw, 100vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-3 p-6">
        <div className="flex items-center gap-3">
          <CategoryBadge category={article.category} />
          <span className="flex items-center gap-1.5 text-xs text-slate-500">
            <Calendar className="h-3 w-3" />
            {formatDate(article.date)}
          </span>
        </div>

        <h3 className="text-lg font-bold leading-snug text-slate-950">
          {article.title}
        </h3>

        <p className="text-sm leading-6 text-slate-600">{article.excerpt}</p>

        <span className="mt-auto inline-flex items-center gap-1.5 pt-2 text-sm font-bold text-blue-600 transition group-hover:gap-2.5">
          Read more
          <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  )
}

export default function News() {
  const [featured, ...rest] = ARTICLES

  return (
    <section id="news" className="bg-slate-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <div className="mb-12 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-widest text-blue-600">
                Stay informed
              </p>
              <h2 className="mt-2 text-4xl font-black text-slate-950 sm:text-5xl">
                E-invoicing news
              </h2>
              <p className="mt-3 max-w-xl text-base leading-7 text-slate-600">
                Regulatory updates, platform improvements, and insights to keep
                your business ahead of every compliance deadline.
              </p>
            </div>


          </div>
        </Reveal>

        <Reveal>
          <div className="mb-8">
            <FeaturedCard article={featured} />
          </div>
        </Reveal>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((article) => (
            <Reveal key={article.slug}>
              <ArticleCard article={article} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}