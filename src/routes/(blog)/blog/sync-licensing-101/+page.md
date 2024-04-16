<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/managers/BlogManager';
  import { orderedBlogPosts } from '$lib/managers/BlogManager';
  import { page } from '$app/stores';

  const blogPostInfo: BlogCardProps = orderedBlogPosts.find((post) => post.slug === $page.route.id?.split('/')[3]);
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction
Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# What Is Sync Licensing?
Sync licensing, short for "synchronization licensing," refers to the permission granted by the copyright owner of a piece of music to synchronize it with some form of visual media output. This could be anything from a TV show, movie, or commercial to a video game or online content. Essentially, when you obtain a sync license for your music, you're allowing your music to be paired with visuals, creating a combined work that is then distributed across various platforms.
### Why It Matters
1. **Revenue Generation:** Sync licensing can be a lucrative revenue stream. Artists are paid upfront for the license, and in some cases, may also earn performance royalties every time the show or film is aired or streamed.
2. **Exposure:** Having your music featured in a popular TV show, movie, or ad can dramatically increase your visibility. It introduces your music to a broad and diverse audience, potentially leading to increased streams, sales, and fanbase growth.
3. **Brand Association:** Your music's association with certain brands, shows, or films can enhance your brand as an artist. It positions your music within certain contexts, moods, or narratives that resonate with viewers, potentially aligning your art with the cultural zeitgeist.
4. **Career Opportunities:** Successful sync placements often lead to more opportunities. A well-placed song can catch the attention of music supervisors, directors, and other industry professionals, opening doors to future projects and collaborations.

# Preparing Your Music for Sync Opportunities
Creating music with sync appeal means considering the themes, lyrics, and production quality of your tracks. Music executives look for songs that can complement or enhance the visual content they're working with. Additionally, owning your music rights or having clear permission to use the music is crucial, as this simplifies the licensing process for all parties involved. Before your music can catch the eye (or ear) of a music supervisor, it needs to be meticulously prepared. This preparation goes beyond just creating compelling music; it involves ensuring your tracks are technically and legally ready for sync opportunities.

