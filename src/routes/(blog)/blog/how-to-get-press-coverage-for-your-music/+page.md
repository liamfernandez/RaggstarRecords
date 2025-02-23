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

# Why Press Coverage Matters for Independent Artists

For an independent artist, securing media coverage can be the difference between staying in obscurity and breaking through to a larger audience. Press coverage from blogs, magazines, radio stations, or local news outlets boosts your credibility, exposes you to new listeners, and can lead to opportunities like festival bookings or collaboration offers. But how do you get the media's attention without the help of a professional PR team? This guide will break down the steps you need to take to get your music featured in the press—all by yourself.


## 1. Build a Strong Online Presence

Before reaching out to any media outlet, ensure your online presence reflects the professional image you want to portray. Press outlets will often check your social media, website, and streaming platforms to verify your credibility. Here's how to make sure your online presence is press-ready:

* **Create an Official Website:** Your website serves as a hub for all your music-related content, from your bio and press photos to your latest releases and tour dates. Include a **press kit** section that has all your essential media materials, such as photos, bios, and links to your music.
* **Social Media Activity:** Media outlets often gauge your relevance by how active and engaged you are with your audience on platforms like Instagram, TikTok, and Twitter. Post consistently, engage with followers, and show that you’re active in promoting your music.
* **Professional Photos and Artwork:** High-quality images and cover art are crucial. If a blog wants to feature you, they’ll need polished visuals to accompany their post.


## 2. Craft a Compelling Story

Your music alone may not be enough to capture the media’s attention—you need to have a story. What makes you stand out from other artists? Whether it’s a unique personal background, a socially conscious project, or an inspiring journey as an independent artist, your story should complement your music.



* **Tie Your Story to Current Events:** If there’s a trending topic or social movement that ties into your music, use it as a hook when pitching. For example, if your latest song discusses mental health, pitch it during Mental Health Awareness Month.
* **Highlight Local Roots:** Many local outlets love covering homegrown talent. If you’re an artist thriving in a specific city or region, pitch yourself as a local success story.


## 3. Build Relationships with Journalists and Bloggers

Before sending your music to media outlets, spend some time building relationships with the people who can feature you. Follow local music bloggers, journalists, and radio hosts on social media and engage with their content authentically.



* **Comment and Share Their Work:** If a journalist writes a review of another artist’s work, share it and leave insightful comments. This shows you’re engaged in the music community.
* **Pitch via Email (Not DM):** When the time comes to send your press pitch, always use email. Direct messages (DMs) can seem unprofessional. Use the journalist's preferred contact method if it’s listed in their bio or on the outlet's site.


## 4. Create a Professional Press Kit

A **press kit** is an essential tool for any musician seeking media attention. It’s a one-stop resource that provides everything a journalist needs to write about you. Include the following in your press kit:



* **Short and Long Bio:** The short bio is a concise version (2-3 sentences) that media outlets can quickly use. The long bio should go deeper into your story, including your musical background, influences, and achievements.
* **High-Resolution Photos:** Include a few different professional-quality images (headshots, live performance shots, etc.).
* **Music Links:** Provide direct links to your latest releases on streaming platforms. Make sure these are easy to find and navigate.
* **Press Releases:** If you’re promoting a specific project (album release, music video, tour), write a press release that includes all relevant details and highlights why it’s newsworthy.


## 5. Identify the Right Outlets to Pitch

Don’t just send your music to every blog or publication—target the right ones for your genre and level of exposure. Research outlets that cover independent R&B, hip-hop, or music scenes similar to yours. Some places to look:



* **Local Blogs and Magazines:** Start small by pitching local publications that focus on your region’s music scene.
* **Genre-Specific Blogs:** For R&B and hip-hop artists, blogs like Earmilk, DJBooth, and Underground Hip Hop Blog are great places to start. Look for blogs that feature indie and emerging artists.
* **Podcasts and YouTube Channels:** Many podcasts and YouTube reviewers cover up-and-coming artists. Find shows that focus on your genre and pitch your story.


## 6. Craft the Perfect Pitch Email

Once you’ve identified the right media outlets, it’s time to pitch them your music. Keep the email short and professional. Here’s what to include:



* **Personalized Introduction:** Address the recipient by name and mention why you’re contacting them specifically. For example, reference a recent article they wrote that you enjoyed.
* **Your Story:** Briefly describe who you are and what makes your music unique.
* **Relevant Links:** Include links to your music, social media, and press kit (if applicable). Make sure the links are easily accessible and work across all devices.
* **Call to Action:** Clearly state what you’re asking for—whether it’s a feature, interview, or review. Be polite and thank them for their time.


## 7. Follow Up (But Don’t Be Pushy)

If you don’t hear back from a journalist or blogger, follow up after about a week. Keep your message polite and professional—don’t bombard them with emails. A simple follow-up shows persistence without being overbearing.


## 8. Leverage Social Media for Media Attention

Social media is a powerful tool for getting noticed by journalists and bloggers. Here’s how to use it strategically:



* **Tag and Mention:** When releasing new content, tag the media outlets or journalists you’re targeting. Use hashtags like #NewMusic and #PressFeature to get noticed.
* **Engage with Their Work:** Sharing their articles, interviews, and other content can help build relationships. When you interact authentically, it increases the chances of your pitches being taken seriously.


## 9. Celebrate Small Wins and Build Momentum

Getting your first feature may take time, but once you start, you can use each new piece of press to build momentum. Celebrate each feature by sharing it with your audience on social media, in your newsletters, and on your website.



* **Thank the Journalist Publicly:** After your feature, publicly thank the journalist or blogger on social media. Tag them to show your appreciation, which may encourage future collaboration.
* **Add to Your EPK:** Once you get coverage, make sure to add it to your electronic press kit (EPK) for future pitches. Include links to articles, interviews, and reviews.


## Consistency Is Key

Gaining press coverage as an independent artist takes time, effort, and persistence. By crafting a compelling story, building relationships with journalists, and targeting the right outlets, you can secure valuable media attention without a PR team. Stay consistent, follow up on your pitches, and celebrate every win, no matter how small.

If you have any questions about press outreach or need help crafting your pitch, feel free to reach out! We’re here to help.


</BlogPageTemplate>
