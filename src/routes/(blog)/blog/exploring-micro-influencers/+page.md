<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/repositories/BlogPostRepository';
  import { ASSETS_PATH } from '$lib/repositories/BlogPostRepository';
  import { orderedBlogPosts } from '$lib/repositories/BlogPostRepository';
  import { page } from '$app/stores';

  const blogPostInfo: BlogCardProps = orderedBlogPosts.find((post) => post.slug === $page.route.id?.split('/')[3]);
  const assetsUrl = `${ASSETS_PATH}/${blogPostInfo.image}`;

  const gif1 = `${assetsUrl}/gif1.gif`;
  const img1 = `${assetsUrl}/img1.jpeg`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction
> Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# What’s a Micro-Influencer Anyway?

Ever heard the saying, “It’s not the size that matters, but how you use it”? Well, that’s especially true when it comes to influencers. You don’t need a Kardashian to blow up your music career. Sometimes, all it takes is a micro-influencer—those with smaller, but super engaged followings—to get your music heard by the right people. Let’s break it down.

Think of micro-influencers as the unsung heroes of the social media world. They’ve got anywhere from 1,000 to 100,000 followers—not millions—but those followers hang on to their every word. These influencers are niche, authentic, and highly trusted by their audience. Perfect for indie artists who want to reach specific communities without breaking the bank.


# Why Micro-Influencers Are Your New BFFs



1. **Authenticity Wins:** Micro-influencers are like that cool friend who always knows what’s hot before anyone else. Their followers trust their recommendations, making them gold for promoting your music.
2. **Affordable Awesomeness:** Big influencers charge big bucks. Micro-influencers? Not so much. You get more bang for your buck and often more genuine engagement.
3. **Targeted Reach:** Want to hit that niche lo-fi crowd or those indie hip-hop heads? Micro-influencers are already plugged into those scenes and can introduce your music directly to your ideal listeners.
4. **Long-Term Love:** Building relationships with micro-influencers can lead to ongoing partnerships. It’s not just a one-and-done deal; it’s a friendship that can grow alongside your career.


# Finding Your Perfect Match



* **Do Your Homework:** Look for influencers whose style and audience match your music. Tools like BuzzSumo and HypeAuditor can help.
* **Engagement Over Followers:** Focus on those who have strong engagement (likes, comments, shares) rather than just a large follower count.
* **Be Genuine:** When you reach out, make it personal. Comment on their content, share their posts, and then pitch them your music.


# Make the Magic Happen



* **Content is King:** Collaborate on content that showcases your music in a way that feels natural to the influencer’s brand. Think playlist features, IG stories, or even a fun TikTok challenge.
* **Cross-Promote:** Share their posts on your platforms too. It’s all about building a mutually beneficial relationship.
* **Track Success:** Keep an eye on metrics—streams, follows, engagement—to see what’s working and what’s not.


# Success Stories

Don’t believe the hype? Check out indie artists who’ve blown up thanks to micro-influencers. These small partnerships can lead to big things—radio play, streaming spikes, and even record deals.


# TLDR

Micro-influencers might be small, but they pack a punch. For independent artists, they offer a direct line to engaged, passionate audiences without the hefty price tag of big-name influencers. So, start small, think big, and watch your music career grow.


</BlogPageTemplate>