- **Broadcast Quality:** Your submissions must be of broadcast quality. This means your recordings should be indistinguishable from the professional tracks you hear on the radio or in already-produced visual media. Achieving such quality often requires proficient recording, engineering, and mixing skills. Increasingly, artists and producers are able to produce broadcast-quality music in home studios, utilizing both their talents and the global network of musicians and vocalists who can contribute remotely​ (Ari's Take)​.

- **Rights and Clearances:** Having the rights to your music straightforward and clear is crucial. This involves ensuring you have complete ownership or the appropriate licenses for all aspects of your song, including samples, if used. For TV and films, two rights must be secured: the synchronization license (from the songwriter or publisher) and the master use license (from the recording owner). This dual licensing is crucial because it permits your music to be legally used in conjunction with visual content​ (Ari's Take)​.

- **Instrumental Versions and Lyrics:** Providing instrumental versions of your tracks can increase your placement opportunities, as many scenes may require music without vocals. Furthermore, having clean, non-explicit versions of your songs can make your music more versatile and suitable for a broader range of content.

# How to Get Your Music in TV and Films
Music libraries, sometimes referred to as production music libraries, play a vital role in connecting artists with TV shows, films, commercials, and video games needing music. These libraries act as a bridge between your music and the visual media producers looking to license new tracks. These libraries pitch and license songs for various media, which is another avenue for artists. These libraries can either work on a non-exclusive or exclusive basis with artists, taking a share of any licensing fees as well as the publisher's share of performance royalties​

- **What Are Music Libraries?:** They are collections or catalogs of music tracks available for licensing. Unlike traditional music publishers that often seek to place songs with recording artists, music libraries focus on securing placements in various media. These libraries can have extensive catalogs spanning a wide range of genres and styles​ (Ari's Take)​.
- **How They Work:** Music libraries typically acquire music either by contracting composers to create a large quantity of material or by accepting submissions from independent artists and composers. Your music could be one of thousands of tracks available for licensing, making it accessible to music supervisors on a global scale.
- **Exclusive vs. Non-Exclusive Agreements:** When you place a song with a music library, you might enter into an exclusive agreement, where you give up the right to have another company represent that song, or a non-exclusive agreement, where the library might re-title your song to avoid conflicts. Exclusive agreements can provide more focused representation, while non-exclusive agreements offer flexibility to work with multiple libraries​ (Ari's Take)​.
- **Compensation:** Music libraries typically retain a portion of any sync and master use licensing fees, as well as a share of any performance royalties generated. The exact split varies but understanding the potential financial arrangements before you sign is crucial.
- **Considerations for Choosing a Music Library:** Look for libraries with a track record of successful placements in projects similar to where you envision your music fitting. Consider the terms of the contract, especially the length of the agreement and whether it's exclusive or non-exclusive. Also, assess the library's distribution reach and how actively they pitch to music supervisors.

For artists looking to navigate the sync placement world, music libraries offer a valuable pathway to exposure and income. By understanding and utilizing these libraries effectively, artists can significantly enhance their chances of their music being heard on the big and small screens alike.


# Case Studies
By examining the journeys of independent artists who have achieved successful sync placements, we can glean insights and strategies that may help navigate the sync licensing landscape.

### Understanding the Role of Music Supervisors
Music supervisors play a pivotal role in selecting and licensing music for visual media. They work closely with the production's creative team to choose songs that complement the mood and tone of the project. One notable music supervisor, Holly Hung, shared a story about replacing a Coldplay song with a track from a band that had recently been dropped by their label. The song fit the trailer for "Extremely Loud and Incredibly Close" so well that the band received $80,000 for the placement​ [(VoxFeed Blog)](https://blog.voxfeed.com/en/music-placement/)​.

### Ari Herstand's Success with TV Placements
Ari Herstand, a Los Angeles-based musician, offers a compelling case study with about 30 TV placements in his career, including high-profile shows like "One Tree Hill." Herstand emphasizes the importance of music supervisors in the placement process and shares insights into the nuances of working with them. For instance, ensuring your music is not attached as MP3s in emails and listing songs that align with the supervisor's current project are key steps​ [(VoxFeed Blog)](https://blog.voxfeed.com/en/music-placement/)​.

### High-Quality Recordings and the Licensing Process
The recording quality of your submission plays a crucial role since, in most instances, the submitted track is used "as is" in the film or TV show. Broadcast quality recordings, which are comparable to the music heard on the radio, are often produced in home studios and are essential for consideration​ [(Ari's Take)​](https://aristake.com/how-to-get-songs-placed-on-tv-and-in-movies/).

### Strategies for Success:
- Ensure your recordings are of professional, broadcast quality to meet the standards of music supervisors and music libraries.
- Understand the role and importance of music supervisors in the placement process and tailor your submissions to their current projects.
- Consider working with music libraries, which can be a practical step for getting your music in front of music supervisors.

Sync licensing represents a valuable opportunity for independent artists, offering both financial benefits and the potential for significant exposure. By understanding the basics of sync licensing, preparing your music thoughtfully, and approaching the pitching process with professionalism and persistence, you can increase your chances of seeing your music on the big screen—or the screens in living rooms worldwide.

# How to Find Music Supervisors
Networking with music supervisors and understanding where to find them can be instrumental in getting your music placed in TV shows, movies, and other media. Here's how to effectively connect with music supervisors

1. Industry Events and Conferences
Music supervisors often attend industry events, conferences, and panels, where they discuss their work and look for new music. These events can be excellent opportunities for networking. Notable events include:
   - ASCAP "I Create Music" EXPO
   - SXSW (South by Southwest)
   - MIDEM
   - Sync Summit

   Attending these events can give you the chance to meet music supervisors in person, learn about their music needs, and even pitch your music directly.

2. **Online Platforms and Social Media**
Music supervisors are active on social media and professional platforms like LinkedIn. Engaging with them through these channels can be a way to introduce yourself and your music. Follow their work, engage with their posts in a meaningful way, and when appropriate, reach out with a brief, professional message about your music.
3. **Workshops and Panels**
Music supervisors often speak at workshops and panels where they share insights into the music placement process. Attending these sessions can provide valuable knowledge about what music supervisors are looking for, and offer networking opportunities. Sites like Eventbrite or Meetup may list relevant workshops and networking events in your area or online.
4. **Direct Contact**
Reaching out directly via email can be effective if done respectfully and professionally. Your initial contact should be concise, personalized, and include links to your music that are easy to access and download if interested. Do not attach large files or send unsolicited material without permission. A brief introduction, an understanding of their work, and a clear explanation of why your music might fit their projects can make a difference.
5. **Online Music Libraries and Licensing Platforms**
Platforms like **_Music Vine, Artlist, and Songtradr_** not only act as libraries for your music but sometimes offer networking opportunities with music supervisors who use these platforms to find music. Being active and having your music on these platforms can increase your visibility.
6. **Music Industry Databases**
Resources like the **_Music Supervisor Guide_** provide databases of music supervisors, including their contact information and credits. These databases can be invaluable for targeted outreach but use this information respectfully and professionally.
7. **Trade Publications and Websites**
Staying informed through trade publications like **Billboard, Variety, and The Hollywood Reporter** can provide updates on music supervisors, their projects, and potential opportunities. Websites dedicated to the sync industry, such as SyncTank, also feature interviews, tips, and directories that can be useful for networking.

**Networking Tips:**
- Be Genuine: Show genuine interest in their work and be respectful of their time.
- Be Prepared: Have a clear pitch and know your music’s potential place in their projects.
- Follow Up: If you’ve made a contact, a polite follow-up can keep the conversation going without being intrusive.
- Stay Informed: Keep up with industry news, trends, and projects that music supervisors are working on to find relevant opportunities for your music.

# Talk To Us
If you ever need any help with navigating through these situations please do not hesitate to reach out to us at [raggstarrecords@gmail.com](mailto:raggstarrecords@gmail.com). We answer every single email and we will continue to do so until the power is back into the hands of the artists, where it belongs!!! This was another long blog post but it is a good idea to keep this bookmarked and refer back to it whenever you may need it. As always, keep going, never give up, and keep on making great music!

</BlogPageTemplate>
