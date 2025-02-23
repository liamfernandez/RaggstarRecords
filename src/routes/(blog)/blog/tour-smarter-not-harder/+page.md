<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/repositories/BlogPostRepository';
  import { ASSETS_PATH } from '$lib/repositories/BlogPostRepository';
  import { orderedBlogPosts } from '$lib/repositories/BlogPostRepository';
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

# I. Pre-Tour Planning

Touring as an independent artist is one of the most exciting and profitable ways to grow your fanbase and generate income. But it can also be a financial risk if not properly planned. This guide will break down how you can organize a successful tour, from setup to the business side, ensuring that you not only reach more fans but also avoid common money pitfalls.

Before you hit the road, it's essential to have a game plan. Touring isn't just about performing—it’s about managing a traveling business. So, here’s where you start:


#### **Set Realistic Goals for Your Tour**

The first step to a successful tour is identifying your goals. Are you trying to expand your fanbase in new regions? Do you want to make a profit, or is this more about gaining exposure? Knowing your goals helps you design a tour that aligns with your financial expectations.



* **Local, Regional, or National?** Choose the scope of your tour based on your fanbase and budget. Starting with a regional tour can help minimize costs while growing your audience gradually.


#### **Create a Budget**

Creating a detailed budget is crucial. Touring costs add up quickly—think transportation, lodging, meals, crew, and equipment. Write down every possible expense and figure out how much money you need to cover these costs. It’s helpful to identify potential revenue sources like ticket sales, merch, and sponsorships.



* **Example of tour expenses:**
    * Transportation (gas, van rental)
    * Lodging (hotels, Airbnb, couch surfing)
    * Food (per diems, group meals)
    * Merch production
    * Marketing and promotion


#### **Build a Strong Team**

Even for indie artists, having a team is vital to the tour’s success. A tour manager helps handle logistics, while a merch manager can maximize sales at your shows. Make sure you delegate responsibilities so you can focus on performing and connecting with fans.


# II. Booking Venues and Negotiating Deals

Your tour’s success depends largely on the venues you book and the deals you negotiate. Booking the right venues can make all the difference between a profitable tour and a costly one. Here's how to get started.


#### **Find the Right Venues**

To ensure you're performing at venues that are a good fit for your music, it's essential to do some research. There are several ways you can compile a list of potential venues to target for your tour:



1. **Use Online Resources**
    * **Songkick** and **Bandsintown**: These platforms allow artists to find upcoming shows and see where other artists in similar genres are performing. By tracking where other indie artists are touring, you can identify venues that cater to your style of music.
    * **Indie on the Move**: A well-known resource for independent artists, Indie on the Move offers a comprehensive database of venues across the U.S. You can search by city or state and filter based on capacity, genre, and other preferences.
    * **ReverbNation**: Known as a platform for independent musicians, ReverbNation has a section dedicated to venues and gigs. You can find opportunities based on your location and apply directly to venues looking for artists to perform.
2. **Research Local Scenes**
    * **Local Artist Networks**: Reach out to other local musicians in the cities where you plan to tour. Many indie artists are willing to share their experiences with specific venues and promoters.
    * **Social Media Groups**: Join Facebook groups or Reddit communities dedicated to local music scenes. These groups often have venue recommendations, reviews, and tips on how to approach booking agents.
    * **Local Music Blogs and Publications**: Websites like **Do512** (for Austin, TX) or **Oh My Rockness** (for NYC and Chicago) often have lists of recommended venues and upcoming events. Many cities have similar resources that highlight local venues, which can be great for finding hidden gems.
3. **Visit Venue Websites Directly** Once you’ve compiled a list of potential venues, visit their websites to learn more about their booking process, audience demographics, and the type of music they typically feature. Many venues have an online booking form or an email address for submissions.
4. **Attend Shows in Your Target Cities** If possible, attend live shows in the cities where you plan to tour. This gives you firsthand experience of the venue’s vibe, the crowd, and how the space fits your performance style. It’s also an excellent opportunity to network with venue staff and other performers.


#### **Negotiate Performance Fees**

Once you've identified your target venues, it's time to negotiate deals. There are three common types of performance payment deals:



