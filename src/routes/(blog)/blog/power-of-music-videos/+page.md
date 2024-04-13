<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/managers/BlogManager';
  import { DefaultBlogPosts } from '$lib/managers/BlogManager';

  const blogPostInfo: BlogCardProps = DefaultBlogPosts[2];
  // COPY EVERYTHING ABOVE THIS LINE

</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# NOW WE CAN WRITE

</BlogPageTemplate>
