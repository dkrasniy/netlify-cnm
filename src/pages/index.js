import React from "react";
import PropTypes from "prop-types";
import { Link, graphql, StaticQuery } from "gatsby";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import Layout from "../components/Layout";
import Features from "../components/Features";
import BlogRoll from "../components/BlogRoll";

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark;
  

  return (
    <Layout>
    
        <div className="bg-gray-200">
        <div className="flex flex-wrap container mx-auto">
          {posts.slice(0, 1).map(({ node: post }, key) => (
            <><Link className="flex flex-wrap w-full" to={post.fields.slug}>
             
                <div className="img w-full md:w-1/2">
                  <PreviewCompatibleImage
                    imageInfo={{
                      image: post.frontmatter.featuredimage,
                      alt: `featured image thumbnail for post ${post.title}`
                    }}
                  />
                </div>
                <div className="w-full md:w-1/2 flex justify-center flex-col p-8 px-8">
                <span className="text-gray-700 block font-regular">
                    {post.frontmatter.date}
                  </span>
                  <h2 className="text-xl md:text-3xl  font-bold text-gray-900 py-2 hover:text-black">{post.frontmatter.title}</h2>
                 
                  <span className="block text-gray-800 ">{post.excerpt.substring(0, 96) + '...'}</span>

{/*                   
                    <span className="inline-block mt-2 bg-white">Read More</span>
                  */}
                </div>
               
            
              </Link>
            </>
          ))}
          </div></div>
          
          <span className="text-center text-gray-700 text-xl md:text-2xl py-6 pb-2 md:pb-6 font-semibold block">Latest Stories</span>
          <div className="flex flex-wrap container mx-auto">
            
          {posts &&
            posts.slice(1).map(({ node: post }, key) => (
              <>
                <div className={`block w-full md:w-1/2 lg:w-1/4`} key={post.id}>
                    <div className="my-2 md:px-2">
                  <div className="shadow bg-white">
                    <Link className="flex flex-wrap" to={post.fields.slug}>
                      <div className="img w-1/3 md:w-full">
                        <PreviewCompatibleImage
                          imageInfo={{
                            image: post.frontmatter.featuredimage,
                            alt: `featured image thumbnail for post ${post.title}`
                          }}
                        />
                      </div>
                      <div className="w-2/3 md:w-full p-6">
                      <span className="text-gray-900 block font-semibold">{post.frontmatter.title}</span>
                      <span className="text-sm text-gray-500 block">
                        {post.frontmatter.date}
                      </span>
                     
                      </div>
                    </Link>
                   
                  </div>
                </div>
                </div>
              </>
            ))}
        </div>

        {/* <div className="column is-12 has-text-centered">
          <Link className="btn" to="/blog">
            Read more
          </Link>
        </div> */}
      
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
                    fluid(maxWidth: 600, quality: 100) {
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
);
