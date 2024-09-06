<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/managers/BlogManager';
  import { ASSETS_PATH } from '$lib/managers/BlogManager';
  import { orderedBlogPosts } from '$lib/managers/BlogManager';
  import { page } from '$app/stores';

  const blogPostInfo: BlogCardProps = orderedBlogPosts.find((post) => post.slug === $page.route.id?.split('/')[3]);
  const assetsUrl = `${ASSETS_PATH}/${blogPostInfo.image}`;

  const gif1 = `${assetsUrl}/gif1.gif`;
  const gif2 = `${assetsUrl}/gif2.gif`;
  const gif3 = `${assetsUrl}/gif3.gif`;
  const img1 = `${assetsUrl}/img1.jpeg`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Introduction

Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# What the Heck Is Music Publishing?

Ah, music publishing—the mystical, often misunderstood beast that every musician knows they should care about but most pretend to understand. Kind of like taxes, but with more guitars and fewer calculators. Whether you're an indie artist dropping your first EP or a seasoned producer with beats for days, understanding music publishing is crucial if you want to get paid (and we all know you do). So grab your coffee (or something stronger), and let’s break this down in a way that won’t make your head explode.

![mind blown]({gif1})

Let’s start with the basics: Music publishing is all about the business side of your music. It’s how you make money from your songs whenever they’re used, performed, streamed, or played in that cool Netflix series you’ve been binge-watching. The concept goes back centuries, but don’t worry—we’re not going to dive into a history lesson (you’re welcome).

In simple terms, music publishing is about owning the rights to your music and making sure you get paid when people use it. Think of it as the secret sauce that turns your musical genius into cold, hard cash.

![money]({gif2})


# The Two Rights You Need to Know

There are two main types of rights in music publishing, and you need to know both:



1. **The Composition**: This is the songwriting part—the melody, lyrics, and all that jazz. Even if your song doesn’t have jazz, it’s still important. The composition is the blueprint, the DNA of your song.
2. **The Sound Recording**: This is the actual recorded version of your song—the one that’s going to be blasting out of speakers around the world (fingers crossed). If the composition is the blueprint, the sound recording is the finished building.

Now, here’s the kicker: When someone uses your music, they might need to pay you for both the composition and the sound recording. That’s two streams of income for one song. Not bad, right?


# Why Should You Care About Music Publishing?

You’re probably thinking, “I’m just here to make music, man. Do I really need to worry about all this?” The short answer: Yes. The longer answer: Absolutely yes, if you want to make a living from your music.

Here’s why:



* **Money, Money, Money**: Without publishing, you’re leaving money on the table. Every time your song is streamed, played on the radio, covered by another artist, or used in a commercial, you could be earning royalties. But you only get paid if you own the publishing rights.
* **Control**: Owning your publishing rights means you have control over how your music is used. Want to keep your track out of that cringy fast-food ad? With publishing rights, you have a say.
* **Legacy**: Publishing rights last a long time—like, really long. In many countries, they extend for the life of the author plus 70 years. That means your great-grandkids could be cashing in on your creativity.


# Types of Publishing Deals: The Good, The Bad, and The Ugly

So, you’re sold on the idea of music publishing. Great! Now, let’s talk about the different types of publishing deals you might come across. They’re not all created equal, so let’s break them down.


#### **1. Traditional Publishing Deal**



* **The Deal**: You sign over a percentage (usually 50%) of your publishing rights to a publisher. In return, they handle the business side—collecting royalties, licensing your music, and generally making sure you get paid.
* **The Good**: You get to focus on making music while someone else handles the nitty-gritty stuff. Plus, a good publisher can get your music into movies, TV shows, and commercials, which means more exposure (and more money).
* **The Bad**: You’re giving up a chunk of your income. If your song becomes the next “Despacito,” you might wish you’d kept those rights.


#### **2. Co-Publishing Deal**



* **The Deal**: This is like a traditional publishing deal, but you keep a bit more control. You split the rights and income with the publisher, but typically, you hold onto a larger percentage (usually 75%).
* **The Good**: You still get the benefits of having a publisher, but you keep more of the pie.
* **The Bad**: You’re still giving up some rights and income, but hey, sometimes sharing is caring.


#### **3. Administration Deal**



* **The Deal**: You keep all your rights, and the publisher handles the administration—collecting royalties, registering your songs, etc. In return, they take a smaller cut (usually 10-20%).
* **The Good**: You keep control and the majority of the income. Plus, the publisher still handles the boring paperwork.
* **The Bad**: Without a full-on publisher pushing your music, you might miss out on some opportunities.

![despacito]({gif3})

#### **4. Self-Publishing(Most of you are in this category right now)**



* **The Deal**: You do it all yourself. You’re the artist, the publisher, the promoter, the accountant… you get the idea.
* **The Good**: You keep 100% of the rights and income. It’s all you, baby!
* **The Bad**: It’s all you. That means more work, more headaches, and possibly less time for making music. But if you’re a control freak (in a good way), this could be your jam.


# How to Get Started with Music Publishing

Ready to dive in? Here’s what you need to do to get started with music publishing:



1. **Register Your Songs**: Make sure your songs are registered with a Performing Rights Organization (PRO) like[ ASCAP](https://www.ascap.com/) or[ BMI](https://www.bmi.com/) in the US. These organizations collect performance royalties on your behalf.
2. **Choose Your Deal**: Decide if you want to sign with a publisher or go the self-publishing route. Weigh the pros and cons and pick what’s best for you.
3. **Stay on Top of It**: Music publishing isn’t a “set it and forget it” deal. Keep track of your rights, stay informed about your royalties, and make sure you’re getting paid what you deserve.
4. **Get Professional Help**: If all this sounds like too much, don’t be afraid to hire a lawyer or a music publishing expert to help you navigate the waters. It might cost a bit upfront, but it could save you a lot in the long run.


# TLDR

Music publishing might not be as exciting as dropping a new track, but it’s just as important. Understanding the basics can mean the difference between making a few bucks on the side and building a long-term, sustainable music career. So, don’t sleep on your rights. Get your publishing game on point, and make sure you’re getting paid for the music you pour your heart and soul into.

And remember, in the world of music publishing, knowledge is power—and maybe even a new chain 😉


</BlogPageTemplate>
