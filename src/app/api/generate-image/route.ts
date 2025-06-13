import { NextRequest, NextResponse } from 'next/server';
import OpenAI from 'openai';

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { brandName, brandDescription, ingredient, fragrance, color } = await req.json();

    if (!brandName || !brandDescription) {
      return NextResponse.json({ error: 'Brand name and description are required' }, { status: 400 });
    }

    const prompt = `Create a 3D render of a cosmetic bottle for a brand named "${brandName}".
    The brand is about: "${brandDescription}".
    The product has the following characteristics:
    - Ingredient: ${ingredient}
    - Fragrance: ${fragrance}
    - Color: ${color}
    The bottle should look modern, minimalist, and luxurious. It should be placed on a clean, light-colored background.
    `;

    const response = await openai.images.generate({
      model: 'dall-e-3',
      prompt: prompt,
      n: 1,
      size: '1024x1024',
    });

    const imageUrl = response.data?.[0]?.url;

    if (!imageUrl) {
      return NextResponse.json({ error: 'Failed to get image URL from OpenAI response' }, { status: 500 });
    }

    return NextResponse.json({ imageUrl });

  } catch (error) {
    console.error('Error generating image:', error);
    return NextResponse.json({ error: 'Failed to generate image' }, { status: 500 });
  }
} 