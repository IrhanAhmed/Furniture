import axios from 'axios';
import { createClient } from '@sanity/client';
import slugify from 'slugify';
import { Buffer } from 'buffer';

// Sanity Client Configuration
export const client = createClient({
  projectId: '7lk1q8pv', // Replace with your Sanity project ID
  dataset: 'production',     // Replace with your dataset (e.g., "production")
  apiVersion: '2025-01-01',    // Replace with the API version you are using
  token: 'skdgJf6gPEzL9PcbbEL2dpHlnGfHPH9GOrgK97lslYD6QBWaoZvBmb8XfZ90pFDqLEWzIdmXI0UKKcwgw9HdIoWZB9X3AgzfWDPrNbAaUyMk0uo7muVP2uTC8NCfYq7FbgyIZ0760btuzKEv8HRUUgwlfhC83wrcVmna5avpD3nJUfe3eGvG',  // Replace with your Sanity token (if needed)
  useCdn: false,               // Set to false for real-time updates
});

// Function to upload images to Sanity
async function uploadImageToSanity(imageUrl) {
  try {
    const response = await axios.get(imageUrl, { responseType: 'arraybuffer', timeout: 10000 });
    const buffer = Buffer.from(response.data);

    const asset = await client.assets.upload('image', buffer, {
      filename: imageUrl.split('/').pop(), // Extract the filename from URL
    });

    console.log('Image uploaded successfully:', asset);
    return asset._id; // Return the uploaded image asset reference ID
  } catch (error) {
    console.error('❌ Failed to upload image:', imageUrl, error);
    return null;
  }
}

// Function to create or fetch a category in Sanity
async function createCategory(category, counter) {
  try {
    const categoryExist = await client.fetch(`*[_type=="category" && slug.current==$slug][0]`, {
      slug: category.slug,
    });

    if (categoryExist) {
      return categoryExist._id;
    }

    const catObj = {
      _type: 'category',
      _id: category.slug + '-' + counter,
      name: category.name,
      slug: { _type: 'slug', current: category.slug },
    };

    const response = await client.createOrReplace(catObj);
    console.log('Category created successfully:', response);
    return response._id;
  } catch (error) {
    console.error('❌ Failed to create category:', category.name, error);
    return null;
  }
}

// Main function to import data
async function importData() {
  try {
    // Fetch data from external API
    const response = await axios.get('https://hackathon-apis.vercel.app/api/products');
    const products = response.data;

    let counter = 1;

    for (const product of products) {
      let imageRef = null;
      let catRef = null;

      // Upload image if it exists
      if (product.image) {
        imageRef = await uploadImageToSanity(product.image);
      }

      // Create category if it exists
      if (product.category?.name) {
        catRef = await createCategory(
          {
            name: product.category.name,
            slug: slugify(product.category.name, { lower: true, strict: true }),
          },
          counter
        );
      }

      // Create product object for Sanity
      const sanityProduct = {
        _id: `product-${counter}`,
        _type: 'product',
        name: product.name,
        slug: {
          _type: 'slug',
          current: slugify(product.name || 'default-product', { lower: true, strict: true }),
        },
        price: product.price,
        category: catRef
          ? {
              _type: 'reference',
              _ref: catRef,
            }
          : undefined,
        tags: product.tags || [],
        quantity: 50,
        image: imageRef
          ? {
              _type: 'image',
              asset: {
                _type: 'reference',
                _ref: imageRef,
              },
            }
          : undefined,
        description:
          product.description ||
          'A timeless design, with premium materials features as one of our most popular and iconic pieces. The dandy chair is perfect for any stylish living space with beech legs and lambskin leather upholstery.',
        features: product.features || ['Premium material', 'Handmade upholstery', 'Timeless classic'],
        dimensions: product.dimensions || {
          _type: 'dimensions',
          height: '110cm',
          width: '75cm',
          depth: '50cm',
        },
      };

      console.log('Uploading product:', sanityProduct);
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.name}`);
      counter++;
    }

    console.log('✅ Data import completed!');
  } catch (error) {
    console.error('❌ Error importing data:', error);
  }
}

// Execute the import function
importData();
