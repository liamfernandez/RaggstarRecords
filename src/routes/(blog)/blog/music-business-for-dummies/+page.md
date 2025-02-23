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
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction

Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**


# I F#cked Up
This past week, I had a dispute with one of my producers(you know who you are) over how royalties are split for an exclusive beat. This producer came to me for advice and the information I gave him turned out to be **completely false**. I had been misled for years about how these things work and it wasn’t till after I was so confused by why this producer was telling me I was wrong that I had to go research the topic to see that I was in fact, incorrect. “Embarrassing” - in Drake’s voice.

![drake embarrassing]({gif1})

SO, in today’s post, we are going to **de-mystify the business of music**. The music business has been systematically designed to be kept secret from artists and producers, leaving them in the dark. Gatekept by those only at the top of the mountain, it always seemed to me that the only ones who truly knew what was going on are the CEOs of major labels and their extensive legal team. Far too often I see producers and artists get misled(including me) by false information from their “friends” in the music industry or someone on the internet who claims they are a music guru who will magically get you famous for only $15.99/month(please do not give these guys your money).

Why is it that no one understands the music business besides those at the top of the industry? Don’t you think that’s messed up? That’s how they have been able to take advantage of artists all these years by locking them into deals that sign their lives away and profit billions from the artists’ hard work while giving the artists peanuts. I call this “The Druski Model”. Otherwise referred to as a **360 deal, where the label takes a majority cut** out of every revenue-driving factor the artist has.

![druski acting a fool]({gif2})

Well, I for one, am sick and tired of the major labels withholding all of this information. And I wouldn’t be surprised if you are fed up with them too. So, today, we are going to explain the business of music to you all. After reading this, you should be well-equipped with the knowledge to walk into any board room meeting and hold your own against the suits of the industry.

# The Names of The Game
First, let’s get an understanding of all the legal mumbo jumbo these agents, A&Rs, and legal teams always refer to in order to throw artists off. This right here is half of the battle. If you can understand what all of this terminology means we’ll be in good shape. This will be a lot of information so what we have done is broken down each term into its simplest form so you can understand what they mean at its fundamental level.

1. **Record Label Deals:** This is an agreement between an artist and a record label where the label helps produce, distribute, and market the artist's music. In return, the label gets a percentage of the earnings.

2. **Publishing Deals:** These deals involve the rights to the musical compositions (the music and lyrics). A publishing company manages these rights for the songwriter and ensures they receive royalties for the use of their compositions.

3. **Distribution Deals:** This type of agreement is about getting the music out to the public through various channels. It can involve physical distribution (CDs, vinyl) and digital distribution (streaming platforms).

4. **Licensing Agreements:** These agreements allow someone else to use a piece of music in exchange for a fee. This can be for TV shows, movies, commercials, video games, etc.

5. **Sync Licenses:** A specific type of licensing agreement that allows music to be synchronized with visual media, like a song being used in a movie soundtrack.

6. **Mechanical Royalties:** These are paid to songwriters/composers when their music is reproduced (CDs, vinyl, digital downloads). A mechanical license agreement covers this.

7. **Performance Royalties:** Earned when music is performed publicly - radio, live venues, streaming services. Organizations like BMI and ASCAP collect these royalties for artists.

8. **Producer Agreements:** This agreement outlines the relationship between a producer and an artist or label, including compensation (often a flat fee and/or royalties) for producing music.

9. **Exclusive Beats:** When a producer sells a beat to an artist exclusively, meaning only that artist can use the beat. The specifics of royalties and rights should be outlined in the agreement.

10. **Leased Beats:** Unlike exclusive beats, leased beats allow the producer to sell the same beat to multiple artists. The leasing agreement will specify the terms, including any limitations on usage and whether the lease is for a certain number of sales, streams, or a time period.

11. **Sample Clearance:** If an artist uses a portion of another artist's song (a "sample"), they must get permission through a sample clearance agreement. This usually involves paying a fee and agreeing on how royalties are shared.

12. **Copyright Agreement:** This is a legal document that outlines the rights of the copyright holder (usually the creator of the work) and protects against unauthorized use.

You got that? We cool? Cool. Now let’s break this chunk of info into sections and dive a little bit deeper. Stay with me here.

# Section 1: Types of Music Agreements
### Exclusive Beats Agreement
Imagine you're at a market, and you find a one-of-a-kind hat that no one else has. You buy it, and it's yours alone to wear. An Exclusive Beats Agreement is similar. When a producer makes a beat and sells it to you exclusively, it means only you can use that beat for your songs. No one else can buy or use it after you. It’s like your secret ingredient in making a hit track that stands out because nobody else has access to that beat.

