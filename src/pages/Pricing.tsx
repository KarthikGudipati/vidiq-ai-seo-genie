
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
import { Check } from 'lucide-react';

const PricingTier = ({ 
  name, 
  price, 
  description, 
  features, 
  highlighted = false, 
  buttonText = "Get Started" 
}: {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
}) => (
  <Card className={`flex flex-col h-full ${highlighted ? 'border-primary shadow-lg' : ''}`}>
    <CardHeader>
      <CardTitle>{name}</CardTitle>
      <div className="mt-4 flex items-baseline text-5xl font-bold">
        {price}
        {price !== 'Free' && <span className="ml-1 text-xl font-medium text-gray-500">/month</span>}
      </div>
      <CardDescription className="mt-2">{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <ul className="mt-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex">
            <Check className="h-5 w-5 flex-shrink-0 text-primary" aria-hidden="true" />
            <span className="ml-3 text-gray-500">{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button 
        asChild 
        className={`w-full ${highlighted ? '' : 'bg-gray-800 hover:bg-gray-700'}`} 
        variant={highlighted ? "default" : "outline"}
      >
        <Link to="/signup">{buttonText}</Link>
      </Button>
    </CardFooter>
  </Card>
);

const Pricing: React.FC = () => {
  return (
    <div className="container py-12 md:py-16 lg:py-24">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl">Simple, Transparent Pricing</h1>
        <p className="mt-4 text-xl text-gray-500 max-w-3xl mx-auto">
          Choose the perfect plan for your video optimization needs.
          All plans include core AI-powered SEO features.
        </p>
      </div>

      {/* Pricing Toggle */}
      <div className="flex justify-center mt-8 mb-12">
        <div className="relative flex items-center p-1 bg-gray-100 rounded-full">
          <span className="px-4 py-2 text-sm font-medium text-gray-900">
            Monthly
          </span>
          <span className="px-4 py-2 text-sm font-medium bg-white text-primary rounded-full shadow-sm">
            Annual (Save 20%)
          </span>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        <PricingTier
          name="Free"
          price="Free"
          description="Perfect for beginners who want to try our tools."
          features={[
            "Analyze up to 3 videos per month",
            "Basic keyword suggestions",
            "Standard description generator",
            "5 hashtag recommendations per video",
            "Basic analytics",
          ]}
          buttonText="Sign Up Free"
        />
        
        <PricingTier
          name="Pro"
          price="$29"
          description="Best for content creators looking to grow their channel."
          features={[
            "Analyze up to 30 videos per month",
            "Advanced keyword research",
            "Optimized description generator",
            "Unlimited hashtag recommendations",
            "Comprehensive analytics dashboard",
            "Email notifications",
            "Priority email support",
          ]}
          highlighted={true}
          buttonText="Get Pro"
        />
        
        <PricingTier
          name="Enterprise"
          price="$99"
          description="For businesses and professional YouTubers."
          features={[
            "Unlimited video analysis",
            "Advanced competitor analysis",
            "Premium description generator with A/B testing",
            "Trending hashtag predictions",
            "Advanced performance analytics",
            "WhatsApp & email notifications",
            "Dedicated account manager",
            "API access",
          ]}
          buttonText="Contact Sales"
        />
      </div>
      
      {/* FAQ */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div>
            <h3 className="font-bold text-lg mb-2">Can I change plans later?</h3>
            <p className="text-gray-500">Yes, you can upgrade or downgrade your plan at any time. Changes will be applied to your next billing cycle.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">How accurate are the keyword suggestions?</h3>
            <p className="text-gray-500">Our AI analyzes current trends and search patterns to provide keywords with high relevance and search volume potential.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">Do you offer refunds?</h3>
            <p className="text-gray-500">We offer a 14-day money-back guarantee if you're not satisfied with our service.</p>
          </div>
          <div>
            <h3 className="font-bold text-lg mb-2">What payment methods do you accept?</h3>
            <p className="text-gray-500">We accept all major credit cards, PayPal, and bank transfers for annual enterprise plans.</p>
          </div>
        </div>
      </div>
      
      {/* Call to Action */}
      <div className="text-center bg-primary/5 p-10 rounded-xl mt-16">
        <h2 className="text-3xl font-bold mb-4">Still have questions?</h2>
        <p className="text-xl text-gray-500 mb-6 max-w-2xl mx-auto">
          Our team is ready to help you choose the right plan for your needs.
        </p>
        <Button asChild size="lg" variant="default">
          <a href="mailto:support@seokeywordguru.com">Contact Support</a>
        </Button>
      </div>
    </div>
  );
};

export default Pricing;
