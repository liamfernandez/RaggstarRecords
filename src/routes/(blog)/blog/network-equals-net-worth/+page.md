<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps } from '$lib/repositories/BlogPostRepository';
  import { ASSETS_PATH } from '$lib/repositories/BlogPostRepository';
  import { orderedBlogPosts } from '$lib/repositories/BlogPostRepository';
  import { page } from '$app/stores';

  const blogPostInfo: BlogCardProps = orderedBlogPosts.find((post) => post.slug === $page.route.id?.split('/')[3]);
  const assetsUrl = `${ASSETS_PATH}/${blogPostInfo.image}`;

  const gif1 = `${assetsUrl}/gif1.gif`;
</script>

<BlogPageTemplate
  title={blogPostInfo.title}
  subtitle={blogPostInfo.subtitle}
  published_date={blogPostInfo.date_published}
  coverImg={blogPostInfo.image}>

# Why You Suck at Networking
“I don't have the kind of connections she does”. “I heard his family has industry connections”. “If I had the same connections he does, I’d be a millionaire by now”. “You got to be connected to break into the industry”. These are just a few of the typical excuses I hear artists always say when looking at someone else’s career. Guess what? It’s true! That’s the cold hard truth. In general, to be successful in life, you need to know people. Whether it’s getting a normal job, making friends, or even finding a significant other, humans need to have a network of other humans to use and rely on. Far too often we see artists burn themselves out by expending all of their resources on the studio. Artists believe their time, money, and energy need to go into the studio and nothing else. Here I am a big fan of the studio myself but there needs to be a healthy medium between recording new music and getting out to handle the business side of your career. That means we need to collaborate. Don’t isolate. Getting outside and showing face at events. Finding other like-minded individuals to group up with. Going to networking events at studios or even online workshops. The point is, that you need to meet other people and create mutually beneficial relationships with them. This is part of everyday life and business. The better you get at it the more well off you will be. The pandemic is over. Social distancing ain’t cool anymore. **Get outside and get active!**
![lazy ass]({gif1})

# How To Network
For artists, we believe one of the best and simplest ways to network is by going to open mic nights. This provides an opportunity for you to perform and showcase your talents while also getting to know other acts. When we first began our studio, this was the best method of generating our clientele base. We also got to know the owners of multiple venues and created relationships for our artists to go perform there whenever they want to. Typically, there is the same rotation of people who go to these open mics weekly. So, for this process to not get stale, you need to hit multiple venues to increase your chances of meeting new people. How do you do that you ask? No problem, we put together a list of open mic events that you can hit every week! Check it out and see what works for you. Keep in mind that we are based out of Atlanta so this is geared towards artists in Atlanta and its greater areas.


**Tuesdays:**
- Buteco Sothern Feed Store starting at 7 pm: [Click for More Info](https://www.instagram.com/butecosounds/?hl=en)
- Smithe’s Olde Bar starting at 7:30 pm: [Click for More Info](https://www.sobatl.com/weekly-events)

**Wednesdays:**
- Apache XLR at 9 pm: [Click for More Info](https://apachexlr.com/faq/how-do-i-participate-in-the-open-mic)

**Thursdays:**
- Monaco Night Club at 8 pm
- Chit Chat Reloaded Restaurant and Lounge at 9 pm: [Click for More Info](https://www.instagram.com/p/C4geWmgAeVj/?hl=en)

**Saturdays:**
- Art Out Loud at 5:30 pm: [Click for More Info](https://www.eventbrite.com/e/art-out-loud-open-mic-variety-show-tickets-849668851407)

Networking effectively in the music industry involves building genuine relationships with other artists, managers, videographers, and producers. Start by attending industry events, showcases, and open mics where you can meet professionals. Engage on social media platforms and music forums to connect with peers. Offer value without expecting immediate returns; collaborate on projects, share opportunities, and provide feedback. Maintain these relationships by staying in touch, being supportive, and showing appreciation for others' work. Remember, a strong network is built on mutual respect, trust, and shared goals.

Going to events will help with exposing yourself to music professionals who are at a higher point in their career than you. Getting around them and building relationships with them will lead you to breaking into their network and making a name for yourself in those circles.

1. **A3C Festival & Conference (September 28 – October 1, 2024):** This is Atlanta’s premier music, tech, and culture festival showcasing artists, producers, and DJs from around the world. It connects up-and-coming artists with influential hip-hop artists and innovators, offering technology panels from industry insiders.

2. **2024 NAfME Biennial Music Research and Teacher Education Conference (September 25-28, 2024):** This conference by the National Association for Music Education focuses on music education but is a great networking opportunity for artists looking to connect with educators, researchers, and music professionals. Discussions and presentations cover a wide range of topics relevant to music teaching and learning, making it a fertile ground for expanding your network in the educational side of the music industry​​.

3. **MTNA National Conference (March 16th-20th, 2024):** Organized by the Music Teachers National Association, this conference is another fantastic avenue for networking with music educators and professionals. While the focus is on teaching, the diverse array of events, including recitals, keynote sessions, and master classes, offers numerous opportunities for artists to meet and connect with influential figures in the music education sector​​.

4. **REVOLT WORLD (September 22nd-24th, 2024):** An event reimagining the intersection of culture and creativity, focusing on Hip Hop. It features performances, interactive masterclasses, experiential activations, and more.

5. **The NAMM Show (January 25-28, 2025):** In Anaheim, California, get together with the best engineers, producers, and artists music has to offer and learn from the best with live Q&A’s and performances.


# Follow Up & Reach Out
Following up and reaching out after networking events is crucial for you because it helps solidify the connections made. It transforms brief encounters into lasting relationships that can open doors to new opportunities, collaborations, and knowledge sharing within the music industry. Effective follow-up demonstrates professionalism, interest, and commitment, setting the foundation for a robust network that supports career growth.

Following up with a personalized email or message after meeting someone can remind them of your interaction and spark further conversation. For example, mentioning a topic you discussed shows you were engaged and valued the conversation. Reaching out to share a relevant article, event, or opportunity not only adds value to your new connection but also keeps the dialogue going. Collaborating on projects or inviting them to your shows demonstrates initiative and can lead to meaningful professional relationships. These actions help in building a supportive network that can offer advice, introduce you to new contacts, and potentially lead to career opportunities.

You got this! New things are daunting at first but if you keep on trying you will be bound to get better at it. Networking is by far one of the biggest things you can do to help yourself. I would love for y’all to reach out with any questions to [raggstarrecords@gmail.com](mailto:raggstarrecords@gmail.com) regarding your career and how we can help.

</BlogPageTemplate>
