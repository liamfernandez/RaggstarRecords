export type TestimonialProps = {
  id: number;
  first_name: string;
  last_name: string;
  highlight_quote: string;
  services_purchased: string[]; // REPLACE WITH ENUM list
  spotify_url: string;
  apple_music_url: string;
  pfp_url?: string;
}

export const ASSETS_PATH = '/../testimonial-assets';

export const GetArtistImg = (testimonial: TestimonialProps, file: string = 'jpeg') => {
  const artist_path = `${testimonial.first_name.toLowerCase() + '_' + testimonial.last_name.toLowerCase()}`;
  return `${ASSETS_PATH}/${artist_path}/pfp.${file}`
}

export let Testimonials_Data: TestimonialProps[] = [
  {
    id: 1,
    first_name: "David",
    last_name: "Vines",
    highlight_quote: "From custom producing my beat to mixing, mastering, and even scheduling consistent meetings, they delivered everything I needed. They didn’t just handle tasks—they empowered me with structure, attention to detail, and a streamlined process that boosted my confidence. They did not stop working on the project until I was 100% satisfied",
    services_purchased: ["service1", "service2"],
    spotify_url: "",
    apple_music_url: "",
  }
];
