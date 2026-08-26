import { copyFile, mkdir, rm, writeFile } from 'node:fs/promises'
import path from 'node:path'
import { NotionAPI } from 'notion-client'
import { notionPageToMarkdown } from 'notion-x-to-md'

const PAGE_ID = '3ba7f391295080b19015f0f56f4ab2b2'
const SOURCE_URL = 'https://alltoall.notion.site/save-lower-layer-moe-experts-llal'
const OUTPUT_FILE = '_pages/blog/llal.md'
const ASSET_DIR = 'assets/blog/llal'
const VENDOR_DIR = 'assets/blog/vendor'

const api = new NotionAPI()
const page = await api.getPage(PAGE_ID)
let markdown = await notionPageToMarkdown(page)

await rm(ASSET_DIR, { recursive: true, force: true })
await mkdir(ASSET_DIR, { recursive: true })
await mkdir(VENDOR_DIR, { recursive: true })
await mkdir(path.dirname(OUTPUT_FILE), { recursive: true })

function resolveDownloadUrl(url) {
  try {
    const parsed = new URL(url)
    const host = parsed.hostname.toLowerCase()
    if (
      (host === 'notion.so' || host.endsWith('.notion.so') ||
       host === 'notion.com' || host.endsWith('.notion.com')) &&
      parsed.pathname.startsWith('/image/')
    ) {
      const original = decodeURIComponent(parsed.pathname.slice('/image/'.length))
      const blockId = parsed.searchParams.get('id')
      return page.signed_urls?.[original] ||
        (blockId ? page.signed_urls?.[blockId] : undefined) ||
        url
    }
  } catch {
    // Fall through to the original URL.
  }
  return url
}

const imagePattern = /!\[([^\]]*)\]\((https?:\/\/[^)]+)\)/g
const matches = [...markdown.matchAll(imagePattern)]
let localized = 0
const failures = []

for (let i = 0; i < matches.length; i++) {
  const [full, alt, url] = matches[i]
  const downloadUrl = resolveDownloadUrl(url)
  try {
    const response = await fetch(downloadUrl, {
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; static-blog-sync/1.0)' }
    })
    if (!response.ok) throw new Error(`${response.status} ${response.statusText}`)

    const type = response.headers.get('content-type') || ''
    const ext = type.includes('png') ? '.png'
      : type.includes('jpeg') || type.includes('jpg') ? '.jpg'
      : type.includes('gif') ? '.gif'
      : type.includes('webp') ? '.webp'
      : type.includes('svg') ? '.svg'
      : '.bin'

    const filename = `image-${String(i + 1).padStart(2, '0')}${ext}`
    const localPath = path.join(ASSET_DIR, filename)
    const bytes = Buffer.from(await response.arrayBuffer())
    await writeFile(localPath, bytes)

    markdown = markdown.replace(
      full,
      `![${alt}]({{ '/${ASSET_DIR}/${filename}' | relative_url }})`
    )
    localized++
  } catch (error) {
    failures.push({ url, error: error.message })
    console.error(`Could not localize image ${url}:`, error.message)
  }
}

if (failures.length) {
  throw new Error(`Failed to localize ${failures.length}/${matches.length} Notion images; refusing to publish a mirror with runtime Notion dependencies.`)
}

// Bundle MathJax into the repository so the rendered blog has no runtime CDN dependency.
await copyFile(
  'node_modules/mathjax-full/es5/tex-svg.js',
  path.join(VENDOR_DIR, 'tex-svg.js')
)

// Avoid duplicating the page title because the Jekyll layout renders it.
markdown = markdown.replace(/^#\s+Mitigate Silent Expert Death in Ultra-Sparse MoE\s*\n+/i, '')

const frontMatter = `---\nlayout: notion_blog\ntitle: "Mitigate Silent Expert Death in Ultra-Sparse MoE"\npermalink: /blog/llal/\nsource_url: "${SOURCE_URL}"\n---\n\n`

await writeFile(OUTPUT_FILE, frontMatter + markdown.trim() + '\n', 'utf8')
console.log(`Localized ${localized}/${matches.length} images and wrote ${OUTPUT_FILE}`)
