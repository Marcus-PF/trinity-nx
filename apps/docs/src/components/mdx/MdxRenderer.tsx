'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxComponents } from './MdxComponents'

export function MdxRenderer({ code }: { code: string }) {
  const Component = useMDXComponent(code)
  return <Component components={MdxComponents} />
}