**Example:** You buy an exclusive beat for $500. This is a big investment, but it means your debut single has a unique sound that no other artist can replicate.

### Leased Beats Agreement
Now, imagine instead of buying that unique hat, you rent it. You can wear it for special occasions, but you need to return it, and others can rent it too. A Leased Beats Agreement lets you use a beat for certain conditions, like how many copies of your song you can sell or how many streams you can have. Once you reach these limits, you need to renew the lease or stop using the beat. This option is more affordable and great for artists just starting out who want quality sound without the high price tag.

**Example:** You lease a beat for $50, allowing you to sell up to 2,000 copies of your song. It's a cost-effective way to release your music while you're building your fanbase.

### Music Royalties
Think of Music Royalties as a fruit tree you’ve planted. Every time someone picks a fruit (plays your song), you get a small payment. There are different types of royalties for different ways your music is used, like on the radio, streaming services, or in a movie.

**Example:** Each time your song is streamed on Spotify, you earn a fraction of a cent. It might not seem like much, but as more people listen, those fractions add up.

### Publishing Agreements
Imagine you wrote a book and wanted it in bookstores worldwide. A publishing company would help make that happen and, in return, share the profits with you. Publishing Agreements in music work similarly. A publisher helps get your music out there—like on the radio, in movies, or covered by other bands—and collects royalties. In exchange, they get a percentage because they're using their network and expertise to promote your work.

**Example:** You sign a publishing deal, and your song gets placed in a popular TV show. The publisher collects and splits the earnings with you, usually around 50/50.

# Section 2: Understanding Music Royalties
Royalties are like the seeds you plant that grow into trees, providing fruits (money) every season (whenever your music is played). Here’s a simple breakdown of the different types of royalties and how they work in the music world.

### Performance Royalties
Imagine every time someone plays your song at a concert, on the radio, or even in a coffee shop, a small bell rings. Each ring sends a little coin your way. Performance Royalties are exactly that: money you earn each time your music is performed publicly. These are collected by organizations called **PROs** _(Performing Rights Organizations)_, like BMI or ASCAP in the US, which ensure that composers and publishers are paid for the public use of their music.

**Example:** Your song is played on a local radio station and at a small music festival. The PRO tracks these plays and collects performance royalties, which they then distribute to you. If your song got played 1,000 times on various small radio stations, it might earn you $30 in performance royalties.

### Mechanical Royalties
Think of Mechanical Royalties as a small tax on music sales. Every time someone buys your song or album, whether it's a digital download or a physical CD, or streams it on platforms like Spotify or Apple Music, you earn a bit of money. These royalties are named after the mechanical process of producing physical music copies but now apply to digital sales and streams too.

**Example:** You release a new single and it gets downloaded 500 times on iTunes and streamed 50,000 times on Spotify. For the downloads, you might earn around $0.70 per download after the platform's cut, totaling $350. Spotify pays less per stream, but those 50,000 streams could add another $200 to your earnings.

### Synchronization Royalties
Imagine you create a painting, and someone wants to use a picture of it in their movie. They’d have to pay you for the right to use your work. Synchronization Royalties work the same way but with music. When your music is used in films, TV shows, commercials, or video games, you get paid because they're synchronizing your music with visual media.

**Example:** A TV show wants to use your song in an episode. You or your publisher negotiate a fee for this one-time use, let's say $2,000. This is a synchronization fee, and you get paid it upfront, separate from any performance royalties generated when the episode airs.


### Print Music Royalties
These are a bit old-school but still relevant. Print Music Royalties are earned when your music is transcribed to sheet music, guitar tabs, or any physical or digital music notation that people buy. It's like if someone paid you for the recipe for a famous dish you created.

**Example:** A music publishing company decides to distribute your song's sheet music. Each time the sheet music is sold, you earn a small royalty. If 1,000 copies are sold at $5 each, and you have a 10% royalty agreement, you earn $500.

Royalties are an essential part of your music career’s “income garden.” Understanding them helps ensure you're not leaving any money on the table. Each type of royalty represents a different way your music brings value to people's lives, from being enjoyed on the radio to setting the mood in a movie scene. Plant your music seeds wisely, nurture their growth, and enjoy the fruits of your labor for years to come.

These royalties are more important than anything else when it comes to independent artists. Since you are not getting an advance from the label or any funding behind you. This is how you earn a good chunk of your income, through these royalties. And the great thing about content on the internet is that it pays you forever. So even when you are 65 years old, if old heads are still bumping your music, you’ll still be receiving a check in the mail **EVERY. SINGLE. MONTH.** We will discuss how to make sure you get your royalties in a future blog post.

