// import Container from '../components/container'
// import MoreStories from '../components/more-stories'
// import HeroPost from '../components/hero-post'
// import Intro from '../components/intro'
// import Layout from '../components/layout'
// import { getAllPosts } from '../lib/api'
// import Head from 'next/head'
// import { CMS_NAME } from '../lib/constants'
import Link from 'next/link'

export default function Index() {
  return (
    <div>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blog</Link>
        </li>
        <li>
          <Link href="/notes-and-highlights">Notes & highlights</Link>
        </li>
        <li>
          <Link href="/microblog">
            (Micro)blog: everything short, as happening
          </Link>
        </li>
        <li>
          <Link href="/hobbies">Hobbies: Photography, Coffee, Design,…</Link>
        </li>
        <li>
          <Link href="/in-progress">In Progress</Link>
        </li>
        <li>
          <Link href="/about">About Me</Link>
        </li>
      </ul>
    </div>
  )
}

// export async function getStaticProps() {
//   const allPosts = getAllPosts('microblog')([
//     'title',
//     'date',
//     'slug',
//     'coverImage',
//     'excerpt',
//   ])

//   return {
//     props: { allPosts },
//   }
// }
