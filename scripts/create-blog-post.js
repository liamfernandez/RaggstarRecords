import fs from 'fs';
import path from 'path';

function formatTitleNameToSlug(post_name)
{
  return post_name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')  // Replace non-alphanumeric characters with hyphens
        .replace(/^-+|-+$/g, '')      // Remove leading and trailing hyphens
        .replace(/--+/g, '-');        // Replace multiple hyphens with a single hyphen
}

// --------------- END HELPERS ---------------

// Function to create a new blog post
function createBlogPost(name, blogPostSubtitle) {
  // Create handle from name of the post
  const slug = formatTitleNameToSlug(name);

  const staticFolder = path.join('static', 'blog-assets', `assets-${slug}`);
  const routesFolder = path.join('src', 'routes', '(blog)', 'blog', slug);
  const templateFile = path.join('src', 'routes', '(blog)', 'blog', 'DUPLICATE_OPTION', '+page.md');
  const blogPostRepoFile = path.join('src', 'lib', 'repositories', 'BlogPostRepository.ts');

  // Create folder in static/blog-assets
  fs.mkdirSync(staticFolder, { recursive: true });
  console.log(`Created folder: ${staticFolder}`);

  // Create folder in src/routes/(blog)/blog
  fs.mkdirSync(routesFolder, { recursive: true });
  console.log(`Created folder: ${routesFolder}`);

  // Copy template file to new routes folder
  fs.copyFileSync(templateFile, path.join(routesFolder, '+page.md'));
  console.log(`Copied template to: ${path.join(routesFolder, '+page.md')}`);

  // Update BlogPostRepository.ts
  let blogManagerContent = fs.readFileSync(blogPostRepoFile, 'utf8');
  const newBlogPost = ` {
		title: '${name}',
		subtitle: '${blogPostSubtitle}',
		description: 'FILL THIS IN',
    slug: '${slug}',
		image: 'assets-${slug}',
    post_color: '#FFC0CB', // CHANGE THIS
		date_published: new Date(2025, 2, 1)
	},`;

  // Find the position to insert the new blog post
  const insertPosition = blogManagerContent.indexOf('let DefaultBlogPosts: BlogCardProps[] = [') + 'let DefaultBlogPosts: BlogCardProps[] = ['.length;

  // Insert the new blog post at the beginning of the array
  blogManagerContent = blogManagerContent.slice(0, insertPosition) + '\n' + newBlogPost + blogManagerContent.slice(insertPosition);

  fs.writeFileSync(blogPostRepoFile, blogManagerContent);
  console.log(`Updated BlogPostRepository.ts with new blog post: ${name}`);
}

// Get the blog post name from command line arguments
const blogPostName = process.argv[2];
const blogPostSubtitle = process.argv[3];

if (!blogPostName) {
  console.error('Please provide a name for the blog post');
  process.exit(1);
}

if (!blogPostSubtitle)
{
  console.error('Please provide a subtitle for the blog post');
  process.exit(1);
}

createBlogPost(blogPostName, blogPostSubtitle);
