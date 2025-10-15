import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { NichelyLogo } from "@/components/nichely-logo"
import { FeatureCard } from "@/components/feature-card"
import { ArrowRight, Brain, TrendingUp, Target, Zap, Users, BarChart3 } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border/50 backdrop-blur-sm bg-background/80 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <NichelyLogo size="md" />
            <nav className="hidden md:flex items-center gap-6">
              <a href="#features" className="text-foreground hover:text-secondary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-foreground hover:text-secondary transition-colors">
                How It Works
              </a>
              <a href="#pricing" className="text-foreground hover:text-secondary transition-colors">
                Pricing
              </a>
            </nav>
            <Button
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
            >
              Get Started
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 to-accent/5" />
        <div className="container mx-auto text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
              Discover Your Perfect <span className="text-secondary">Niche</span> with AI
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-pretty leading-relaxed text-ring font-light">
              Unlock profitable opportunities with AI-powered niche discovery. Get data-driven insights, market
              analysis, and actionable recommendations to find your next successful venture.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
                Start Discovering
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground bg-transparent"
              >
                Watch Demo
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">Powered by Advanced AI Technology</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Our cutting-edge algorithms analyze millions of data points to uncover hidden opportunities in any market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Brain className="w-12 h-12" />}
              title="AI-Powered Analysis"
              description="Advanced machine learning algorithms analyze market trends, competition, and consumer behavior to identify profitable niches."
            />
            <FeatureCard
              icon={<TrendingUp className="w-12 h-12" />}
              title="Market Intelligence"
              description="Real-time data on market size, growth potential, and emerging trends to help you make informed decisions."
            />
            <FeatureCard
              icon={<Target className="w-12 h-12" />}
              title="Precision Targeting"
              description="Identify specific audience segments and their pain points to create products that truly resonate."
            />
            <FeatureCard
              icon={<Zap className="w-12 h-12" />}
              title="Instant Insights"
              description="Get comprehensive niche reports in minutes, not weeks. Fast-track your research process."
            />
            <FeatureCard
              icon={<Users className="w-12 h-12" />}
              title="Competitor Analysis"
              description="Understand your competition landscape and find gaps in the market you can exploit."
            />
            <FeatureCard
              icon={<BarChart3 className="w-12 h-12" />}
              title="Profitability Scoring"
              description="Each niche gets a detailed profitability score based on multiple factors and market conditions."
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-balance">How Nichely Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Three simple steps to discover your next profitable niche
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Input Your Interests</h3>
                <p className="text-muted-foreground">
                  Tell us about your passions, skills, or areas of interest. Our AI will use this as a starting point.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">AI Analysis</h3>
                <p className="text-muted-foreground">
                  Our algorithms analyze market data, trends, and opportunities to find the best niches for you.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <CardContent className="p-0">
                <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-secondary">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Get Actionable Insights</h3>
                <p className="text-muted-foreground">
                  Receive detailed reports with market analysis, target audience insights, and profit potential.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-r from-secondary/10 to-accent/10">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6 text-balance">Ready to Discover Your Next Big Opportunity?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto text-pretty font-light text-ring">
            Join thousands of entrepreneurs who have found their profitable niches with Nichely.
          </p>
          <Button size="lg" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground">
            Start Your Free Trial
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/50 py-12 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <NichelyLogo size="sm" />
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Privacy
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Terms
              </a>
              <a href="#" className="text-muted-foreground hover:text-secondary transition-colors">
                Contact
              </a>
            </div>
          </div>
          <div className="text-center mt-8 pt-8 border-t border-border/50">
            <p className="text-muted-foreground">© 2025 Nichely. All rights reserved. Powered by AI.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
