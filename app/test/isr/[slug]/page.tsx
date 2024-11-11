import { permanentRedirect, redirect } from 'next/navigation'

export const revalidate = 10

export const dynamicParams = true

export async function generateStaticParams() {
  return [{ slug: 'perm-redirect' }, { slug: 'asdf' }]
}

export default async function Page({ params }) {
  const { slug } = await params

  if (slug === 'redirect') {
    redirect(`/${new Date().toISOString()}`)
  }

  if (slug === 'perm-redirect') {
    permanentRedirect('/')
  }

  return (
    <main>
      <h1>Blog Post</h1>
      <ul>{slug}</ul>
      {/* log current time */}
      <ul>{new Date().toISOString()}</ul>
    </main>
  )
}
