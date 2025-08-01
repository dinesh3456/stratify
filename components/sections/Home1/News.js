import React from 'react';
import Link from 'next/link';

// Reusable BlogItem component
const BlogItem = ({ image, category, date, title, link, delay }) => (
    <div className={`col-lg-4 col-md-6 wow fadeInLeft`} data-wow-delay={`${delay}ms`} data-wow-duration="1500ms">
        <div className="blog__item">
            <div className="blog__image">
                <img src={image} alt="blog" />
                <img src={image} alt="blog" />
            </div>
            <div className="blog__content">
                <ul>
                    <li>{category}</li>
                    <li className="date">{date}</li>
                </ul>
                <h4>
                    <Link href={link}>{title}</Link>
                </h4>
            </div>
        </div>
    </div>
);

function News() {
    const blogPosts = [
        {
            image: "/assets/images/blog/blog-image1.jpg",
            category: "Branding",
            date: "May 15, 2024",
            title: "Creating innovative strategies for exceptional future outcomes.",
            link: "/news-details",
            delay: 0,
        },
        {
            image: "/assets/images/blog/blog-image2.jpg",
            category: "Design Trends",
            date: "May 25, 2024",
            title: "Stratify Agency transforms the way we work through the power of AI-driven innovation.",
            link: "/news-details",
            delay: 200,
        },
        {
            image: "/assets/images/blog/blog-image3.jpg",
            category: "Marketing",
            date: "May 30, 2024",
            title: "Common UX pinpoints in Dashboard-related projects.",
            link: "/news-details",
            delay: 400,
        }
    ];

    return (

      <>
      
      <section id="blog-menu" className="blog-area pt-130 pb-130">
          <div className="container">
              <div className="section-header text-center mb-50">
                  <h2 className="wow splt-txt" data-splitting>
                      Check Latest Blog Post <br /> from Blog List
                  </h2>
              </div>
              <div className="row g-5">
                  {blogPosts.map((post, index) => (
                    <BlogItem
                        key={index}
                        image={post.image}
                        category={post.category}
                        date={post.date}
                        title={post.title}
                        link={post.link}
                        delay={post.delay}
                    />
                  ))}
              </div>
          </div>
      </section>

      </>
    );
}
export default News;