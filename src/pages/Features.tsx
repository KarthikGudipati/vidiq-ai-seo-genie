
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const Features: React.FC = () => {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Powerful SEO Features</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Our AI-powered platform provides everything you need to optimize your videos for maximum visibility.
        </p>
      </div>

      {/* Main Features */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mb-16">
        <Card>
          <CardHeader>
            <div className="p-2 bg-primary/10 rounded-md w-12 h-12 flex items-center justify-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" />
              </svg>
            </div>
            <CardTitle>AI-Powered Video Analysis</CardTitle>
            <CardDescription>Extract valuable insights from any video content</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Our advanced AI algorithms analyze your video content, extract spoken words, 
              detect topics, and identify key themes to generate SEO recommendations.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="p-2 bg-primary/10 rounded-md w-12 h-12 flex items-center justify-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
              </svg>
            </div>
            <CardTitle>Keyword Generation</CardTitle>
            <CardDescription>Discover high-performing keywords for your niche</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Get targeted keyword suggestions that are proven to rank well in your content category, 
              with search volume data and competition analysis.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="p-2 bg-primary/10 rounded-md w-12 h-12 flex items-center justify-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <CardTitle>Optimized Descriptions</CardTitle>
            <CardDescription>Generate SEO-friendly video descriptions</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Create compelling, keyword-rich descriptions that help YouTube's algorithm understand 
              your content and rank it for relevant searches.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="p-2 bg-primary/10 rounded-md w-12 h-12 flex items-center justify-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
            </div>
            <CardTitle>Hashtag Recommendation</CardTitle>
            <CardDescription>Get trending hashtags for your video content</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Discover popular and trending hashtags specific to your video content to expand 
              reach and boost discoverability across platforms.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="p-2 bg-primary/10 rounded-md w-12 h-12 flex items-center justify-center text-primary mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2m-2 4h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <CardTitle>Performance Analytics</CardTitle>
            <CardDescription>Track your video's SEO performance</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-gray-500">
              Monitor your video's performance with detailed analytics on views, engagement, 
              and SEO ranking improvements over time.
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Call to Action */}
      <div className="text-center bg-primary/5 p-10 rounded-xl">
        <h2 className="text-3xl font-bold mb-4">Ready to optimize your videos?</h2>
        <p className="text-xl text-gray-500 mb-6 max-w-2xl mx-auto">
          Start using our AI-powered SEO tools today and see your video rankings improve.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Button asChild size="lg">
            <Link to="/signup">Get Started Free</Link>
          </Button>
          <Button asChild size="lg" variant="outline">
            <Link to="/pricing">View Pricing</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Features;
