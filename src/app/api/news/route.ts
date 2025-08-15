import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q') || 'latest';
  const pageSize = searchParams.get('pageSize') || '4';
  const page = searchParams.get('page') || '1';

  try {
    const apiKey = process.env.NEWS_API_KEY;
    if (!apiKey) throw new Error("News API key not configured");

    const url = `https://newsapi.org/v2/everything?q=${query}&pageSize=${pageSize}&page=${page}&sortBy=publishedAt&apiKey=${apiKey}`;
    
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'news-weather-dashboard',
      },
    });

    if (!response.ok) {
      throw new Error(`News API responded with status: ${response.status}`);
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error('News API error:', error);
    return NextResponse.json(
      { error: 'Failed to fetch news' },
      { status: 500 }
    );
  }
}
