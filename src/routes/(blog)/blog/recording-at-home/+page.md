<script lang='ts'>
  import BlogPageTemplate from '$lib/components/blog/BlogPageTemplate.svelte';
  import type { BlogCardProps, ASSETS_PATH } from '$lib/managers/BlogManager';
  import { orderedBlogPosts } from '$lib/managers/BlogManager';
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

# Introduction
Hello and welcome to RaggStar! This free resource is for creatives who are committed to growing themselves as artists and entrepreneurs. We created this resource because we wish someone sat us down and shared this information with us when we first started our music careers. Being an independent artist can be equated to being a small business owner who is starting their venture. There is no help, no capital backing, and no formal education that ever outlines the steps and processes that it takes for artists to succeed in the modern world. Our belief is that education can bridge the gap between the conglomerate of major labels that make up the music industry and the everyday aspiring artists who dream of a vision bigger than themselves. The mission here is to give you a knowledge base and step-by-step guides for building a successful music career in the 21st century. **In a world where everyone is in it for themselves, we want to be the one resource that invests everything we have to offer back into you - The Artist.**

# Unveiling Our Secrets

I was told by our COO here at RaggStar that telling artists how to set up a budget studio was a bad idea because it goes against what we stand for (poor-quality recordings). However, a couple of my best friends wanted to start their recording journey without the intention of being professional musicians. Amid my conversation, while advising them about their setup,** I came to an epiphany. **

The creation of music is a fun process for almost everyone. Whether you are a serious artist or someone that just likes to mess around. Being able to create rough demos on the fly without having to book studio time is beneficial for everyone. Having the rough vocals down on a track and knowing what you want it to sound like will 100% allow you to have a more efficient session when it is time to book the studio and perfect the demo.

This will also give you the skills you need to be competent with recording and help unlock the language of sound engineering; thus creating a much smoother communication channel for you and your engineer.

Setting up a home recording studio doesn't have to break the bank. This is going to be a game-changer for y’all. **This guide will show you how to build a functional home recording setup for under $500,** ensuring you get the best value without compromising on quality.

To my COO, sorry lol, don’t be mad at me 😅.

And to my best friends, **thank you for supporting me on my journey**. Your belief in me has taken me far. So, I am dedicating this post to y’all. I hope I can now support you on you journey as much as you did for me.

![bojack]({gif1})

# Section 1: Understanding Your Needs

**Identify Your Goals:**



* **Purpose Assessment:** Start by defining what you want to achieve with your home studio. Are you focusing on vocal recordings, instrumental tracks, or full production? Knowing your goals will help prioritize your equipment needs. Ask yourself these questions:
    * Do you want to be a producer?
    * Do you want to be a songwriter?
    * Do you want to be a vocalist?
    * What genre of music are you making?
* **Budget Prioritization:** Allocate funds based on your primary needs. For example, if vocals are your focus, invest more in a good microphone and less on instruments. The budget below is the most basic form of a studio. This is the bare minimum you need to get your vocals down onto a track.

**Budget Allocation:**

1. Microphone ($100 - $150)
2. Audio Interface ($100 - $150)
3. Headphones ($50 - $100)
4. DAW Software (Free - $60)
5. Mic Stand(~$25)
6. Speakers ($80 - $100)
7. Cables ($15 - $50)


# Section 2: Essential Equipment

**Microphone** ($100 - $150):

**Types of Microphones**: Condenser mics are ideal for studio recording due to their sensitivity and range.

**Recommended Models**:



