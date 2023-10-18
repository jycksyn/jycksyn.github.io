import { robotoSlab } from '@/lib/fonts'
import clsx from 'clsx'
import type { MDXComponents } from 'mdx/types'
 
export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    h1: ({children}) => <h1 className={clsx('text-3xl font-bold', robotoSlab.className)}>{children}</h1>,
    ul: ({children}) => <ul className='pl-6 list-disc'>{children}</ul>,
  }
}