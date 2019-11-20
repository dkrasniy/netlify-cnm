import React from "react";
import PropTypes from "prop-types";
import { kebabCase } from "lodash";
import Helmet from "react-helmet";
import { Link, graphql } from "gatsby";
import Layout from "../components/Layout";
import Content, { HTMLContent } from "../components/Content";
import Img from "gatsby-image";
import { trackCustomEvent } from "gatsby-plugin-google-analytics";

import {
  FacebookShareButton,
  TwitterShareButton,
  EmailShareButton,
  LinkedinShareButton
} from "react-share";
import { Facebook, Twitter, Mail, Linkedin } from "react-feather";

export const BlogPostTemplate = ({
  content,
  contentComponent,
  description,
  tags,
  date,
  title,
  slug,
  helmet,
  featuredpost,
  image
}) => {
  const PostContent = contentComponent || Content;
  const siteurl = "https://cnmnews.org";
  const FacebookIconBS = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="facebook-f"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
      className="w-4 h-4"
    >
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
        class=""
      ></path>
    </svg>
  );
  const TwitterIconBS = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="twitter"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-4 h-4"
    >
      <path
        fill="currentColor"
        d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
        class=""
      ></path>
    </svg>
  );
  const EmailIconsBS = (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fas"
      data-icon="envelope"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className="w-4 h-4 fill-current"
    >
      <path
        fill="currentColor"
        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z"
        class=""
      ></path>
    </svg>
  );
  return (
    <article itemScope itemType="http://schema.org/Article">
      <div className="bg-white p-6 py-8 md:p-12 pb-32 md:pb-40">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto">
            <h1
              itemProp="name headline"
              className="leading-tight text-gray-900 text-2xl md:text-4xl font-semibold"
            >
              {title}
            </h1>
            <div className="py-2  flex items-center justify-between ">
              <div>
                <time
                  itemProp="datePublished"
                  className="text-gray-800 italic text-sm"
                >
                  <span className="text-gray-500">Published on</span>{" "}
                  <span>{date}</span>
                </time>
              </div>
              <div className="flex">
                {" "}
                <FacebookShareButton
                  className="rounded-full bg-gray-200 p-2 mr-2"
                  url={siteurl + slug}
                  quote={title}
                >
                  {FacebookIconBS}
                </FacebookShareButton>
                <TwitterShareButton
                  className="rounded-full bg-gray-200 p-2 mr-2"
                  url={siteurl + slug}
                  title={title}
                >
                  {TwitterIconBS}
                </TwitterShareButton>
                <EmailShareButton
                  className="rounded-full bg-gray-200 p-2"
                  subject={title}
                  url={siteurl + slug}
                  openWindow={true}
                  body={"Check out this article: "}
                >
                  {EmailIconsBS}
                </EmailShareButton>
              </div>
            </div>
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
    </article>
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
  console.log(
    "BLOGPOST",
    post.frontmatter.featuredimage.childImageSharp.fixed.src
  );
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
                property: "og:title",
                content: post.frontmatter.title
              },
              {
                property: "twitter:title",
                content: post.frontmatter.title
              },
              {
                property: "twitter:description",
                content: post.frontmatter.description
              },

              {
                name: "description",
                content: post.frontmatter.title
              },
              {
                property: "og:image",
                content:
                  "https://cnmnews.org" +
                  post.frontmatter.featuredimage.childImageSharp.fixed.src
              },
              {
                property: "twitter:image",
                content:
                  "https://cnmnews.org" +
                  post.frontmatter.featuredimage.childImageSharp.fixed.src
              },

              {
                property: "og:image:url",
                content:
                  "https://cnmnews.org" +
                  post.frontmatter.featuredimage.childImageSharp.fixed.src
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                name: "twitter:card",
                content: "summary_large_image"
              },
              {
                name: "twitter:creator",
                content: "dkrasniy"
              }
            ]}
          />
        }
        date={post.frontmatter.date}
        slug={post.fields.slug}
        tags={post.frontmatter.tags}
        title={post.frontmatter.title}
        description={post.frontmatter.description}
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
      fields {
        slug
      }
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        tags
        description
        featuredpost
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1000, quality: 100) {
              ...GatsbyImageSharpFluid
            }
            fixed(width: 800, height: 420, quality: 80) {
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
