import React, { useState } from "react";
import { motion } from "framer-motion";
import "tailwindcss/tailwind.css";

const App: React.FC = () => {
 const [progress] = useState(60); // Progress for achievements (example)

  return (
    <div className="bg-gray-900 text-white font-sans">
      <HeroSection />
      <FeaturesSection />
      <AchievementSection progress={progress} />
      <TestimonialsSection />
      <PricingSection />
      <SignupSection />
      <ContactUsSection />
      <Footer />
    </div>
  );
};

const HeroSection: React.FC = () => (
  <motion.section
    className="bg-gradient-to-r from-indigo-600 to-purple-700 text-white py-20 px-6 relative overflow-hidden"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    {/* Floating Stars */}
    <motion.div
      className="absolute top-10 right-10 text-yellow-400 text-6xl opacity-70 animate-spin-slow"
    >
      ⭐
    </motion.div>
    <motion.div
      className="absolute bottom-20 left-20 text-pink-300 text-6xl opacity-50 animate-spin-slow-reverse"
    >
      🌟
    </motion.div>

    <div className="max-w-6xl mx-auto text-center relative z-10">
      <h1 className="text-5xl md:text-7xl font-extrabold mb-4 drop-shadow-lg">
      Empowering Your Sales, Simplifying Your Workflows.
      </h1>
      <p className="text-xl md:text-2xl mb-8 drop-shadow-md">
        Unlock achievements, track progress, and level up your tasks.
      </p>
      <div className="space-x-4">
        <MotionButton className="bg-purple-700" text="Start Quest" />
        <MotionButton className="bg-purple-700" text="Learn More" />
      </div>
    </div>
  </motion.section>
);

