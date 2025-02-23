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
  const img1 = `${assetsUrl}/img1.jpeg`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction
Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# A Quick Note From the Author
Hello creative people! We have made it to the third blog for the third week in a row! Wooohoooo Let’s goooo!!! I appreciate every single one of you that has been reading these resources. Our only intention is to provide as much value and guidance to y'all as much as possible. We do this for you and take into account any feedback that you may have. It has come to our attention that the last two blogs were “a lot to read”. AKA ain’t no one got time to read all this Rags! Shorten the blog please.

At first, I thought, “man these kids have no attention span these days”. Then, I got a call from my Boomer parents asking why the articles were “so long and boring”. Thanks Mom and Dad 🙄🙄🙄. With that being said, we will start to condense these articles into a quicker and easier read. Same value and same info in a shorter amount of time. I thank you all for reaching out to me with your feedback. At the end of the day, it makes me a better writer and hopefully - a better resource for you.

# The Power of Visuals
Now that we have a set of songs that you love and are ready to be released, let’s get down to business. Visuals are the single **biggest marketing tool to leverage your growth**. On average, songs that have a video associated with them get 20-50% increase in engagement and streams(Music Business Worldwide, 2023). The virality factor and shareablity of a visual piece allows a bunch of  positive benefits to occur, here are a few:

1. **Visibility and Discoverability:** Music videos uploaded to platforms like YouTube, Vimeo, or even social media channels improve a song's visibility. These platforms have vast audiences and sophisticated recommendation algorithms that can introduce the music to a wide array of listeners, increasing the chances of discovery.

2. **Shareability:** Visual content is more likely to be shared across social media platforms than audio-only content. A compelling music video can be shared across social networks, blogs, and other websites, increasing its reach and engagement.

3. **Enhanced Connection:** Videos provide a visual narrative that can enhance the emotional connection to the song. This visual storytelling can make the song more memorable and engaging, leading to increased streams, downloads, and shares.

4. **Cross-platform Promotion:** Music videos can be promoted across various platforms, not just on music streaming services. They can be used in teasers, behind-the-scenes content, and promotional snippets on social media, driving engagement across multiple channels.

5. **Improved Chart Performance:** Songs with music videos often chart better on music platforms, social media trending lists, and even traditional music charts. The visual component can help a song stand out among the vast sea of audio-only tracks.

![all eyes on you]({gif1})

The main takeaway from all of this is getting in front of as many eyeballs as possible. You have a great product! But if no one knows you have the best product in the world, it’s useless. This is why major companies use content creation as their main source of advertisement. How often do you see the same advertisement for Coca-Cola? Apple? Budweiser?

These companies spend tens of millions each year just to get in front of your eyes to **stay top of mind**. Budweiser doesn’t make the best alcohol. Apple doesn’t make the best phones. And Coke doesn’t make the best bevereages. But guess what? We, as consumers, buy them because that is all we see. They flood the ecosystem with their marketing so whenever you do want a soda, a phone, or a beer, you go to them first! Without even thinking about the alternatives.

# Telling Your Story Through Visuals
Now this - is the fun part.This is where you get to be your true authentic self. Whether you’re a drill rapper or a LoFi-Pop artist, this is where you show the world your real creative prowess. Let me remind you about world-building again. This is where you bring your fans into your world. Your universe! Who are you? What do you do when you are alone? How does the song you made make you think? How does it make you feel? How do you want your fans to perceive it? How do they perceive you?

All of these questions need to be considered when bringing someone into your world. In your visual, you need to move with intention. This doesn't mean you need a $25,000 Lyrical Lemonade 4-minute cinematic video. All you need is a visual that can convey your message to your listeners. This could be in the form of a vlog, a skit, or a any sort of short form visual(1 minute or less). Anything that can attract more eyeballs onto your song is a positive. The goal here is to build a portfolio of work, just like how you have done with your audio, you now have songs or an album or EP on Apple Music and Spotify. Now we want to build your YouTube, TikTok, and Instagram with the same portfolio. Just this time around, it’s visual. A good example  talented world builders are LARPers(Live Action Role Players). They are a little bit too good at this.

![mid-evil times]({gif2})

Here are some aspects you should be aware of in your visuals:

1. **Conceptualization and Storytelling:** The first step in visually bringing someone into an artist's world is through a compelling concept or story. This narrative should be intimately connected to the song's lyrics or the artist's personal journey, offering viewers a glimpse into the artist's experiences, thoughts, or fantasies. By weaving a narrative that resonates with the audience, artists can create a shared emotional experience.

2. **Visual Aesthetics and Style:** The visual aesthetics of a music video – including color schemes, lighting, costumes, and locations – play a crucial role in defining the artist's world. These elements can be used to evoke specific moods, highlight themes, or symbolize aspects of the artist's story. A consistent visual style helps in creating a cohesive world that viewers can immerse themselves in.

3. **Symbolism and Metaphor:** Utilizing symbolism and metaphor allows artists to communicate complex emotions and ideas visually. Objects, characters, and settings within a music video can serve as metaphors for broader themes or personal narratives, offering a layer of depth that invites viewers to explore and interpret the artist's world.

4. **Engagement with the Viewer:** Direct engagement with the viewer through eye contact, addressing the camera, or breaking the fourth wall can create a sense of intimacy and connection. This technique invites the audience into the artist's personal space, making the experience more immersive and personal.

5. **Authenticity and Vulnerability:** Ultimately, the most powerful way an artist can bring someone into their world is by being authentic and vulnerable. Sharing genuine emotions, struggles, and triumphs through visual content can forge a deep, emotional connection with the audience, making the artist's world feel real and relatable.

# It Takes Time
Always remember, Rome was not built in one day, and neither was your audio or visual portfolio. This will take months or years depending on how fast you work. The best thing that you can do for yourself is be consistent and try as much as possible. Odds are, no one knows who you are. And guess what? No one knows who I am either. We are all just trying to figure it out day by day. The only way to figure out if something works is by doing the work faithfully. Embrace failure, because it will happen. And it will be the best professor you ever have in life. We are all going to die some day, so post that IG reel. Do that TikTok dance(unless it’s cringy). Post that music video that you’re embarrassed of. Because in the end, none of this matters, it will just be another video on the internet lost in the sea of the deep web. We might as well be happy with what we have today. We live in the present, which is the best time to be alive. So let’s make the most of it! As always we are here for you and encourage you along your journey. Please feel free to reach out to RaggStar with any questions you may have about building your visual portfolio and career. We would love to hear from you!


</BlogPageTemplate>
