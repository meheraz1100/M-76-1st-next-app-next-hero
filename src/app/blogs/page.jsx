import Link from 'next/link';
import React from 'react';

const BolgsPage = () => {
    return (
        <div className='p-24 gap-4 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1'>
            {
                blogs.map(blog => (
                <div key={blog.slug} className='border-2 p-12'>
                    <h3>{blog.title}</h3>
                    <h3>{blog.description}</h3>
                    <button className='bg-zinc-500 p-4 rounded-md my-4'>
                        <Link href={`/blogs/${blog.slug}`}>View Details</Link>
                    </button>
                </div>
            ))}
        </div>
    );
};

const blogs = [
    {
        "slug": "introduction-to-machine-learning",
        "title": "Introduction to Machine Learning",
        "description": "A beginner's guide to understanding the basics of machine learning, its applications, and key concepts."
    },
    {
        "slug": "top-10-javascript-frameworks",
        "title": "Top 10 JavaScript Frameworks",
        "description": "An overview of the most popular JavaScript frameworks and libraries for front-end development in 2024."
    },
    {
        "slug": "healthy-eating-habits",
        "title": "Healthy Eating Habits",
        "description": "Tips and tricks for developing and maintaining healthy eating habits for a balanced lifestyle."
    },
    {
        "slug": "ultimate-travel-guide-europe",
        "title": "The Ultimate Travel Guide to Europe",
        "description": "Explore the best destinations, travel tips, and hidden gems for an unforgettable European adventure."
    },
    {
        "slug": "financial-planning-for-millennials",
        "title": "Financial Planning for Millennials",
        "description": "A comprehensive guide to managing finances, investing, and planning for the future for millennials."
    },
    {
        "slug": "the-future-of-ai",
        "title": "The Future of AI: Trends and Predictions",
        "description": "An in-depth analysis of the future trends and potential impact of artificial intelligence across various industries."
    },
    {
        "slug": "work-life-balance-strategies",
        "title": "Effective Work-Life Balance Strategies",
        "description": "Discover practical strategies to achieve and maintain a healthy work-life balance in today's fast-paced world."
    },
    {
        "slug": "mastering-digital-marketing",
        "title": "Mastering Digital Marketing",
        "description": "Learn the essential skills and strategies for successful digital marketing in the modern business landscape."
    },
    {
        "slug": "diy-home-improvement-projects",
        "title": "Top 10 DIY Home Improvement Projects",
        "description": "A list of easy and cost-effective DIY projects to enhance and beautify your home."
    },
    {
        "slug": "mental-health-awareness",
        "title": "Mental Health Awareness: Breaking the Stigma",
        "description": "An informative piece on the importance of mental health awareness and ways to support those struggling with mental health issues."
    }
]


export default BolgsPage;