const FeaturesSection: React.FC = () => (
  <motion.section
    className="py-16 px-6 bg-gray-800"
    initial={{ x: "-100vw" }}
    animate={{ x: 0 }}
    transition={{ type: "spring", stiffness: 50 }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-white">Features & Benefits</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            name: "Automated Address Entry",
            icon: "📍",
            description: "Streamline address input with automation.",
          },
          {
            name: "Automatic Amount Confirmation",
            icon: "✅",
            description: "Eliminate errors with automated amount checks.",
          },
          {
            name: "Order Confirmation Automation",
            icon: "📦",
            description: "Quickly confirm orders without manual effort.",
          },
        ].map((feature, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="bg-white text-gray-900 rounded-lg shadow-lg p-6 relative overflow-hidden"
          >
            <motion.div
              className="absolute top-0 left-0 bg-gradient-to-br from-blue-500 to-purple-500 w-full h-full opacity-10"
              animate={{ rotate: 360 }}
              transition={{ duration: 15, repeat: Infinity }}
            ></motion.div>
            <div className="text-4xl mb-4">{feature.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{feature.name}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const AchievementSection: React.FC<{ progress: number }> = ({ progress }) => (
  <motion.section
    className="py-16 px-6 bg-gradient-to-t from-gray-800 to-gray-700"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-yellow-300">
        Achievements & Progress
      </h2>
      <div className="relative bg-gray-800 rounded-lg shadow-lg p-6 text-left">
        <h3 className="text-xl font-bold mb-4 text-white">Current Progress</h3>
        <div className="mb-6">
          <div className="bg-gray-600 w-full rounded-full h-6">
            <motion.div
              className="bg-yellow-400 h-6 rounded-full text-center text-sm font-bold text-gray-900"
              style={{ width: `${progress}%` }}
              initial={{ width: "0%" }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 2 }}
            >
              {progress}%
            </motion.div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-4">
          {[
            { name: "First Milestone", icon: "🎯", unlocked: true },
            { name: "Automation Pro", icon: "⚙️", unlocked: progress > 50 },
            { name: "Order Guru", icon: "📦", unlocked: progress > 75 },
          ].map((achievement, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.1 }}
              className={`p-4 rounded-lg shadow-lg ${
                achievement.unlocked ? "bg-green-500 text-white" : "bg-gray-600 text-gray-400"
              }`}
            >
              <div className="text-3xl mb-2">{achievement.icon}</div>
              <h4 className="text-lg font-semibold">{achievement.name}</h4>
              {!achievement.unlocked && <p className="text-sm">Locked</p>}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

const TestimonialsSection: React.FC = () => (
  <motion.section
    className="bg-gray-900 py-16 px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12 text-yellow-300">Customer Stories</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {[
          {
            quote: "Billzzy transformed how we handle orders! It's a game changer.",
            name: "Krishna K",
          },
          {
            quote: "Our workflow has never been smoother. Highly recommend!",
            name: "Rashika Mandi",
          },
        ].map((testimonial, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.05 }}
            className="bg-gray-800 rounded-lg shadow-lg p-6 border border-yellow-500"
          >
            <p className="italic mb-4 text-white">"{testimonial.quote}"</p>
            <h4 className="text-lg font-semibold text-yellow-300">- {testimonial.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const PricingSection: React.FC = () => (
  <motion.section
    className="bg-gray-900 text-white py-16 px-6"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-12">Pricing Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Basic",
            price: "$10/month",
            features: ["Automated Address Entry", "Basic Support"],
          },
          {
            title: "Pro",
            price: "$25/month",
            features: ["All Basic Features", "Priority Support", "Advanced Analytics"],
          },
          {
            title: "Ultimate",
            price: "$50/month",
            features: ["All Pro Features", "Unlimited Usage", "Custom Integrations"],
          },
        ].map((plan, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.1 }}
            className="bg-gray-800 p-6 rounded-lg shadow-lg border border-yellow-500"
          >
            <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
            <p className="text-4xl font-extrabold mb-4 text-yellow-400">{plan.price}</p>
            <ul className="space-y-2 text-left">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center space-x-2">
                  <span className="text-yellow-500">✔</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <button className="mt-6 px-4 py-2 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow hover:bg-yellow-400">
              Get Started
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.section>
);

const SignupSection: React.FC = () => (
  <motion.section
    className="bg-gradient-to-r from-blue-500 to-purple-700 py-16 px-6 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto text-center">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8">Ready to Join?</h2>
      <p className="mb-8 text-lg">
        Sign up today and start your gamified journey toward productivity.
      </p>
      <form className="flex flex-col md:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full md:w-1/2 px-4 py-2 rounded-lg text-gray-900"
        />
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-lg"
        >
          Sign Up
        </motion.button>
      </form>
    </div>
  </motion.section>
);

const ContactUsSection: React.FC = () => (
  <motion.section
    className="bg-gray-800 py-16 px-6 text-white"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 1 }}
  >
    <div className="max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-5xl font-extrabold mb-8 text-center">Contact Us</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-bold mb-4">Get in Touch</h3>
          <p className="mb-4">
            Have questions? We’d love to hear from you. Fill out the form or contact us directly.
          </p>
          <p className="font-bold">Email: techvaseegrah@gmail.com</p>
          <p className="font-bold">Phone: +91 85240 89733</p>
        </div>
        <form className="bg-gray-700 p-6 rounded-lg shadow-lg">
          <div className="mb-4">
            <label htmlFor="name" className="block text-sm font-bold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={4}
              placeholder="Your Message"
              className="w-full px-4 py-2 rounded-lg text-gray-900"
            ></textarea>
          </div>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="w-full px-6 py-3 bg-yellow-500 text-gray-900 font-bold rounded-lg shadow-lg"
          >
            Submit
          </motion.button>
        </form>
      </div>
    </div>
  </motion.section>
);


const MotionButton: React.FC<{ className: string; text: string }> = ({ className, text }) => (
  <motion.button
    whileHover={{
      scale: 1.1,
      boxShadow: "0px 0px 8px rgba(255, 255, 255, 0.8)",
    }}
    className={`px-6 py-3 rounded-lg text-white font-bold shadow-lg ${className}`}
  >
    {text}
  </motion.button>
);

const Footer: React.FC = () => (
  <footer className="bg-gray-800 text-white py-8 text-center">
    <p>Developed by Krishna K</p>
    <p>&copy; {new Date().getFullYear()} Techvaseegrah. All Rights Reserved.</p>
  </footer>
);

export default App;