* **Flat fee:** A guaranteed payment for your performance.
* **Door deal:** You get a percentage of the ticket sales.
* **Guarantee plus percentage:** A combination of both, where you receive a base fee and a percentage of the door.

When negotiating, always know your value and be willing to walk away if a deal doesn’t make sense for your budget.


#### **Leverage Local Artists**

Teaming up with local artists as openers is a great way to increase the turnout. These artists have a local fanbase, which could help fill the venue and create an exciting show for their followers and yours.


# III. Merchandising for Maximum Profit

Selling merchandise is one of the best ways to make a profit on tour. Not only does it help cover tour expenses, but it also strengthens your brand.


#### **Merch as a Revenue Stream**

From t-shirts and posters to exclusive vinyl records, your merch should reflect your brand. Focus on high-margin items like t-shirts, hats, and signed memorabilia, but offer a range of price points so all fans can afford something.


#### **Setting Up a Merch Table**

Make your merch table visually appealing and easy to access. Assign someone you trust to handle sales, track inventory, and manage transactions. This person should be able to engage with fans, answer questions, and upsell.


#### **Pricing Strategies**

Make sure your merch is priced to sell. Balance affordability with profitability, and consider offering special deals, like a discount for fans who buy multiple items.


# IV. Cutting Costs Without Sacrificing Quality

Touring can get expensive, but there are ways to cut costs without compromising the quality of your experience.


#### **Transportation**

Renting a van is often more affordable than buying one, especially if you’re only on the road for a short period. Plan your route efficiently to minimize gas costs, and try to avoid unnecessary detours.


#### **Accommodation**

To save on lodging, consider staying with friends or family, or use platforms like Couchsurfing or Airbnb. Some artists opt to stay in affordable hostels or team up with local fans who offer their homes.


#### **Food and Miscellaneous**

Create a daily food budget and stick to it. Traveling with snacks and preparing meals when possible can help reduce food costs. Don’t forget to set up per diems for band members so everyone knows how much they can spend.


# V. Promoting Your Tour Effectively

Promotion is essential to filling seats and maximizing the tour’s success.


#### **Utilize Social Media**

Keep your fans engaged before and during the tour by posting regular updates on platforms like Instagram, Twitter, and TikTok. Use these platforms to promote shows, post behind-the-scenes content, and engage with fans.


#### **Build a Localized Marketing Plan**

Invest in targeted ads on Facebook and Instagram for each city you’ll be visiting. Partner with local influencers, radio stations, or bloggers to spread the word and build buzz.


#### **Flyers and Street Teams**

Go old-school by printing flyers and distributing them in local record stores, coffee shops, and other hotspots. Enlist street teams in each city to spread the word.


# VI. Understanding the Legal and Financial Side of Touring

To tour smartly, you need to get familiar with contracts, finances, and insurance.


#### **Contracts and Agreements**

Always use performance contracts to clarify the terms of your shows. Include key details like payment structure, set length, and any rider requirements. Protect yourself with clear cancellation policies and understand your rights in each agreement.


#### **Managing Taxes and Finances**

Touring generates income that needs to be reported, so keep detailed records of all earnings and expenses. Open a separate bank account for tour finances to make tracking easier, and work with an accountant to ensure you’re on track for tax season.


#### **Tour Insurance**

Protect yourself and your gear by getting tour insurance. There are affordable options for independent artists that can cover everything from broken equipment to canceled shows.


# VII. Building Fan Relationships for the Long Term

A successful tour isn’t just about the shows—it’s about deepening relationships with your fans.


#### **Fan Engagement Strategies**

After each show, take time to meet fans, sign merch, and collect email addresses for your mailing list. The personal connection you build will turn casual attendees into loyal fans who support your music long after the tour ends.


#### **Post-Tour Engagement**

Once the tour is over, keep the momentum going by sharing tour highlights, exclusive behind-the-scenes footage, and thank-you notes to fans. Consider sending out a post-tour email thanking everyone who came and offering exclusive merch or music.


# TLDR

Touring independently doesn’t have to drain your bank account. By setting clear goals, managing your budget, and understanding the business side of touring, you can create a profitable and rewarding experience that boosts your career. Remember, touring is about more than just playing shows—it's about building connections and laying the groundwork for long-term success.


</BlogPageTemplate>
