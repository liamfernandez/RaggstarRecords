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

export const DefaultBlogPosts: BlogCardProps[] = [
	{
		title: 'No Label? No Problem',
		subtitle: 'How to build a Fanbase as an Independent Artist',
		description:
			'In this article we will be discussing methods of how successful independent artists were able to build their following without the backing of a major label.',
		slug: 'how-to-create-a-fanbase-without-a-label',
		image: 'no-label',
		date_published: new Date(2024, 1, 2)// 'February 2nd, 2024'
	},
	{
		title: 'The Secret to Branding Revealed!',
		subtitle: 'Why it Matters and How it Gets You Rich',
		description:
			"In this article we will discuss the secret recipe to successful branding! Let's breakdown what it is, why it's important and how you can profit off your brand.",
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
		description: '',
		slug: 'how-to-prepare-for-the-studio',
		post_color: '#f0d06e',
		image: 'preparation',
		date_published: new Date(2024, 2, 9) // 'March 9th, 2024'
	}
];
