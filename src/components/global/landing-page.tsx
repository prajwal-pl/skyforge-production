"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Globe,
  MessageSquare,
  Zap,
  Brain,
  Lock,
  Sparkles,
  Github,
  Twitter,
  Linkedin,
  Menu,
  X,
} from "lucide-react";
import { useRouter } from "next/navigation";

export default function LandingPage() {
  const [url, setUrl] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const router = useRouter();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.1 } },
  };

  const sidebarVariants = {
    open: { x: 0 },
    closed: { x: "100%" },
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleSubmit = (
    e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    console.log("Analyzing website:", url);
    router.push(`/chat/${url}`);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-gray-900 bg-opacity-90 backdrop-blur-sm">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <Sparkles className="mr-2 text-blue-400" />
            Skyforge
          </Link>
          <div className="hidden md:flex space-x-6">
            <Link
              href="#features"
              className="hover:text-blue-400 transition-colors"
            >
              Features
            </Link>
            <Link
              href="#how-it-works"
              className="hover:text-blue-400 transition-colors"
            >
              How It Works
            </Link>
            <Link
              href="#testimonials"
              className="hover:text-blue-400 transition-colors"
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="hover:text-blue-400 transition-colors"
            >
              Pricing
            </Link>
            <Link href="#cta" className="hover:text-blue-400 transition-colors">
              Get Started
            </Link>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden text-white border-white bg-gray-800 hover:bg-gray-600"
            onClick={toggleSidebar}
          >
            <Menu className="h-6 w-6" />
            <span className="sr-only">Open menu</span>
          </Button>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isSidebarOpen && (
          <motion.div
            className="fixed inset-y-0 right-0 w-64 bg-gray-900 z-50 p-6"
            initial="closed"
            animate="open"
            exit="closed"
            variants={sidebarVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          >
            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="icon"
                className="text-white hover:bg-gray-800"
                onClick={toggleSidebar}
              >
                <X className="h-6 w-6" />
                <span className="sr-only">Close menu</span>
              </Button>
            </div>
            <nav className="mt-8 flex flex-col space-y-4">
              <Link
                href="#features"
                className="text-white hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                Features
              </Link>
              <Link
                href="#how-it-works"
                className="text-white hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                How It Works
              </Link>
              <Link
                href="#testimonials"
                className="text-white hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                Testimonials
              </Link>
              <Link
                href="#pricing"
                className="text-white hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                Pricing
              </Link>
              <Link
                href="#cta"
                className="text-white hover:text-blue-400 transition-colors"
                onClick={toggleSidebar}
              >
                Get Started
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto text-center">
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Forge Knowledge from Any Website
          </motion.h1>
          <motion.p
            className="text-xl mb-8 text-gray-300"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            Skyforge: Your AI-powered companion for instant website analysis and
            intelligent Q&A.
          </motion.p>
          <motion.div
            className="max-w-md mx-auto"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            <form className="flex" onSubmit={handleSubmit}>
              <Input
                type="url"
                placeholder="Enter website URL"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="flex-grow mr-2 bg-gray-800 text-white border-gray-700 focus:border-blue-400"
              />
              <Button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 transition-colors"
              >
                Analyze
              </Button>
            </form>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
          <motion.div
            className="grid md:grid-cols-3 gap-8"
            variants={stagger}
            initial="hidden"
            animate="visible"
          >
            {[
              {
                icon: <Globe className="w-16 h-16 mb-4 text-blue-400" />,
                title: "Advanced Website Analysis",
                description:
                  "Instantly analyze any website and extract key information using cutting-edge AI technology.",
              },
              {
                icon: (
                  <MessageSquare className="w-16 h-16 mb-4 text-green-400" />
                ),
                title: "Interactive Q&A",
                description:
                  "Engage in natural language conversations about website content, getting accurate and context-aware answers.",
              },
              {
                icon: <Zap className="w-16 h-16 mb-4 text-yellow-400" />,
                title: "Lightning-Fast Results",
                description:
                  "Get insights in seconds, saving you hours of manual research and information gathering.",
              },
              {
                icon: <Brain className="w-16 h-16 mb-4 text-purple-400" />,
                title: "Continuous Learning",
                description:
                  "Our AI model continuously improves, providing increasingly accurate and relevant information over time.",
              },
              {
                icon: <Lock className="w-16 h-16 mb-4 text-red-400" />,
                title: "Secure & Private",
                description:
                  "Your queries and analyzed data are kept secure and private, with optional end-to-end encryption.",
              },
              {
                icon: <Sparkles className="w-16 h-16 mb-4 text-pink-400" />,
                title: "Custom Insights",
                description:
                  "Tailor the AI to focus on specific types of information or analysis based on your unique needs.",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg text-center flex flex-col items-center"
                variants={fadeIn}
                transition={{ duration: 0.5 }}
              >
                {feature.icon}
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            How Skyforge Works
          </h2>
          <div className="max-w-3xl mx-auto">
            {[
              {
                step: 1,
                title: "Enter a URL",
                description:
                  "Simply paste the link of any website you want to analyze into Skyforge.",
              },
              {
                step: 2,
                title: "AI-Powered Analysis",
                description:
                  "Our advanced AI reads, understands, and contextualizes the websites content in seconds.",
              },
              {
                step: 3,
                title: "Ask Anything",
                description:
                  "Interact with Skyforge by asking any questions about the websites content, structure, or purpose.",
              },
              {
                step: 4,
                title: "Receive Intelligent Answers",
                description:
                  "Get accurate, insightful, and context-aware answers in real-time, powered by our AI.",
              },
              {
                step: 5,
                title: "Explore Further",
                description:
                  "Use Skyforges insights to dive deeper, compare websites, or gather specific information effortlessly.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="flex mb-8"
                ref={ref}
                variants={fadeIn}
                initial="hidden"
                animate={controls}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center text-2xl font-bold mr-4">
                  {item.step}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-900">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            What Our Users Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Alex Chen",
                role: "Digital Marketer",
                quote:
                  "Skyforge has revolutionized my research process. Its like having a brilliant research assistant available 24/7.",
              },
              {
                name: "Sarah Johnson",
                role: "Content Creator",
                quote:
                  "The depth of analysis Skyforge provides is incredible. It helps me create more informed and engaging content.",
              },
              {
                name: "Michael Brown",
                role: "SEO Specialist",
                quote:
                  "Skyforges ability to quickly analyze competitors websites has given me a significant edge in my SEO strategies.",
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <p className="text-gray-300 mb-4">"{testimonial.quote}"</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">
            Choose Your Plan
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Basic",
                price: "$9.99",
                features: [
                  "100 website analyses/month",
                  "Basic Q&A functionality",
                  "24/7 AI availability",
                ],
              },
              {
                name: "Pro",
                price: "$24.99",
                features: [
                  "Unlimited website analyses",
                  "Advanced Q&A with context understanding",
                  "Custom data extraction",
                  "Priority support",
                ],
              },
              {
                name: "Enterprise",
                price: "Custom",
                features: [
                  "All Pro features",
                  "Dedicated account manager",
                  "Custom AI model training",
                  "API access",
                  "Advanced analytics",
                ],
              },
            ].map((plan, index) => (
              <motion.div
                key={index}
                className="bg-gray-800 p-6 rounded-lg flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                <p className="text-4xl font-bold mb-6">{plan.price}</p>
                <ul className="mb-6 flex-grow">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="mb-2 flex items-center">
                      <Zap className="w-4 h-4 mr-2 text-blue-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-500 hover:bg-blue-600 transition-colors">
                  Get Started
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section
        id="cta"
        className="py-20 bg-gradient-to-b from-gray-900 to-black"
      >
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-8">
            Ready to Forge Knowledge with AI?
          </h2>
          <p className="text-xl mb-8 text-gray-300">
            Join thousands of professionals using Skyforge to revolutionize
            their web research and analysis.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-8 rounded-full text-lg transition-colors">
              Start Your Free Trial
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Skyforge</h3>
              <p className="text-gray-400">
                Empowering web research with AI-driven insights and analysis.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#features"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#how-it-works"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    How It Works
                  </Link>
                </li>
                <li>
                  <Link
                    href="#pricing"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    Cookie Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Connect</h3>
              <div className="flex space-x-4">
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Twitter className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Linkedin className="w-6 h-6" />
                </Link>
                <Link
                  href="#"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Github className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">
              © 2023 Skyforge AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
