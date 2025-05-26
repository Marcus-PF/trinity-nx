import { cn } from '@trinity/ui'

export const MdxComponents = {
  h1: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h1 className={cn('text-4xl font-bold my-6', props.className)} {...props} />
  ),
  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2 className={cn('text-3xl font-semibold my-4', props.className)} {...props} />
  ),
  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 className={cn('text-2xl font-medium my-3', props.className)} {...props} />
  ),
  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p className={cn('leading-7 my-3 text-muted-foreground', props.className)} {...props} />
  ),
  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul className={cn('list-disc list-inside space-y-2', props.className)} {...props} />
  ),
  li: (props: React.LiHTMLAttributes<HTMLLIElement>) => (
    <li className={cn('ml-6', props.className)} {...props} />
  ),
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
    <a
      className={cn('underline text-primary hover:text-accent', props.className)}
      {...props}
    />
  ),
}
