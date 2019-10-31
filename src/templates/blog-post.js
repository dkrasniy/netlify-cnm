import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { graphql, Link } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  helmet,
  featuredpost,
  image
}) => {
  const PostContent = contentComponent || Content;

  return (
    <section>
      <div className="bg-red-500 p-6 py-12 md:p-12 pb-40 md:pb-40">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <span className="text-white">{date}</span>
            <h1 className="text-white text-xl md:text-4xl font-semibold">
              {title}
            </h1>
          </div>
        </div>
      </div>
      {helmet || ""}
      <div className="p-6 block container mx-auto">
        <div className="max-w-3xl mx-auto shadow-lg -mt-32">
          {image ? (
            <Img
              fluid={
                image && image.childImageSharp && image.childImageSharp.fluid
              }
            />
          ) : null}
        </div>
      </div>
      <div className="max-w-3xl leading-relaxed mx-auto py-4 p-6 md:px-0">
        <PostContent content={content} />
        {tags && tags.length ? (
          <div style={{ marginTop: `4rem` }}>
            <h4>Tags</h4>
            <ul className="taglist">
              {tags.map(tag => (
                <li key={tag + `tag`}>
                  <Link to={`/tags/${kebabCase(tag)}/`}>{tag}</Link>
                </li>
              ))}
            </ul>
          </div>
        ) : null}
      </div>
    </section>
  );
};

BlogPostTemplate.propTypes = {
  content: PropTypes.node.isRequired,
  contentComponent: PropTypes.func,
  description: PropTypes.string,
  title: PropTypes.string,
  helmet: PropTypes.object
};

const BlogPost = ({ data }) => {
  const { markdownRemark: post } = data;

  console.log("post", post.frontmatter);
  return (
    <Layout>
      <BlogPostTemplate
        content={post.html}
        contentComponent={HTMLContent}
        description={post.frontmatter.title}
        helmet={
          <Helmet 
          title={post.frontmatter.title}
            titleTemplate={`%s`}
            meta={[
              {
                name: 'description',
                content: post.frontmatter.title,
              },
              {
              
                property: 'og:image',
                content: post.frontmatter.featuredimage.childImageSharp.fixed.src,
              },
              {
                property: 'og:image:url',
                content:  post.frontmatter.featuredimage.childImageSharp.fixed.src,
              }]}
          />
        }
        date={post.frontmatter.date}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        featuredpost={post.frontmatter.featuredpost}
        image={post.frontmatter.featuredimage}
      />
    </Layout>
  );
};

BlogPost.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.object
  })
};

export default BlogPost;

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 1200, height: 630) {
              width
              height
              src
              srcSet
              srcWebp
            }
          }
        }
      }
    }
  }
`;
