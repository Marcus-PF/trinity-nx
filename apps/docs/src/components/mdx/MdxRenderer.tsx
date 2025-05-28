'use client'

import { useEffect, useState } from 'react'
import { evaluate } from '@mdx-js/mdx'
import * as runtime from 'react/jsx-runtime'
import { MDXProvider } from '@mdx-js/react'

interface Props {
  code: string
  components?: Record<string, React.ComponentType>
}

export function MdxRenderer({ code, components = {} }: Props) {
  const [MDXContent, setMDXContent] = useState<React.ComponentType | null>(null)

  useEffect(() => {
    async function renderMDX() {
      const mod = await evaluate(code, {
        ...runtime,
        useMDXComponents: () => components
      })
      setMDXContent(() => mod.default)
    }

    renderMDX().catch((e) => {
      console.error('Failed to evaluate MDX:', e)
    })
  }, [code, components])

  if (!MDXContent) return null

  return (
    <MDXProvider components={components}>
      <MDXContent />
    </MDXProvider>
  )
}
