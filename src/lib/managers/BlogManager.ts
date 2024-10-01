// MATCH WITH BlogCard.Svelte
export type BlogCardProps = {
	title: string;
	subtitle?: string;
	description: string;
	slug: string; // name of the folder under routes that contains the blog post
	image: string; // name of the folder within STATIC > BLOG > that will contain assets for your blog post
	author?: string;
	post_color?: string; // Hex color code to give each card a unique color
	date_published: Date;
};

export const ASSETS_PATH = '/../blog-assets';

let DefaultBlogPosts: BlogCardProps[] = [
 {
		title: 'How Indie Artists Can Maximize Their Streams in 2024',
		subtitle: 'The Ultimate Guide',
		description: 'In this article we discuss essential streaming strategies for indie musicians, including profile optimization, playlist utilization, audience engagement, and cross-platform promotion.',
    slug: 'how-indie-artists-can-maximize-their-streams-in-2024',
		image: 'assets-how-indie-artists-can-maximize-their-streams-in-2024',
    post_color: '#c1f1cc',
		date_published: new Date(2024, 8,29) // Sept 29th
	},
 {
		title: 'How to Get Press Coverage for Your Music',
		subtitle: 'Without Spending $$$ on a PR Team',
		description: 'In this article we discuss how independent artists secure press coverage, build an online presence, craft compelling stories, create press kits, and pitch to media outlets.',
    slug: 'how-to-get-press-coverage-for-your-music',
		image: 'assets-how-to-get-press-coverage-for-your-music',
    post_color: '#bedcc5',
		date_published: new Date(2024, 8, 22) // Sept 22
	},
 {
		title: 'Tour Smarter, Not Harder',
		subtitle: 'A Guide for Indie Artists',
		description: 'In this article we discuss planning and executing a successful music tour, covering budgeting, venues, merchandising, cost-cutting strategies, promotion, legal considerations, and fan engagement.',
    slug: 'tour-smarter-not-harder',
		image: 'assets-tour-smarter-not-harder',
    post_color: '#f0d3b8',
		date_published: new Date(2024, 8, 15) // Sept 15th
	},
	{
		title: 'How to Find a Manager',
		subtitle: 'The Ultimate Guide',
		description: 'In this article we discuss how to find and secure a music manager, covering the manager\'s role, assessing needs, networking, preparing pitches, and maintaining professional relationships.',
    slug: 'how-to-find-a-manager',
		image: 'assets-how-to-find-a-manager',
    post_color: '#f6d5d2',
		date_published: new Date(2024, 8, 8) // Sept 8th
	},
	{
		title: 'No Label? No Problem',
		subtitle: 'How to build a Fanbase as an Independent Artist',
		description: 'In this article we will be discussing methods of how successful independent artists were able to build their following without the backing of a major label.',
		slug: 'how-to-create-a-fanbase-without-a-label',
		image: 'no-label',
		date_published: new Date(2024, 1, 2)// 'February 2nd, 2024'
	},
	{
		title: 'The Secret to Branding Revealed!',
		subtitle: 'Why it Matters and How it Gets You Rich',
		description: "In this article we will discuss the secret recipe to successful branding! Let's breakdown what it is, why it's important and how you can profit off your brand.",
		slug: 'secret-to-branding-revealed',
		post_color: '#FFC0CB',
		image: 'branding',
		date_published: new Date(2024, 1, 22) // 'February 22nd, 2024'
	},
	{
		title: 'The Power of Music Videos',
		subtitle: 'Enhancing Your Songs Through Visual Storytelling',
		description: 'In this article, we will discuss the transformative power of visuals in the music industry, emphasizing their critical role in enhancing song engagement and visibility.',
		slug: 'power-of-music-videos',
		post_color: '#be9251',
		image: 'music-videos',
		date_published: new Date(2024, 2, 1) // 'March 1st, 2024'
	},
	{
		title: 'How to Prepare for The Studio',
		subtitle: 'Tips For a Successful Session',
		description: 'In this article, we will discuss common issues that lead to unproductive music studio sessions and practical tips on how to make them more effective, including preparation and team dynamics.',
		slug: 'how-to-prepare-for-the-studio',
		post_color: '#de8c2f',
		image: 'preparation',
		date_published: new Date(2024, 2, 9) // 'March 9th, 2024'
	},
  {
		title: 'Network = Net Worth',
		subtitle: 'Turn Your Connections Into Dollars',
		description: 'In this article, we will discuss the critical importance of networking in the music industry, identifying common misconceptions about connections and offering strategies to build professional relationships effectively.',
		slug: 'network-equals-net-worth',
		post_color: '#70e2c9',
		image: 'network-net-worth',
		date_published: new Date(2024, 2, 16) // 'March 16th, 2024'
	},
  {
		title: 'Music Business For Dummies',
		subtitle: 'Rights, Royalties, and Publishing',
		description: 'In this article, we will discuss the intricacies of the music business, debunking myths about royalty distribution and offering a clear guide to understanding various music agreements and rights.',
		slug: 'music-business-for-dummies',
		post_color: '#e3e7c6',
		image: 'music-business',
		date_published: new Date(2024, 2, 24) // 'March 24th, 2024'
	},
  {
		title: 'Sync Licensing 101',
		subtitle: 'How to Place Your Music in Movies & TV',
		description: 'In this article, we will discuss sync licensing in the music industry, explaining how artists can use this avenue for revenue generation and increased exposurethrough strategic music placements in various media.',
		slug: 'sync-licensing-101',
		post_color: '#b179d6',
		image: 'syncs',
		date_published: new Date(2024, 3, 1) // 'April 1st, 2024'
	},
	{
		title: 'Finding Your Tribe',
		subtitle: 'Locating and Catering to Your Target Audience',
		description: 'In this article, we will discuss the importance of identifying and authentically connecting with your specific audience to build a supportive and engaged fanbase in music.',
		slug: 'finding-your-tribe',
		post_color: '#fef6c8',
		image: 'tribe',
		date_published: new Date(2024, 3, 8) // 'April 8th, 2024'
	},
	{
		title: 'Staying True to The Game',
		subtitle: 'The Power of Consistency in Your Career',
		description: 'In this article, we will discuss the crucial role of consistency in the music industry, emphasizing its impact on creative growth, reliable branding, and audience loyalty.',
		slug: 'staying-true-to-the-game',
		post_color: '#70afe2',
		image: 'true-to-the-game',
		date_published: new Date(2024, 3, 15) // 'April 15th, 2024'
	},
	{
		title: 'The Ban',
		subtitle: 'What Does Banning TikTok Mean for the Music Industry?',
		description: 'In this article, we will discuss the implications of banning TikTok on the music industry, analyzing the platform\'s role in music discovery, promotion, and artist development.',
		slug: 'the-banning-of-tiktok',
		post_color: '#ff7f50',
		image: 'tiktok-ban',
		date_published: new Date(2024, 3, 21) // 'April 21st, 2024'
	},
	{
		title: 'Fund Your Sound',
		subtitle: 'How to Secure Financial Support',
		description: 'In this article, we will discuss various funding options available to musicians, including grants, sponsorships, and crowdfunding, offering  tips on securing financial support for your music.',
		slug: 'fund-your-sound',
		post_color: '#cffc5a',
		image: 'sound-fund',
		date_published: new Date(2024, 3, 28) // 'April 28th, 2024'
	},
	{
		title: 'From Unknown to Unskippable',
		subtitle: 'Winning Strategies for Playlist Features',
		description: 'In this article, we will discuss the importance of playlist features, offering strategies to increase chances of landing on popular playlists and maximizing the exposure of your music.',
		slug: 'unkown-to-unskippable',
		post_color: '#fde58a',
		image: 'unskippable',
		date_published: new Date(2024, 4, 5) // 'May 5th, 2024'
	},
	{
		title: 'Recording at Home',
		subtitle: 'Building a Studio Without Breaking the Bank (Under $500)',
		description: 'In this article, we will discuss how to set up a home recording studio on a budget, offering tips on selecting essential equipment, optimizing your space, and achieving professional sound quality.',
		slug: 'recording-at-home',
		post_color: '#f4edfa',
		image: 'at-home-build',
		date_published: new Date(2024, 4, 12) // 'May 12th, 2024'
	},
	{
		title: 'Hometown Hero',
		subtitle: 'Thriving in Your Local Scene',
		description: 'In this article, we will discuss strategies for success in your local music scene: building presence, connecting with artists, and engaging with the community.',
		slug: 'hometown-hero',
		post_color: '#ffccd5',
		image: 'hometown',
		date_published: new Date(2024, 4, 19) // 'May 19th, 2024'
	},
	{
		title: 'Lyrics That Live',
		subtitle: 'Writing Songs That Resonate',
		description: 'In this article, we will discuss the art of writing lyrics that deeply resonate with your audience and leave a lasting impact.',
		slug: 'lyrics-that-live',
		post_color: '#ffc86b',
		image: 'lyrical-myrical',
		date_published: new Date(2024, 4, 25) // 'May 25th, 2024'
	},
	{
		title: 'Crowdsourcing Creativity',
		subtitle: 'How to Engage Your Fans in the Music-Making Process',
		description: 'In this article, we will discuss the benefits of crowdsourcing creativity in music, exploring ways to involve your fans in the music-making process and build a stronger connection with your audience.',
		slug: 'crowdsourcing-creativity',
		post_color: '#e7f5e3',
		image: 'creativity-from-the-crowd',
		date_published: new Date(2024, 5, 2) // 'June 3rd, 2024'
	},
	{
		title: 'Cash in on Your Creativity',
		subtitle: 'Merchandising Tips for Musicians',
		description: 'In this article, we will discuss the power of merchandising in the music industry, offering tips on creating and selling merchandise to increase revenue and engage with your fanbase.',
		slug: 'cash-in-on-your-creativity',
		post_color: '#ddc7ab',
		image: 'cashing-creativity',
		date_published: new Date(2024, 5, 9) // 'June 9th, 2024'
	},
	{
		title: 'DIY Music Marketing',
		subtitle: 'Low-Cost Strategies for Big Results',
		description: 'In this article, we will discuss DIY music marketing strategies that can help independent artists promote their music effectively without breaking the bank.',
		slug: 'DIY-music-marketing',
		post_color: '#d8ffe5',
		image: 'doing-it-yourself',
		date_published: new Date(2024, 5, 16) // 'June 16th, 2024'
	},
	{
		title: 'Got Funding?',
		subtitle: 'How To Secure Financial Support For Your Next Project Pt. 2',
		description: 'In this article we will discuss understanding grant types, thorough research, crafting strong applications, and persistently refining efforts through feedback and experience.',
		slug: 'got-funding',
		post_color: '#bfe0e2',
		image: 'assets-got-funding',
		date_published: new Date(2024, 5, 23) // 'June 23rd, 2024'
	},
	{
		title: 'Teamwork Makes the Dream Work',
		subtitle: 'The Benefits of Music Collaboration',
		description: 'In this article we will discuss how collaboration boosts music careers by expanding creative horizons and audiences.',
		slug: 'teamwork-makes-the-dream-work',
		post_color: '#ffcbd5',
		image: 'assets-teamwork-makes-the-dreamwork',
		date_published: new Date(2024, 5, 30) // 'June 30th, 2024'
	},
	{
		title: 'Drop Your Music People',
		subtitle: 'How to Distribute Your Music on ALL Streaming Platforms',
		description: 'In this article we will discuss selecting the best music distribution platform based on costs, reach, services, and unique features.',
		slug: 'drop-your-music-people',
		post_color: '#d3eac8',
		image: 'assets-drop-your-music-people',
		date_published: new Date(2024, 6, 7) // 'July 7th
	},
	{
		title: 'Stop Being Shy!🙈 Post Yourself',
		subtitle: 'Effective Social Media Marketing for Musicians',
		description: 'In this article we will discuss using social media to build your music brand, create engaging content, and grow your following.',
		slug: 'stop-being-shy',
		post_color: '#e8ddf7',
		image: 'assets-stop-being-shy',
		date_published: new Date(2024, 6, 14) // 'July 14th, 2024'
	},
	{
		title: 'The Art of Sampling',
		subtitle: 'Legal and Creative Tips for Independent Artists',
		description: 'In this article we will discuss the art and legality of music sampling, including obtaining licenses and navigating copyright laws.',
		slug: 'the-art-of-sampling',
		post_color: '#66e3fa',
		image: 'assets-the-art-of-sampling',
		date_published: new Date(2024, 6, 21) // 'July 21st, 2024'
	},
	{
		title: 'Creating a Killer Press Kit',
		subtitle: 'Essentials for Independent Artists',
		description: 'In this article we will discuss creating an effective press kit, including essential components, biography writing, photo selection, and promotion strategies.',
		slug: 'creating-a-killer-press-kit',
		post_color: '#d4d8ff',
		image: 'assets-creating-a-killer-press-kit',
		date_published: new Date(2024, 6, 28) // 'Juuly 28th, 2024'
	},
	{
		title: 'Tune In to Your Well-being',
		subtitle: 'Mental Health Tips for Artists',
		description: 'In this article we will discuss how collaboration boosts music careers by expanding creative horizons and audiences.',
		slug: 'tune-in-to-your-well-being',
		post_color: '#ff9bed',
		image: 'assets-tune-in-to-your-well-being',
		date_published: new Date(2024, 7, 4) // 'August 4th, 2024'
	},
	{
		title: 'Navigating the World of Music Publishing',
		subtitle: 'What EVERY Artist Should Know',
		description: 'In this article we will discuss music publishing, explaining its importance for musicians, detailing different types of rights, and outlining various publishing deal options.',
		slug: 'navigating-the-world-of-music-publishing',
		post_color: '#f6d5da',
		image: 'assets-navigating-the-world-of-music-publishing',
		date_published: new Date(2024, 7, 11)
	},
	{
		title: 'Leveraging AI in Music Production',
		subtitle: 'The Future of Independent Music',
		description: 'In this article we will discuss AI\'s impact on music production, exploring its benefits for indie artists and highlighting key tools revolutionizing the creative process.',
		slug: 'leveraging-ai-in-music-production',
		post_color: '#b9e9d0',
		image: 'assets-leveraging-ai-in-music-production',
		date_published: new Date(2024, 7, 18)
	},
	{
		title: 'Exploring Micro-Influencers',
		subtitle: 'Mental Health Tips for Artists',
		description: 'In this article we will discuss micro-influencers, explaining their role in music promotion, benefits for indie artists, and strategies for effective collaboration.',
		slug: 'exploring-micro-influencers',
		post_color: '#c8d6f5',
		image: 'assets-exploring-micro-influencers',
		date_published: new Date(2024, 7, 25)
	},
	{
		title: 'How to Book a Show',
		subtitle: 'The Ultimate Guide',
		description: 'In this article we will discuss the process of booking shows as an independent artist, covering goal-setting, creating press kits, venue research, outreach, and performance tips.',
		slug: 'how-to-book-a-show',
		post_color: '#efdbe9',
		image: 'assets-how-to-book-a-show',
		date_published: new Date(2024, 8, 1)
	},
];

export let orderedBlogPosts = DefaultBlogPosts.sort((a, b) => a.date_published > b.date_published ? -1 : 1);
