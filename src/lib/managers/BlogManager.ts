// MATCH WITH BlogCard.Svelte
export type BlogCardProps = {
  title: string;
  description: string;
  slug: string;
  image: string;
  author?: string;
  post_color?: string; // Hex color code to give each card a unique color
  date_published: string;
}


export const DefaultBlogPosts: BlogCardProps[] = [
  {
    title: 'No Label? No Problem: How to build a Fanbase as an Independent Artist',
    description: 'In this article we will be discussing methods of how successful independent artists were able to build their following without the backing of a major label.',
    slug: 'how-to-create-a-fanbase-without-a-label',
    image: 'no-label',
    date_published: 'February 2nd, 2024'
  },
  {
    title: 'Blog Post 2',
    description: 'This is a blog post description',
    slug: 'blog-post-2',
    image: 'https://via.placeholder.com/150',
    date_published: 'February 2nd, 2024'
  },
  {
    title: 'Blog Post 3',
    description: 'This is a blog post description',
    slug: 'blog-post-3',
    image: 'https://via.placeholder.com/150',
    date_published: 'February 2nd, 2024'
  },
  {
    title: 'Blog Post 4',
    description: 'This is a blog post description',
    slug: 'blog-post-4',
    image: 'https://via.placeholder.com/150',
    date_published: 'February 2nd, 2024'
  },
  {
    title: 'Blog Post 5',
    description: 'This is a blog post description',
    slug: 'blog-post-5',
    image: 'https://via.placeholder.com/150',
    date_published: 'February 2nd, 2024'
  }
]
