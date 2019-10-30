import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from 'gatsby'
import PreviewCompatibleImage from '../components/PreviewCompatibleImage'
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const IndexPage = ({data}) => {

    const { edges: posts } = data.allMarkdownRemark

   
  return (
    <Layout>
      <div className="container">
        <h3 className="font-semibold">Latest stories</h3>
        <div className="flex flex-wrap">
        {posts &&
          posts.map(({ node: post }, key) => (<>
          
          <div className={`block post-flex-`+ key} key={post.id}>
              <div className="shadow mb-4 px-2">
            <Link className="font-semibold" to={post.fields.slug}>
                <div className="img">
                <PreviewCompatibleImage
                        imageInfo={{
                          image: post.frontmatter.featuredimage,
                          alt: `featured image thumbnail for post ${post.title}`,
                        }}
                      />
                </div>
                      {post.frontmatter.title}
                      <span className="text-sm text-gray-500 block font-regular">
                      {post.frontmatter.date}
                    </span>
                    </Link>
                    {post.excerpt}
                    </div>
            </div>
            </>))
        }
        </div>
      
        {/* <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div> */}
      </div>
    </Layout>
  );
};


export default () => (
    <StaticQuery
      query={graphql`
        query HomeBlog {
          allMarkdownRemark(
            sort: { order: DESC, fields: [frontmatter___date] }
            filter: { frontmatter: { templateKey: { eq: "blog-post" } } }
          ) {
            edges {
              node {
                excerpt(pruneLength: 400)
                id
                fields {
                  slug
                }
                frontmatter {
                  title
                  templateKey
                  date(formatString: "MMMM DD, YYYY")
                  featuredpost
                  featuredimage {
                    childImageSharp {
                      fluid(maxWidth: 120, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            }
          }
        }
      `}
      render={(data, count) => <IndexPage data={data} count={count} />}
    />
  )

  