# Section 3: Rights and Publishing 101
Navigating the maze of music rights and publishing is crucial for every artist. Let's break it down into its fundamentals.

### Copyrights
Copyrights protect your original music, ensuring others can't use it without your permission, much like a "No Trespassing" sign protects your property. Imagine you created a unique recipe. Copyright is the legal way to say, "This is mine, and if you want to use it, you need to ask me first."

**Example:** After writing a catchy tune, you automatically have the copyright to it. If a brand wants to use your song in a commercial, they need to get your permission, often involving a licensing agreement and potentially some compensation for you.

### Music Publishing
Music Publishing deals with your song's copyrights, working to get your music out there and ensuring you get paid for its use, similar to how a book publisher promotes and sells a book. Think of your music as a gadget you've invented. A publisher helps market your invention, finds buyers, and collects the earnings, which are then shared with you.

**Example:** A publisher hears your song and thinks it's perfect for a TV show they're working with. They manage to get your song placed, and every time the show airs, you earn royalties. The publisher takes a cut for their work, but you gain exposure and income you might not have had otherwise.

### Collecting Royalties
Collecting Royalties is about keeping track of where and how often your music is played so you can be paid accordingly, akin to having a system in place to collect rent from properties you own. Consider you have a lemonade stand in multiple locations. Collecting royalties is like ensuring you get every penny owed from sales across all these stands, even when you're not there to oversee them.

**Example:** Your song becomes a hit and is played across various radio stations and streaming platforms. Organizations like ASCAP or BMI track these plays and collect performance royalties, while a mechanical rights organization ensures you're compensated for streams and downloads, making sure you receive every dime you're due.

### Sample Clearances
Using someone else's music in your song (a "sample") requires permission. Sample clearances are the green light from the original creator or rights holder, allowing you to legally use their music in your work. Think of borrowing a friend's bike to ride in a race. You need to ask and get a "yes" before you can use it.

**Example:** You sample a classic 70s funk riff in your track. Before you release the song, you need clearance from the rights holder of the original funk song, ensuring you're legally covered to use that groovy beat.

Understanding these key components empowers you to make informed decisions about your music career, ensuring your creative work is not only protected but also profitable. As you navigate the complexities of the music industry, **remember that knowledge is power**, especially when it comes to rights and royalties.

# Section 4: Tips for Navigating Agreements
These legal agreements can read like a maze. Here are some tips to help you find your way through without getting lost.

### Reading and Understanding Contracts
Before you sign anything, make sure you know exactly what it means. Contracts can be tricky, and every word matters. Think of a contract like a recipe for a giant cake. If you miss or misunderstand one ingredient (clause), the whole cake (agreement) might not turn out how you expected.

**Example:** You’re offered a contract to sign with a music label. It says they'll take 50% of your earnings from streams and performances. Make sure you understand what that means for your income and if there are any conditions under which the percentage could change.

### Seeking Professional Advice
When you're unsure about a contract or a deal, talking to someone with experience can be a game-changer. If you’re not feeling well, you go to a doctor rather than trying to diagnose yourself. Similarly, for legal advice on contracts, consult a professional like a music lawyer.

**Example:** You're unsure if the publishing deal you've been offered is fair. A music attorney can explain the terms, suggest changes for your benefit, and ensure you're not signing away more rights than you should.

### Negotiating Deals
Remember, almost everything in music agreements can be negotiated. Don’t be afraid to ask for what you believe your music is worth. It's like haggling at a market. The price tag on an item isn’t always the final price. If you can make a case for why it should be lower (or in music, why you should get a better deal), you might just get it.

**Example:** A label offers you a contract with a 25% royalty rate on your recordings. You believe your unique sound and fanbase justify a higher rate, so you counter with a request for 30%. Through negotiation, you agree on a 28% rate, giving you a bigger slice of the pie.

This section boils down to being prepared, seeking expertise when needed, and **not being shy about negotiating your worth**. Understanding these agreements is crucial in ensuring your rights are protected, and you're fairly compensated for your artistry. Equip yourself with knowledge, and don’t hesitate to seek help when you need it.


# Talk To Us
If you ever need any help with navigating through these situations please do not hesitate to reach out to us at [raggstarrecords@gmail.com](mailto:raggstarrecords@gmail.com). We answer every single email and we will continue to do so until the power is back into the hands of the artists, where it belongs!!! I know this blog post was a long one but it is a good idea to keep this bookmarked and refer back to it whenever you may need it. As always, keep going, never give up, and keep on making great music!


</BlogPageTemplate>