1. **Audio-Technica AT2020**: Known for its clarity and affordability. [$99 on Amazon](https://www.amazon.com/Technica-AT2020-Side-Address-Cardioid-Condenser/dp/B00RLAKUQ6/ref=sr_1_2?crid=6AY1JIXT21LO&dib=eyJ2IjoiMSJ9.aQWWS2DwymHkJf0peazPli34zGCCOwqk_a1pLhdx90v9GJ-0HSa2Y3Bcbdj32PAWUykr-i8Cck9TFVDSKF5qI3ZBusfCUr7ZCanNpSL7aTrghgr8UGY0v_5xb_jDNPsSlb_m6wr80Awq1yl5WXaaX7qXWPfFptXlyM5iueObExs7HrkjEx6EcOlFl9PZaiUt4eQ3qn8o083xYxivZ-NXPMQ-W5OhZ6gqSCyCAa6TeNgq8NwVlFrKoimBsJej0qEv_dATm53tG7eGYfHpIMj_f8G-bjII-D9kkH0ox6C-USY.WzSHRRkOh6pF9VZlaW-R1DL4DAzWtO1YMgSVmeh7Rwk&dib_tag=se&keywords=at%2B2020&qid=1715567303&sprefix=at%2B2020%2Caps%2C100&sr=8-2&th=1)
2. **Behringer C-1**: A budget-friendly option with decent quality. [$49 on Amazon](https://www.amazon.com/Behringer-Professional-Large-Diaphragm-Condenser-Microphone/dp/B000CZ0RLK/ref=pd_ci_mcx_mh_mcx_views_0?pd_rd_w=3TgYk&content-id=amzn1.sym.8b590b55-908d-4829-9f90-4c8752768e8b%3Aamzn1.symc.40e6a10e-cbc4-4fa5-81e3-4435ff64d03b&pf_rd_p=8b590b55-908d-4829-9f90-4c8752768e8b&pf_rd_r=B38TQBPH16Y289VN2CJK&pd_rd_wg=57idR&pd_rd_r=c7e71b9c-780e-41ce-8308-34a284f50a00&pd_rd_i=B000CZ0RLK)
3. **Rode NT1-A**: Great microphone for recording smooth Rap/RnB vocals. This is the same mic I used when I first created my studio in 2019. Little on the more expensive side but great bang for your buck!  [$159 on Amazon](https://www.amazon.com/Signature-Condenser-Microphone-Shockmount-Filter/dp/B0CKVD62NX/ref=sr_1_2?crid=3QQPNHAB1WWG5&dib=eyJ2IjoiMSJ9.AVKibzjD06rcLC1ZWjXjErv95LVkfbmFUbFbr63y-u8IDaWKliGLJ0g9hScBrF-mV0jFFplBfhYux84kLnaT32LRjserJsvyzt1xtZvV0oVNjWrOTB5-eSVr2P1wHVHEYXymkDV6zmrVDlwGfWGYoV_w2TpVm4MgzVspDq-NHhb7Hi1ABSZLMGEdG3STxvobS74VKUP14QfD5ilRKKe2zZgj4r5kDbk1G94at-sxS3FtPNiN5o1EX41TH1eiTh2mNsL7lYDiULvvbsem8mOL2AG5FO32Xg-9vW1OuxWRcZw.PelOWXtFY_iA5DoNq9fjGLXy-r3C8OQg6_o7Bx8AtT4&dib_tag=se&keywords=rode%2Bnt1&qid=1715567568&s=musical-instruments&sprefix=rode%2Bnt1%2Cmi%2C83&sr=1-2&th=1)

**WTF is an Audio Interface?** ($100 - $150):

**Role of an Interface:** It connects your microphone and instruments to your computer, converting analog signals to digital.

**Recommended Models**:



1. **Focusrite Scarlett Solo**: Renowned for its ease of use and sound quality. [$99 on Amazon](https://www.amazon.com/Focusrite-Scarlett-Audio-Interface-Tools/dp/B07QR6Z1JB/ref=sr_1_2?crid=36REKS1WSYMQF&dib=eyJ2IjoiMSJ9.ZnWMY84VwovG6mrVRbw2lJoKmMvWN-uqqj921iUUdQx47JiKRYfYFclxlAtHwyQfL2W9SyremKcsY3TdXCA8v5hJ1G0htq6LFdlv_kQHIj6kBdI91KlaccEDooy9NeZ6cN7wyl-ZuVf_Rh8NAF0ac0Dohx4bC96oV_bHeiDcfmXEqW5tPJUahHfg3WJLkr-Qn5iMafxCsYLQAJY0GA2AaPlL165w7mLYILJMEO_UHyk6xH7QO8RP7D5JeCEXV9TUeQaLNRGK509yAmxlnb3RbQHtnb-P5CSwGptJ48alQj8.9NTHDkWprLa7F7_I7k7r8e9HGbv2xc86NHxc4BmJYao&dib_tag=se&keywords=focusrite+scarlett+solo&qid=1715567861&s=musical-instruments&sprefix=focusrite%2Cmi%2C89&sr=1-2)
2. **Behringer UMC22**: Affordable with basic features suitable for beginners. [$69 on Amazon](https://www.amazon.com/Behringer-UMC22-BEHRINGER-audio-interface/dp/B00FFIGZF6/ref=sr_1_2?crid=3020QRK0WIUWA&dib=eyJ2IjoiMSJ9.867q0CXui6WEscMrk22itTfps3VSV-j2RdwuZvvM54D3_OXDPeq7_ug4JbIy804vioT81Qcs5Aru2-r_R4Is-nqKx5GOAE7kq6X17VXho6MZAQCEkNvZj92_ytSdoZkGM8PCMz7lJXe2DO6OKuMQeZ_4j3f13LnqW5zntAlP3WyOz9wf6t3UvOmE-1zPXVSWRhmuglbpny9aiq_WqtxYjQSAt6d9w82cnI63B-nNzrfPst5e0lC16sEy39LDUyQbWGl_n24Nv1SiF9Ooe_kl_tRIMetU3JO1eDeI6TpO_64.MCQGKNaB57i3GLeGCVXRN9aEKOtv98dA2GM3DT0pcWI&dib_tag=se&keywords=behringer+mc22&qid=1715567936&s=musical-instruments&sprefix=behringer+mc2%2Cmi%2C94&sr=1-2)

**Headphones** ($50 - $100):

**Importance**: Accurate sound monitoring is crucial for mixing and recording.

**Recommended Models:**



1. **Audio-Technica ATH-M20x**: Offers good quality at a low price. [$49 on Amazon](https://www.amazon.com/Audio-Technica-ATH-M20x-Professional-Monitor-Headphones/dp/B00HVLUR18/ref=sr_1_1?crid=369GDQJLWHLJ2&dib=eyJ2IjoiMSJ9.U367j2JZJHo3EEI1Ku7LFE-_yBmY4t0QNoQuLZm0dcoiQIauWCRvcwahknSx4yF7nYvMMxrELCgrufUPUjw1Tv5Qt0PW4jdX1HalEM5tiYvCB0vPdofjP66IguvneBUFT9MFiJe5FdvzV0Px8_8mjA.D1FP9vh_6cZFGIfsxJvRMQG35R8n6VpFJ_ERNEcguHc&dib_tag=se&keywords=ath+m20&qid=1715568079&s=musical-instruments&sprefix=athx+m+20%2Cmi%2C84&sr=1-1)
2. **Samson SR850**: Known for its open-back design and clarity. [$29 on Amazon](https://www.amazon.com/Samson-Professional-Semi-Open-Reference-Headphones/dp/B084QCYXVQ/ref=sr_1_4?crid=1JYW86EZ4R1KB&dib=eyJ2IjoiMSJ9.vnG-fJhVGdwxG-bzu9L88J1V615JSRR8jawQKnVn1Ut8R6kj3akiYrXCI-uuYWKWFDxFN-VKBbAwRaDbAZl9hXWm8MPs7C3LI9axqAm38TzWEYIXkeGKI-6DgYio0a12RDumaOnCB2qOLFT3VU-73op53_WH-pP-PsQYyyYAdRSG3duWQAQEcF2UvcIerQRIblfzfLNDNmUTSQ3azzOYl4GZOa1cSRgt7U6eewL6IIOXvOLmCKMKN1BU9ur8cp2ZYmshoaiAr00bB2vvf_mVbRzg0LsMEqVjMPJBz5nok6c.XSpZFY1TSAWu025dB442TFPiqUa6jr3O8GvrSwh9ySk&dib_tag=se&keywords=samson+sr850&qid=1715568125&s=musical-instruments&sprefix=samson+%2Cmi%2C87&sr=1-4)

**DAW Software **(Free - $60):

**What is a DAW?**: Digital Audio Workstation software is essential for recording, editing, and mixing music. Think of it like Premiere Pro but for music. If you have ever used Adobe Suite before, a DAW is essentially the same thing but you’re creating music instead of editing videos.

**Recommended Options:**



1. **Logic Pro**: This is free if you have a MacBook. It should already be installed on your computer.
2. **Reaper**: Offers a free trial and affordable license. [Download Reaper ](https://www.reaper.fm/)
3. **Audacity**: Completely free and user-friendly for beginners. [Download Audacity](https://www.audacityteam.org/)
4. **Pro Tools**: AKA The Love of My Life, Pro Tools is the industry standard DAW, this is what I recommend the most because you can send your files to any studio across the world and they can easily access your stems/session files. If you learn the language of Pro Tools, you will be more competent than most artists in the world. And not to mention your engineer will love you 😉 [Download for Free or $99/year](https://www.avid.com/pro-tools)

**Mic Stand **($25)

Pretty self-explanatory, you need something to hold the mic because holding the mic in your hand will be annoying while trying to edit on your DAW. And it would be kind of weird.

The type of stand I have recommended is called a “boom stand”. This is what you’d see at most professional studios. Thankfully, Amazon has budget options. If you don’t have space for the boom stand, then don't worry, I have space-friendly options listed as well.

**Recommended Options:**



1. **Samson MK-10 Boom Stand**: Good for people who have space in their room and like to have flexibility in standing up or sitting down while recording. [$24 on Amazon](https://www.amazon.com/Samson-MK-10-Microphone-Boom-Stand/dp/B003CLIPHO/ref=sr_1_21?crid=3CK702RH7KSLK&dib=eyJ2IjoiMSJ9.9yFgi-JdFRFsvWsMM8B75U_IRfZaUy6VEnJ5mAtNC11WxzVEf1arQylBPH_sbGpLJ0hVfAGkX3CkCBlUraTx4cGk5ln3T774gCHqinBGzBihv2C922_C2v7oWyS3P9bZ1MtM6DJk9_7_f17uY8KT9HeCyI8cHtA3KDhsGDgl2gK562Fv3DwTikGWbJWQTjF9AqBz399ju4t7RYtGhLv7jYdiVV5HkDJ9L9NU8icCHJgBSMbAe-vc1_G5rwq3cGOjLriwygtQ0uFYFfir1w2t8N9shourrqYK53wbkwWnTf0.OY1aM3ysKUEo0zmdCok5lqOSm-Ny_pKHMmK1zSfJZq8&dib_tag=se&keywords=mic%2Bstand&qid=1715568799&s=musical-instruments&sprefix=mic%2Bstand%2Cmi%2C89&sr=1-21&th=1)
2. **InnoGear Mic Arm**: This is an awesome invention. Space-friendly and flexible. Good for people who will be recording at their desk setup(or closet) and have limited space.  [$22 on Amazon](https://www.amazon.com/InnoGear-Microphone-Adjustable-Suspension-Microphones/dp/B07X1ZWS2H/ref=sr_1_23?crid=3CK702RH7KSLK&dib=eyJ2IjoiMSJ9.9yFgi-JdFRFsvWsMM8B75U_IRfZaUy6VEnJ5mAtNC11WxzVEf1arQylBPH_sbGpLJ0hVfAGkX3CkCBlUraTx4cGk5ln3T774gCHqinBGzBihv2C922_C2v7oWyS3P9bZ1MtM6DJk9_7_f17uY8KT9HeCyI8cHtA3KDhsGDgl2gK562Fv3DwTikGWbJWQTjF9AqBz399ju4t7RYtGhLv7jYdiVV5HkDJ9L9NU8icCHJhBQd3neJVW0VncdkeI89NJ5p8gPIqE2BR2QsYdj0hYXd9shourrqYK53wbkwWnTf0.GcuQqEOV0AMQ6D2Byu8z3fZdx4EQ6c1Fsy7bDY5IMUg&dib_tag=se&keywords=mic+stand&qid=1715569432&s=musical-instruments&sprefix=mic+stand%2Cmi%2C89&sr=1-23)

**Speakers** ($80-$100 )

Also pretty self-explanatory, you’re going to need to hear yourself and the beat once you record each line so here is a list of good speakers that will give you crisp clarity for recording.

**Recommended Options:**



1. **Mackie CR3-X 3-inch:** Great budget studio monitors. Good for lower volumes and has decent bass. [$87 on Amazon](https://www.amazon.com/Mackie-Creative-Reference-Multimedia-Professional/dp/B083N8N7TB/ref=sr_1_5?crid=1ZXMJ5Y1WYD1F&dib=eyJ2IjoiMSJ9.cU25dCikxNsxw2OKomG1-VVo_tfP9Gjdlbxib0uwgdOyqGN5sK40MZx4R9GDHnUKZM95xrLTIMB8MqxL8dh2zuwqWv1G0nhkMHDtbBE85lNQtme1Y4t2lHZq5VmiEdsJK_FRcME6_X5zAfWuxLUsh6uZete9DpbAl0SOoaxLErN2cekq8tsJI-B5Z2ewOZUYhAqzsIusoQ1MNj9Im-o7_4iv10q5xRydz9JpEKC3WisFDfthrwJGQd2r9fbxvE-GhWry5RvRkWeV8BIIJx77GioFveby-JDUGbJm6MjtceI.nlE81KWzDf_tra_eztpMKw8CVJrBu69pEtZymCQBSlk&dib_tag=se&keywords=studio+speakers&qid=1715569868&s=musical-instruments&sprefix=studio+speaker%2Cmi%2C90&sr=1-5)
2. **PreSonus Eris 3.5-inch Studio Monitors**: Great deal for the quality and price point. Does a good job of holding clarity at louder volumes. [$99 on Amazon](https://www.amazon.com/PreSonus-Eris-3-5-Gen-Studio-Quality/dp/B0C88ZB3D9/ref=sr_1_4?crid=1ZXMJ5Y1WYD1F&dib=eyJ2IjoiMSJ9.cU25dCikxNsxw2OKomG1-VVo_tfP9Gjdlbxib0uwgdOyqGN5sK40MZx4R9GDHnUKZM95xrLTIMB8MqxL8dh2zuwqWv1G0nhkMHDtbBE85lNQtme1Y4t2lHZq5VmiEdsJK_FRcME6_X5zAfWuxLUsh6uZete9DpbAl0SOoaxLErN2cekq8tsJI-B5Z2ewOZUYhAqzsIusoQ1MNj9Im-o7_4iv10q5xRydz9JpEKC3WisFDfthrwJGQd2r9fbxvE-GhWry5RvRkWeV8BIIJx77GioFveby-JDUGbJm6MjtceI.nlE81KWzDf_tra_eztpMKw8CVJrBu69pEtZymCQBSlk&dib_tag=se&keywords=studio+speakers&qid=1715569965&s=musical-instruments&sprefix=studio+speaker%2Cmi%2C90&sr=1-4)

**Cables** ($15 - $50)

To connect your mic, interface, and speakers together you will need something called XLR cables. These cables are very good at carrying real physical signals(your vocals) which deliver them to your interface and then turns them into electrical signals that show up as .WAV files in your DAW.

The price only depends on how many cables you get. Because you are setting everything up for the first time, I recommend getting ~ 4 - 6. You will soon realize that you can never have enough cables when it comes to audio.

**Recommended Options:**
1. **AQOOL XLR Cable:** Comes in a pack of 4 and has varying lengths. You can optimize for cable management Depending on the size of your space. [Pack of 4 for $39 on Amazon](https://www.amazon.com/Gold-Plated-Microphone-Colored-Connectors-Balanced/dp/B099NV8KX3/ref=sr_1_10?crid=295RPCCDQH7B&dib=eyJ2IjoiMSJ9.Qc7Bm99GBP3_XdgZcQz45pLZhntavP_ZIapgiw2A2phvEub6aPHLgEIw4eV4qW_w7U6ILzu6H6zCJs02kPrRDQWOtTu_wl9rUAbGxjkoF07jsZ9gxBkw3wKIBHrYnT_ogeW3juU5SOgr1hvwp_sCJZTiuTPwMqOEkeYWqvHtENtTXSQAFczYZ0Z28bmX1b3w2-1x6DRe0-CtRqQH_-58yQNt9zxK1BwVlvTN0izRB2Ql2hdqJk9cwwcAFAL3Jgv-tvmDTG0xZPhJoaPKsJucoQbPdGZ9gk_m14KUbbU9TA8.MeLmdvD9tjMmaQuweucekhM_192AP6P4OfmM8fZLD2M&dib_tag=se&keywords=xlr%2Bcables&qid=1715569658&s=musical-instruments&sprefix=xlr%2Bcables%2Cmi%2C96&sr=1-10&th=1)
2. **Pig Hog PHM15 High Performance**: Pack of 1. These are the same cables we use for our studio right now. We trust this brand heavily. [$16 on Amazon](https://www.amazon.com/PHM15-High-Performance-Microphone-Cable/dp/B004GHI5ZK/ref=sr_1_8?crid=295RPCCDQH7B&dib=eyJ2IjoiMSJ9.Qc7Bm99GBP3_XdgZcQz45pLZhntavP_ZIapgiw2A2phvEub6aPHLgEIw4eV4qW_w7U6ILzu6H6zCJs02kPrRDQWOtTu_wl9rUAbGxjkoF07jsZ9gxBkw3wKIBHrYnT_ogeW3juU5SOgr1hvwp_sCJZTiuTPwMqOEkeYWqvHtENtTXSQAFczYZ0Z28bmX1b3w2-1x6DRe0-CtRqQH_-58yQNt9zxK1BwVlvTN0izRB2Ql2hdqJk9cwwcAFAL3Jgv-tvmDTG0xZPhJoaPKsJucoQbPdGZ9gk_m14KUbbU9TA8.MeLmdvD9tjMmaQuweucekhM_192AP6P4OfmM8fZLD2M&dib_tag=se&keywords=xlr+cables&qid=1715570762&s=musical-instruments&sprefix=xlr+cables%2Cmi%2C96&sr=1-8)


# Not a Replacement

We want to stress that this is not a replacement for your main studio. It is however an empowering tool that you can use to practice your vocals before you get to the studio. We want you to get the most out of your setup, and we want you to focus on making music, being creative, and growing your career. Not getting caught up in the fancy equipment or technical know-hows of sound engineering. After all **this blog is for artists, not sound engineers**. You already have your work cut out for you, leave the technical stuff for the sound nerds AKA us.  🤓



</BlogPageTemplate>
