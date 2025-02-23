<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/repositories/BlogPostRepository';
  import { ASSETS_PATH } from '$lib/repositories/BlogPostRepository';
  import { orderedBlogPosts } from '$lib/repositories/BlogPostRepository';
  import { page } from '$app/stores';

  const blogPostInfo: BlogCardProps = orderedBlogPosts.find((post) => post.slug === $page.route.id?.split('/')[3]);
  const assetsUrl = `${ASSETS_PATH}/${blogPostInfo.image}`;

  const gif1 = `${assetsUrl}/gif1.gif`;
  const gif2 = `${assetsUrl}/gif2.gif`;
  const gif3 = `${assetsUrl}/gif3.gif`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction
Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# The Elephant in the Room
This week, I want to discuss a controversial topic. The potential **ban of TikTok**. Now, no matter how you feel about the platform, whether you are a daily user or don’t even have the app. The numbers do not lie. When it comes to music, TikTok’s algorithm is the best platform for independent artists to create an engaging fanbase/exposure for new artists' music on a mass scale we have never seen before. The potential ban could derail both existing careers and **diminish the potential for new talent to arise**. We obviously cannot control the outcome of the decision by the U.S. federal government. What we can do is prepare for the worst-case scenario and shed light on the issues at hand. Whatever the result is, music will not go away, but the delivery in which you reach your audience must evolve with the times. Let’s get into it.

![elephant]({gif1})

# Section 1: TikTok's Influence on Music Trends

**Viral Hits and Career Launches**

TikTok has become a powerhouse in the music industry primarily due to its ability to turn snippets of songs into viral sensations overnight. This platform has changed the game by **democratizing music discovery**; no longer do listeners rely solely on radio or traditional media to find new music. Instead, TikTok's short-form video format allows users to create and share content that can make a song a global hit within weeks. Artists like **Lil Nas X** rose to fame almost exclusively due to viral trends on TikTok, with his hit "Old Town Road" becoming a cultural phenomenon. Similarly, **Doja Cat’s career** catapulted to new heights with the success of "Say So," thanks to a dance challenge that swept across TikTok, illustrating the platform's power to affect music charts worldwide.

One of TikTok’s most recent success stories is **Tyla**: a 21-year-old RnB artist from South Africa famous for her hit song “Water”. This dance got so popular on the app that they have the most uncoordinated men I have ever seen moving their hips like there is no tomorrow just to get in on the trend.

![tyla]({gif2})

# Music Discovery Mechanism

TikTok's algorithm is uniquely designed to **promote discoverability**. Unlike platforms that prioritize content from established friends and accounts, TikTok introduces users to new content **regardless of the original poster's follower count**. This feature is particularly beneficial for emerging artists, as it provides a level playing field for new music to reach an audience that might not have been accessible through other means. The algorithm’s emphasis on user engagement—measured through likes, shares, and comments—ensures that content that resonates with people reaches a **wider audience**. This system has not only allowed unknown musicians to break into the scene but also helped songs from various genres gain unprecedented attention, thus broadening musical diversity accessible to the general public.

# Section 2: Potential Impacts of a TikTok Ban

**Reduced Exposure for Emerging Artists**

TikTok has emerged as a crucial platform for new artists seeking to break into the music scene. Its ability to propel songs to viral status has made it an indispensable tool for music promotion. With its wide reach and highly engaged user base, TikTok offers unmatched visibility that can be equivalent to **years of traditional marketing**. Should TikTok be banned, emerging artists would lose a significant avenue for exposure. This could slow career advancements for new artists who often rely on the platform's viral nature to **leapfrog the traditional barriers** to entry in the music industry. The absence of TikTok would necessitate finding alternative methods to gain similar visibility, which could be a lot more expensive and less effective for artists just starting.

![sad rodrigo]({gif3})

**Changes in Music Promotion Strategies**

The music industry has increasingly integrated TikTok into its standard promotional strategies. Record labels and artists frequently use the platform to launch new releases, engage fans, and even scout new talent based on trending content. A ban on TikTok would compel the industry to overhaul these strategies and possibly **shift focus back to more traditional methods** such as radio play, online ads, and other social media platforms. However, these methods do not offer the same organic engagement and algorithmic promotion that TikTok does, potentially leading to decreased efficiency in reaching target audiences. Moreover, the industry would need to invest in and bolster its presence on alternative platforms, such as **Instagram Reels or YouTube Shorts**, which might not yet have the same level of impact or user engagement for music discovery.


# Section 3: Alternative Platforms and Solutions

**Existing Platforms**

In the event of a TikTok ban, the music industry would likely pivot to other existing social media platforms that offer similar short-form video capabilities. Platforms like Instagram Reels, YouTube Shorts, and Snapchat Spotlight stand as the most direct alternatives. Each platform has its unique features and audience demographics:

* **Instagram Reels:** Offers seamless integration with Instagram's existing user base, which is highly engaged and diverse. Reels provides a familiar environment for brands and artists to create visual content that can be easily shared within the Instagram ecosystem, benefiting from its sophisticated targeting and advertising capabilities.

* **YouTube Shorts:** Leverages YouTube’s extensive reach and the robustness of its content discovery engine. It provides a platform for artists to create short videos that can benefit from YouTube's recommendation algorithms, which are excellent at pushing content to relevant audiences.

* **Snapchat Spotlight:** Targets a younger demographic and offers significant monetary incentives for viral content, which can be particularly appealing for emerging artists looking to gain quick exposure.

**Emerging Technologies**

Aside from the established giants, several emerging platforms and technologies could grow to fill the void left by TikTok. These include:

* **Triller:** Often seen as a direct competitor to TikTok, Triller focuses more on music video creation and has partnerships with several major music labels. Its music-centric approach could make it a natural home for artists looking to promote their tracks.

* **Byte:** Created by a co-founder of Vine, Byte reimagines the short-form video concept with a focus on community and creativity, offering new opportunities for artists to connect with fans.

* **Verzuz:** Originally a platform for artists to battle head-to-head with their hit songs, Verzuz has expanded into a broader cultural platform that could potentially incorporate more interactive and fan-driven content, providing another promotional channel for artists.

# The Path Towards the Unknown

The potential banning of TikTok could represent a **significant shift for the music industry**, which has come to rely heavily on the platform's unique ability to create viral music hits and foster new talent. TikTok's ease of use, its algorithmic promotion of content, and its deeply engaged community have made it an indispensable tool for music discovery and artist promotion. Losing TikTok would challenge artists and labels to find new ways to achieve the same level of visibility and engagement.

However, the music industry is **no stranger to evolution and adaptation**. The rise of digital music, streaming platforms, and social media has continuously reshaped how music is produced, promoted, and consumed. The potential void left by TikTok's absence would likely be filled by a combination of established platforms like Instagram Reels and YouTube Shorts, as well as emerging technologies that could capture the cultural zeitgeist in new and exciting ways.

</BlogPageTemplate>
