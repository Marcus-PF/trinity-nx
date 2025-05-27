export interface TOCHeading {
  depth: number
  value: string
  slug: string
}

export function generateTOC(content: string): TOCHeading[] {
  const headingRegex = /^(#{1,6})\s+(.*)$/gm
  const toc: TOCHeading[] = []

  let match: RegExpExecArray | null
  while ((match = headingRegex.exec(content)) !== null) {
    const levelMatch = match[1]
    const textMatch = match[2]

    if (!levelMatch || !textMatch) continue

    const depth = levelMatch.length
    const value = textMatch.trim()
    const slug = value
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-')

    toc.push({ depth, value, slug })
  }

  return toc
}
