'use client'

import { MDXProvider } from '@mdx-js/react'
import { MDXContent } from 'mdx-js-runtime'
import { MdxComponents } from './MdxComponents'

export function MdxRenderer({ code }: { code: string }) {
  return (
    <MDXProvider components={MdxComponents}>
      <MDXContent>{code}</MDXContent>
    </MDXProvider>
  )
}
