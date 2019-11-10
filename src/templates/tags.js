import React from 'react'
import Helmet from 'react-helmet'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
import Img from "gatsby-image";

class TagRoute extends React.Component {
  render() {
    const posts = this.props.data.allMarkdownRemark.edges
    const postLinks = posts.map(post => (
          <li className={`block w-full md:w-1/2`} key={post.node.id}>
        <div className="my-2 md:px-2">
          <div className="shadow bg-white">
            <Link className="flex flex-wrap" to={post.node.fields.slug}>
              <div className="img w-1/3">
                {post.node.frontmatter.featuredimage ? (
                  <Img
                    style={{ height: "160px" }}
                    alt={`featured image thumbnail for post ${post.node.title}`}
                    fluid={
                      post.node.frontmatter.featuredimage.childImageSharp
                        .fluid
                    }
                  />
                ) : null}
              </div>
              <div className="w-2/3 p-6 flex flex-col justify-center ">
                <span className="text-gray-900 block font-semibold">
                  {post.node.frontmatter.title}
                </span>
                <span className="text-sm text-gray-500 block">
                  {post.node.frontmatter.date}
                </span>
              </div>
            </Link>
          </div>
        </div>
      </li>
    ))
    const tag = this.props.pageContext.tag
    const title = this.props.data.site.siteMetadata.title
    const totalCount = this.props.data.allMarkdownRemark.totalCount
    const tagHeader = `${totalCount} post${
      totalCount === 1 ? '' : 's'
    } tagged with “${tag}”`

    return (
      <Layout>
        <section className="section">
          <Helmet title={`${tag} | ${title}`} />
          <div className="container mx-auto py-8 md:px-4 px-6">
            <div className="columns">
              <div
                className="column is-10 is-offset-1"
                style={{ marginBottom: '6rem' }}
              >
                <h3 className="leading-tight  text-2xl md:text-4xl font-semibold">{tagHeader}</h3>
                <ul className="taglist flex flex flex-wrap ">{postLinks}</ul>
                <p>
                  <Link to="/tags/">Browse all tags</Link>
                </p>
              </div>
            </div>
          </div>
        </section>
      </Layout>
    )
  }
}

export default TagRoute

export const tagPageQuery = graphql`
  query TagPage($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
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
`
