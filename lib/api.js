import fs from 'fs'
import { join } from 'path'
import matter from 'gray-matter'

const contentDirectory = join(process.cwd(), '_content')

export function getPostSlugs(resource) {
  console.log('path is', join(contentDirectory, resource))
  return fs.readdirSync(join(contentDirectory, resource))
}

export function getPostBySlug(resource, slug, fields = []) {
  const realSlug = slug.replace(/\.md$/, '')
  const fullPath = join(contentDirectory, resource, `${realSlug}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(fileContents)

  const items = {}

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === 'slug') {
      items[field] = realSlug
    }
    if (field === 'content') {
      items[field] = content
    }

    if (data[field]) {
      items[field] = data[field]
    }
  })

  return items
}

export function getAllPosts(resource) {
  return function (fields = []) {
    const slugs = getPostSlugs(resource)
    const posts = slugs
      .map((slug) => getPostBySlug(resource, slug, fields))
      // sort posts by date in descending order
      .sort((post1, post2) => (post1.date > post2.date ? -1 : 1))
    return posts
  }
}
