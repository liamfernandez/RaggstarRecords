<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/managers/BlogManager';
  import { DefaultBlogPosts } from '$lib/managers/BlogManager';

  const blogPostInfo: BlogCardProps = DefaultBlogPosts[2];
  const assetsUrl = `/blog/${blogPostInfo.image}`;

  const gif1 = `${assetsUrl}/gif1.gif`;
  const gif2 = `${assetsUrl}/gif2.gif`;
  const img1 = `${assetsUrl}/img1.jpeg`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>


  </BlogPageTemplate>
