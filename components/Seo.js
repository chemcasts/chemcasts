import Head from "next/head";

const Seo = ({
  title,
  description,
  twTitle,
  twDescription,
  twImage,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  canonical,
}) => {
  return (
    <Head>
      <title>CHEMCASTS{title ? "::" + title : ""}</title>
      <meta
        name="description"
        content={description ? description : "Put your description here."}
      />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:site" content="@CHEMCASTS_" />
      <meta name="twitter:creator" content="@DKKadavla" />
      <meta name="twitter:title" content={twTitle ? twTitle : "CHEMCASTS"} />
      <meta
        name="twitter:description"
        content={twDescription ? twDescription : ""}
      />
      <meta name="twitter:image" content={twImage ? twImage : ""} />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle ? ogTitle : "CHEMCASTS"} />
      <meta
        property="og:description"
        content={ogDescription ? ogDescription : ""}
      />
      <meta property="og:image" content={ogImage ? ogImage : ""} />
      <meta property="og:url" content={ogUrl ? ogUrl : ""} />
      <meta property="og:site_name" content="CHEMCASTS" />
      <link rel="canonical" href={canonical ? canonical : ogUrl} />
    </Head>
  );
};

export default Seo;
