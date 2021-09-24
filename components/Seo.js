import Head from "next/head";

const APP_URL = process.env.NEXT_PUBLIC_VERCEL_URL;
const defaultDescription =
  "Digital library and commuity portal for chemical engineers. Online chemical engineering learning resources and collaboration platform.";
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
      <title>{title ? title + " - Chemcasts" : "Chemcasts"}</title>
      <meta
        name="description"
        content={description ? description : defaultDescription}
      />
      <meta name="robots" content="index, follow" />
      <meta name="twitter:site" content="@CHEMCASTS_" />
      <meta name="twitter:creator" content="@DKKadavla" />
      <meta name="twitter:title" content={twTitle ? twTitle : "CHEMCASTS"} />
      <meta
        name="twitter:description"
        content={twDescription ? twDescription : defaultDescription}
      />
      <meta
        name="twitter:image"
        content={twImage ? twImage : APP_URL + "/logo/logo-brand.png"}
      />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={ogTitle ? ogTitle : "CHEMCASTS"} />
      <meta
        property="og:description"
        content={ogDescription ? ogDescription : defaultDescription}
      />
      <meta
        property="og:image"
        content={ogImage ? ogImage : APP_URL + "/logo/logo-brand.png"}
      />
      {ogUrl ? (
        <>
          <meta property="og:url" content={ogUrl} />
        </>
      ) : (
        <></>
      )}
      <meta property="og:site_name" content="CHEMCASTS" />
      {canonical ? (
        <>
          <link rel="canonical" href={canonical} />
        </>
      ) : ogUrl ? (
        <>
          <link rel="canonical" href={ogUrl} />
        </>
      ) : (
        <></>
      )}
    </Head>
  );
};

export default Seo;
