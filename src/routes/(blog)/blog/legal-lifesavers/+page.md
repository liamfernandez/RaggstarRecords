<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/managers/BlogManager';
  import { ASSETS_PATH } from '$lib/managers/BlogManager';
  import { orderedBlogPosts } from '$lib/managers/BlogManager';
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

# Don’t Get Duped

As an independent artist, the music industry can be a maze of contracts, legal jargon, and deals that sometimes seem overwhelming. However, understanding a few essential contracts is crucial for protecting your rights and making sure you're fairly compensated for your hard work. In this guide, we’ll break down the key contracts every artist needs to know—without the confusion.

Let’s dive in!


# 1. Recording Contracts

**What It Is**:
A **recording contract** is an agreement between an artist and a record label or producer to record and release music. This is the deal most people think of when they imagine "getting signed." However, even independent artists working with a producer or indie label should have this contract in place.

**Key Terms to Know**:



* **Royalties**: What percentage of sales you receive.
* **Advances**: Money given upfront, often recoupable by the label from your earnings.
* **Master Ownership**: Who owns the master recordings—this is a critical term!
* **Contract Duration**: How long you're tied to the contract and how many albums you’re expected to produce.

**Why It Matters**:
Understanding your recording contract prevents you from being locked into unfavorable deals. Make sure you know how much control you retain over your music. Always negotiate **ownership of your masters** (or at least seek favorable reversion terms). For more about mastering rights, read here.


# 2. Music Licensing Agreements

**What It Is**: \
A **music licensing agreement** allows your music to be used in visual media—like TV shows, movies, commercials, and video games. This is often referred to as **sync licensing**.

**Key Terms to Know**:
* **Sync License**: Allows the synchronization of your music with visual content.
* **Master Use License**: Applies to the actual recording itself.
* **Usage Rights**: Specifies how long, where, and in what context your music can be used.
* **Royalty Splits**: How revenue is shared between you and other stakeholders.

**Why It Matters**:
Licensing your music is one of the best ways to generate revenue beyond streaming and sales. It's also an opportunity to gain exposure on new platforms, helping to grow your audience. Interested in getting into sync licensing? Learn more here.


# 3. Publishing Contracts

**What It Is**:
A **publishing contract** is an agreement between a songwriter and a publisher. The publisher handles song rights, ensures royalties are collected, and promotes your music for opportunities like covers, syncs, and performances.

**Key Terms to Know**:



* **Song Ownership**: Who owns the rights to the composition.
* **Royalties**: How much you earn from performances, streaming, and covers.
* **Publishing Split**: Typically, publishing is split 50/50 between the songwriter and publisher.
* **Admin Duties**: What the publisher will do on your behalf, such as registering songs and tracking royalty payments.

**Why It Matters**:
Publishing deals can make or break your income as a songwriter. You could be missing out on **performance royalties** or **mechanical royalties** (learn more about these here) if you’re not in a proper publishing agreement.


# 4. Producer Agreements

**What It Is**:
This contract outlines the terms of collaboration between an artist and a producer. It should specify the producer’s rights and how they will be paid.

**Key Terms to Know**:



* **Payment**: Whether the producer is paid upfront, through royalties, or a combination of both.
* **Production Credits**: The producer’s credit on the track.
* **Royalties**: What percentage the producer gets from sales and streams.
* **Master Ownership**: Who owns the finished recording.

**Why It Matters**:
Producer agreements help avoid disputes down the road. If you're working with a producer, you need clarity on what their role is and how they'll be compensated. Make sure you know the difference between producer royalties and performance royalties.


# 5. Management Contracts

**What It Is**:
A **management contract** is a formal agreement between an artist and their manager. This contract outlines the responsibilities of the manager, the payment structure, and how long the agreement lasts.

**Key Terms to Know**:



* **Commission Rate**: How much of your income goes to your manager (typically 10–20%).
* **Duties**: What the manager is responsible for—booking gigs, negotiating contracts, etc.
* **Contract Length**: How long the manager will represent you.
* **Exit Clauses**: How either party can terminate the relationship.

**Why It Matters**:
Without a solid management contract, misunderstandings can arise about how much your manager is entitled to or what their responsibilities are. Read more about **how to find a good music manager** here.


# 6. Distribution Agreements

**What It Is**:
A **distribution agreement** governs how your music will be distributed, whether physically (CDs, vinyl) or digitally (Spotify, Apple Music, etc.).

**Key Terms to Know**:



* **Distribution Fees**: How much the distributor takes from sales.
* **Revenue Splits**: The share of earnings between you and the distributor.
* **Platforms and Regions**: Which platforms your music will appear on and in which countries.
* **Duration**: How long the agreement lasts.

**Why It Matters**:
Getting your music out there is crucial, but you need to ensure you’re not losing too much money to distribution fees. **Find out more about distribution options** here.


# 7. Work-for-Hire Contracts

**What It Is**:
A **work-for-hire** agreement is used when you’re hiring someone (like a session musician or audio engineer) to work on your music.

**Key Terms to Know**:



* **Payment**: How much the worker will be paid and when.
* **Rights to the Work**: Clarifies that you (not the hired worker) own the finished product.
* **Release of Claims**: Ensures the worker can’t come back later and claim ownership or royalties.

**Why It Matters**:
These contracts protect your ownership of your work, ensuring that you have the final say and that no one can claim rights to your songs after being paid. Learn more about **work-for-hire** agreements here.


# 8. Performance Contracts

**What It Is**:
A **performance contract** is an agreement between you and a venue or promoter for a live show. This contract ensures that both parties know what to expect on the day of the event.

**Key Terms to Know**:
* **Payment**: How much you'll be paid for the performance.
* **Rider**: Your requirements for sound equipment, hospitality, etc.
* **Performance Time**: When you're expected to perform and for how long.
* **Cancellation Terms**: What happens if the gig is canceled or rescheduled.

**Why It Matters**:
A performance contract ensures that you get paid for your hard work and that the venue meets your technical needs. Read more about the basics of performance agreements.


# 9. Collaboration Agreements

**What It Is**:
A **collaboration agreement** outlines the terms when two or more artists work together on a project. It’s essential to establish who owns what, how profits will be split, and how credits will be shared.

**Key Terms to Know**:



* **Song Credits**: Who gets credit for writing or producing the track.
* **Revenue Split**: How income from sales, streams, and licensing will be divided.
* **Ownership**: Who owns the master recording and intellectual property.

**Why It Matters**:
Collaborations can be great for exposure, but you want to make sure that everyone involved is on the same page. Make sure your **collaboration agreement is solid** here.


# 10. Merchandising Contracts

**What It Is**:
A **merchandising contract** allows a company to produce and sell items (T-shirts, posters, etc.) with your name or likeness.

**Key Terms to Know**:
* **Royalties**: How much you’ll earn from each item sold.
* **Production Costs**: Who covers the cost of making the merchandise.
* **Quality Control**: What rights you have to approve the design and quality of products.
* **Term of Agreement**: How long the agreement lasts.

**Why It Matters**:
Merchandising can be a great revenue source, but you need to ensure you’re paid fairly and that the products meet your standards. **Learn more about merchandising deals** here.


### **Conclusion**

Contracts may not be the most exciting part of your music career, but they are critical. By understanding the key terms in each of these agreements, you can avoid common pitfalls and set yourself up for long-term success. Take control of your music career, protect your work, and ensure you get paid for your artistry.


</BlogPageTemplate>
