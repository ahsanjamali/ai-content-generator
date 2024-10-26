import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { BrainCircuit, CheckCircle, Zap, ArrowRight } from "lucide-react";
import Link from "next/link";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center justify-between bg-[#704ef8] text-white">
        <Link className="flex items-center justify-center" href="#">
          <BrainCircuit className="h-6 w-6 mr-2" />
          <span className="font-bold">AI Content Generator</span>
        </Link>
        <nav className="flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#features"
          >
            Features
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#contact"
          >
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-[#704ef8] text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Create Engaging Content with AI
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                  Generate high-quality, unique content for your blog, social
                  media, or marketing campaigns in seconds with 25+ tools.
                </p>
              </div>
              <div className="space-x-4">
                <Link href="/sign-up">
                  <Button className="bg-white text-[#704ef8] hover:bg-gray-100">
                    Get Started For Free
                  </Button>
                </Link>
                {/* <Button
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-[#704ef8]"
                >
                  Learn More
                </Button> */}
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-12 md:py-24 lg:py-32 bg-gray-100"
        >
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12 text-[#704ef8]">
              Powerful Features
            </h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 mb-4 text-[#704ef8]" />
                <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
                <p className="text-gray-600">
                  Generate content in seconds, not hours.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <CheckCircle className="h-12 w-12 mb-4 text-[#704ef8]" />
                <h3 className="text-xl font-bold mb-2">SEO Optimized</h3>
                <p className="text-gray-600">
                  Content designed to rank high in search results.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <BrainCircuit className="h-12 w-12 mb-4 text-[#704ef8]" />
                <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
                <p className="text-gray-600">
                  Leveraging cutting-edge AI technology for superior content.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="cta"
          className="w-full py-12 md:py-24 lg:py-32 bg-[#704ef8] text-white"
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Ready to Revolutionize Your Content?
                </h2>
                <p className="mx-auto max-w-[600px] text-gray-200 md:text-xl">
                  Join thousands of content creators who are already using AI
                  Content Generator to streamline their workflow.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                {/* <Input
                    className="max-w-lg flex-1 bg-white text-gray-900"
                    placeholder="Enter your email"
                    type="email"
                  /> */}
                <Button
                  type="submit"
                  className="bg-white text-[#704ef8] hover:bg-gray-100"
                >
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>

                <p className="text-xs text-gray-200">
                  Start your free trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center justify-between px-4 md:px-6 border-t bg-[#704ef8] text-white">
        <p className="text-xs">
          © 2024 AI Content Generator. All rights reserved.
        </p>
        <nav className="flex gap-4 sm:gap-6">
          <p>By Ahsan Jamali</p>
        </nav>
      </footer>
    </div>
  );
}
