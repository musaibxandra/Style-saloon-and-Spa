import React from 'react';
import { Scissors, Sparkles, Heart, Flower2, Clock, Star } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

type ServiceCardProps = {
  title: string;
  description: string;
  price: number;
  duration: string;
  popular: boolean;
};

const ServiceCard = ({ title, description, price, duration, popular }: ServiceCardProps) => (
  <Card className="relative hover:shadow-lg transition-shadow duration-300">
    {popular && (
      <Badge className="absolute top-4 right-4 bg-black text-white">
        <Star className="w-3 h-3 mr-1" />
        Popular
      </Badge>
    )}
    <CardHeader>
      <CardTitle className="text-xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-2 text-muted-foreground">
          <Clock className="w-4 h-4" />
          <span className="text-sm">{duration}</span>
        </div>
        <div className="text-2xl font-bold">${price}</div>
      </div>
    </CardContent>
  </Card>
);

export default function SalonCatalog() {
  const sessions = [
    {
      title: "Express Makeover",
      description: "Quick makeup touch-up perfect for events and special occasions",
      price: 45,
      duration: "30 min",
      popular: false
    },
    {
      title: "Bridal Makeup Package",
      description: "Complete bridal makeup with trial session, airbrush foundation, and lashes",
      price: 250,
      duration: "2 hours",
      popular: true
    },
    {
      title: "Full Glam Session",
      description: "Professional makeup with contouring, highlighting, and false lashes",
      price: 85,
      duration: "1 hour",
      popular: true
    },
    {
      title: "Natural Beauty",
      description: "Subtle, natural-looking makeup perfect for everyday wear",
      price: 55,
      duration: "45 min",
      popular: false
    }
  ];

  const classics = [
    {
      title: "Classic Haircut",
      description: "Traditional haircut with wash, cut, and blow dry",
      price: 35,
      duration: "45 min",
      popular: false
    },
    {
      title: "Luxury Coloring",
      description: "Full hair coloring with premium products and conditioning treatment",
      price: 120,
      duration: "3 hours",
      popular: true
    },
    {
      title: "Keratin Treatment",
      description: "Smoothing keratin treatment for frizz-free, silky hair",
      price: 200,
      duration: "3 hours",
      popular: false
    },
    {
      title: "Highlights & Balayage",
      description: "Hand-painted highlights for a natural, sun-kissed look",
      price: 150,
      duration: "2.5 hours",
      popular: true
    },
    {
      title: "Hair Extensions",
      description: "Premium quality extensions application for length and volume",
      price: 300,
      duration: "4 hours",
      popular: false
    },
    {
      title: "Deep Conditioning",
      description: "Intensive hydration treatment with scalp massage",
      price: 45,
      duration: "30 min",
      popular: false
    }
  ];

  const popular = [
    {
      title: "Swedish Massage",
      description: "Full body relaxation massage with gentle, flowing strokes",
      price: 90,
      duration: "60 min",
      popular: true
    },
    {
      title: "Deep Tissue Massage",
      description: "Therapeutic massage targeting muscle tension and knots",
      price: 110,
      duration: "60 min",
      popular: true
    },
    {
      title: "Hot Stone Therapy",
      description: "Heated stones combined with massage for deep relaxation",
      price: 130,
      duration: "75 min",
      popular: true
    },
    {
      title: "Aromatherapy Massage",
      description: "Massage with essential oils tailored to your needs",
      price: 100,
      duration: "60 min",
      popular: false
    },
    {
      title: "Couples Massage",
      description: "Side-by-side massage experience for two",
      price: 180,
      duration: "60 min",
      popular: false
    }
  ];

  const spa = [
    {
      title: "Signature Facial",
      description: "Customized facial treatment with cleansing, exfoliation, and mask",
      price: 85,
      duration: "60 min",
      popular: true
    },
    {
      title: "Luxury Spa Package",
      description: "Full day spa experience with massage, facial, manicure, and pedicure",
      price: 350,
      duration: "4 hours",
      popular: true
    },
    {
      title: "Body Scrub & Wrap",
      description: "Exfoliating body scrub followed by nourishing wrap",
      price: 120,
      duration: "90 min",
      popular: false
    },
    {
      title: "Manicure & Pedicure",
      description: "Complete nail care with polish and hand/foot massage",
      price: 65,
      duration: "75 min",
      popular: true
    },
    {
      title: "Anti-Aging Facial",
      description: "Advanced facial treatment targeting fine lines and wrinkles",
      price: 140,
      duration: "75 min",
      popular: false
    },
    {
      title: "Reflexology Session",
      description: "Therapeutic foot massage focusing on pressure points",
      price: 70,
      duration: "45 min",
      popular: false
    }
  ];

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-2">Our Services</h1>
          <p className="text-muted-foreground">Indulge in peace and relaxation</p>
        </div>

        <Tabs defaultValue="sessions" className="w-full">
          <TabsList className="grid w-full grid-cols-4 mb-8">
            <TabsTrigger value="sessions" className="flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              <span className="hidden sm:inline">Sessions</span>
            </TabsTrigger>
            <TabsTrigger value="classics" className="flex items-center gap-2">
              <Scissors className="w-4 h-4" />
              <span className="hidden sm:inline">Hair Classics</span>
            </TabsTrigger>
            <TabsTrigger value="popular" className="flex items-center gap-2">
              <Heart className="w-4 h-4" />
              <span className="hidden sm:inline">Massage</span>
            </TabsTrigger>
            <TabsTrigger value="spa" className="flex items-center gap-2">
              <Flower2 className="w-4 h-4" />
              <span className="hidden sm:inline">Spa</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="sessions">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {sessions.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="classics">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {classics.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="popular">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {popular.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>

          <TabsContent value="spa">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {spa.map((service, index) => (
                <ServiceCard key={index} {...service} />
              ))}
            </div>
          </TabsContent>
        </Tabs>

        <Card className="mt-16 text-center">
          <CardHeader>
            <CardTitle className="text-2xl p-6">Ready to Book?</CardTitle>
            <CardDescription>Contact us to schedule your appointment today</CardDescription>
          </CardHeader>
          <CardContent>
            <Button size="lg" className="bg-black text-white hover:bg-black/90">
              Book Now
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}