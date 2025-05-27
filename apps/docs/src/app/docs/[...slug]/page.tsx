import path from 'path'
import fs from 'fs/promises'
import { notFound } from 'next/navigation'
import { generateTOC } from '../../../lib/toc'
import { MdxRenderer } from '../../../components/mdx/MdxRenderer'

export default async function DocsCatchAllPage({
  params,
}: {
  params: Promise<{ slug?: string[] }>;
}) {
  const { slug } = await params;

  if (!slug || !Array.isArray(slug)) return notFound()

  const slugPath = path.join(...slug)
  const mdxFilePath = path.join(
    process.cwd(),
    'apps/docs/src/content/docs',
    `${slugPath}.mdx`
  )

  let raw: string
  try {
    raw = await fs.readFile(mdxFilePath, 'utf8')
  } catch {
    return notFound()
  }

  const toc = generateTOC(raw)

  return (
    <div className="prose max-w-3xl py-10">
        <h1 className="text-red-600 font-bold">Debug Render ✅</h1>
        <pre className="bg-gray-100 p-4 text-sm overflow-auto max-h-96">
        {raw}
        </pre>
        <MdxRenderer code={raw} />
    </div>
)
}
