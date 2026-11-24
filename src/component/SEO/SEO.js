import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import seoConfig from "./seoConfig";

const SEO = ({ customSEO }) => {
  const location = useLocation();

  const currentPath =
    location.pathname.replace(/\/+$/, "") || "/";

  const seo = customSEO || seoConfig[currentPath] || {
    title: "Vidshot | Video Editing & Social Media Agency",
    description:
      "Vidshot provides professional video editing, podcast production and social media management services.",
    keywords:
      "Vidshot, video editing, social media management",
  };

  const siteUrl = "https://YOUR-DOMAIN.COM";

  const canonicalURL = `${siteUrl}${currentPath}`;

  return (
    <Helmet>
      {/* Basic SEO */}
      <title>{seo.title}</title>

      <meta
        name="description"
        content={seo.description}
      />

      <meta
        name="keywords"
        content={seo.keywords}
      />

      <meta name="robots" content="index, follow" />

      <link
        rel="canonical"
        href={canonicalURL}
      />

      {/* Open Graph SEO */}
      <meta property="og:type" content="website" />

      <meta
        property="og:title"
        content={seo.title}
      />

      <meta
        property="og:description"
        content={seo.description}
      />

      <meta
        property="og:url"
        content={canonicalURL}
      />

      <meta
        property="og:site_name"
        content="Vidshot"
      />

      <meta
        property="og:image"
        content={`${siteUrl}/og-image.jpg`}
      />

      {/* Twitter SEO */}
      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content={seo.title}
      />

      <meta
        name="twitter:description"
        content={seo.description}
      />

      <meta
        name="twitter:image"
        content={`${siteUrl}/og-image.jpg`}
      />
    </Helmet>
  );
};

export default SEO;