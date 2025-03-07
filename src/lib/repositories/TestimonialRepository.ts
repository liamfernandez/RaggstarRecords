export type TestimonialProps = {
	id: number;
	first_name: string;
	last_name: string;
	highlight_quote: string;
	services_purchased: RGS_Service[];
	spotify_url: string;
	apple_music_url: string;
	pfp_url?: string;
	video_review_id?: string;
};

export enum RGS_Service {
	BeatProduction = 'Beat Production',
	Mastering = 'Mastering Session',
	Mixing = 'Mixing Session',
	RevisionsUnlimited = 'Unlimited Revisions',
	GraphicDesign = 'Graphic Design'
}

export const ASSETS_PATH = '/../testimonial-assets';

export const GetArtistImg = (
	testimonial: TestimonialProps,
	file: string = 'pfp',
	extension: string = 'jpeg'
) => {
	const artist_path = `${testimonial.first_name.toLowerCase() + '_' + testimonial.last_name.toLowerCase()}`;
	return `${ASSETS_PATH}/${artist_path}/${file}.${extension}`;
};

export let Testimonials_Data: TestimonialProps[] = [
	{
		id: 1,
		first_name: 'David',
		last_name: 'Vines',
		highlight_quote:
			'From custom producing my beat to mixing, mastering, and even scheduling consistent meetings, they delivered everything I needed. They didn’t just handle tasks—they empowered me with structure, attention to detail, and a streamlined process that boosted my confidence. They did not stop working on the project until I was 100% satisfied',
		services_purchased: [
			RGS_Service.BeatProduction,
			RGS_Service.Mastering,
			RGS_Service.Mixing,
			RGS_Service.GraphicDesign,
			RGS_Service.RevisionsUnlimited
		],
		spotify_url: 'https://open.spotify.com/artist/43eVPq0QmKD2nI9arxuu46',
		apple_music_url: 'https://music.apple.com/us/artist/david-vines/454248560',
		video_review_id: 'Pyw2kVdMxPs'
	}
];
