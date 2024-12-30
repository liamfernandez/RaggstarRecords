<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/managers/BlogManager';
  import { ASSETS_PATH } from '$lib/managers/BlogManager';
  import { orderedBlogPosts } from '$lib/managers/BlogManager';
  import { page } from '$app/stores';

  const blogPostInfo: BlogCardProps = orderedBlogPosts.find((post) => post.slug === $page.route.id?.split('/')[3]);
  const assetsUrl = `${ASSETS_PATH}/${blogPostInfo.image}`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction
> Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# Research the Right Influencers and Blogs

In today’s digital-first music industry, getting your music heard often starts with reaching the right people. Influencers and blogs play a pivotal role in giving independent artists the exposure they need to grow their audience. But here’s the kicker: it’s not just about spamming your SoundCloud link to anyone with a blue checkmark. Successful pitching is an art. This guide will walk you through crafting the perfect pitch to get your music featured on blogs and shared by influencers who can amplify your reach.

Pitching your music is pointless if you’re not targeting the right audience. Start by identifying blogs and influencers who align with your genre and vibe.



* Use platforms like Instagram, TikTok, and Twitter to find influencers actively sharing music in your niche.
* Look at blog directories like **Hype Machine** or **SubmitHub** to locate blogs that frequently cover artists in your genre.
* Check out who’s supporting similar artists. For example, if your sound is like Bryson Tiller or Summer Walker, research the influencers and blogs that promote their music.


# Crafting the Perfect Pitch

Think of your pitch like a mini story—engaging, concise, and clear. Here’s how to structure it:



* **Personalize It:** Start by addressing the influencer or blog by name and mentioning something specific about their content (e.g., “I loved your review of XYZ’s latest single!”).
* **The Hook:** Briefly explain why your music fits their audience. Highlight any unique features of your song or story that stand out.
* **Your Bio:** Keep it short. Include key accomplishments (e.g., streams, features, or collaborations).
* **Links:** Share a link to your best song, preferably hosted on a clean, professional platform like Spotify, YouTube, or your EPK.

**Pro Tip:** Always double-check spelling and grammar. A sloppy pitch screams unprofessionalism.


# Building Relationships, Not Just Sending Messages
**Cold DMs can only take you so far. Build relationships with influencers and bloggers before you need something from them:**



* **Engage with Their Content:** Like, comment, and share their posts to show genuine interest.
* **Be Authentic:** Don’t just butter them up for a feature; show you respect their work.
* **Offer Value:** If you can, share their blog posts or recommend them to other artists.


# Follow-Up Without Being Annoying
**Didn’t get a response? Don’t panic. Influencers and bloggers receive dozens of messages daily. Wait a week, then send a polite follow-up.**

Example:

> “Hi [Name], I hope you’re doing well! I just wanted to follow up on the message I sent last week regarding my new single. Let me know if you’d like me to resend the link. Thanks!”

If there’s still no response after two follow-ups, move on. Rejection is part of the game.


# Leveraging Small Wins
**Getting featured on a smaller blog or shared by a micro-influencer is still a big deal. Use these victories to your advantage:**



* Share the feature across your social channels.
* Tag the influencer/blog in your posts to express gratitude.
* Compile these wins into your press kit to boost your credibility for future pitches.


# TLDR

Pitching your music to influencers and blogs is more than just sending messages; it’s about creating meaningful connections that can open doors. Stay persistent, professional, and authentic. Remember: every “no” gets you closer to the “yes” that could change your career.



</BlogPageTemplate>
