import Link from 'next/link'
import blogStyles from '../styles/Blog.module.css'

const Blog = () => (
  <section className={blogStyles.blogSection}>
    <div className={blogStyles.title}>
      <div className={blogStyles.titlePrepend}></div>
      <h2>Our Blog</h2>
    </div>
    <div className={blogStyles.blogCard}>
      <div className={blogStyles.imgWrapper}>
        <img src="/blog-one.png" alt="A thick tree in a savannah" />
      </div>
      <article>
        <small>January 2021</small>
        <h3>2020 at a glance: yearly review</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ultrices egestas adipiscing.</p>
        <div className={blogStyles.link}>
          <div>
            <Link href="/">
              <a>Read More</a>
            </Link>
          </div>
          <img src="/arrow-right.svg" alt="Arrow Right" />
        </div>
      </article>
    </div>
  </section>
);

export default Blog;