
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useToast } from '@/components/ui/use-toast';

const Dashboard: React.FC = () => {
  const [videoUrl, setVideoUrl] = useState('');
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const { toast } = useToast();
  
  const handleAnalyzeVideo = () => {
    if (!videoUrl) {
      toast({
        title: "Error",
        description: "Please enter a video URL or upload a video",
        variant: "destructive",
      });
      return;
    }
    
    setIsAnalyzing(true);
    // In a real implementation, this would call the backend API
    setTimeout(() => {
      toast({
        title: "Analysis started",
        description: "Your video is being analyzed. This may take a few minutes.",
      });
      setIsAnalyzing(false);
      // In a real app, we would redirect to results page or update state
    }, 2000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      toast({
        title: "Video uploaded",
        description: "Your video has been uploaded successfully.",
      });
      // In a real app, we would upload the file to a server
    }
  };

  return (
    <div className="container py-10">
      <h1 className="text-3xl font-bold mb-2">Welcome to your Dashboard</h1>
      <p className="text-gray-500 mb-8">You've successfully signed in to your account.</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Analyze Video
            </CardTitle>
            <CardDescription>
              Upload or paste your video URL to generate SEO recommendations.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Upload or paste your video URL to generate SEO recommendations.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Input 
                  placeholder="Paste YouTube video URL" 
                  value={videoUrl}
                  onChange={(e) => setVideoUrl(e.target.value)}
                />
                <Button 
                  onClick={handleAnalyzeVideo}
                  disabled={isAnalyzing}
                >
                  {isAnalyzing ? "Analyzing..." : "Analyze"}
                </Button>
              </div>
              <div className="flex justify-center items-center border-2 border-dashed border-gray-300 p-4 rounded-lg">
                <label className="flex flex-col items-center justify-center cursor-pointer w-full">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 mb-2">
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                  <span className="text-sm text-gray-500">Upload a video file</span>
                  <input type="file" className="hidden" accept="video/*" onChange={handleFileUpload} />
                </label>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
              </svg>
              Keyword Research
            </CardTitle>
            <CardDescription>
              Discover trending keywords and phrases for your content.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Research keywords and discover what's trending in your niche.
            </p>
            <Input placeholder="Search for keywords..." />
            <p className="text-xs text-gray-400 mt-2">
              Enter a topic to discover popular keywords
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 20V10"></path>
                <path d="M18 20V4"></path>
                <path d="M6 20v-4"></path>
              </svg>
              Performance Tracking
            </CardTitle>
            <CardDescription>
              Monitor how your optimized videos are performing over time.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-gray-500 mb-4">
              Track views, engagement, and SEO ranking of your optimized videos.
            </p>
            <div className="h-32 flex items-center justify-center border rounded bg-gray-50">
              <p className="text-gray-400 text-sm">No analytics data available yet</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="border rounded-lg p-6 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Getting Started</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">1. Upload or link your first video</h3>
            <p className="text-gray-500 text-sm">
              Use the Analyze Video card above to start optimizing your first video
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">2. Review AI recommendations</h3>
            <p className="text-gray-500 text-sm">
              Our AI will analyze your video and provide SEO-optimized keywords, descriptions and hashtags
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">3. Apply recommendations</h3>
            <p className="text-gray-500 text-sm">
              Apply the suggested changes to your YouTube video metadata
            </p>
          </div>
          <div className="space-y-2">
            <h3 className="text-lg font-semibold">4. Track performance</h3>
            <p className="text-gray-500 text-sm">
              Monitor how your optimized videos perform in terms of views, engagement, and SEO ranking
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
