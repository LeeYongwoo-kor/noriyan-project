import Head from "next/head";

interface HeadMeta {
  title?: string;
  description?: string;
  url?: string;
  image?: string;
}

export default function HeadMeta({ title, description, url, image }: HeadMeta) {
  return (
    <Head>
      <title>{title || "車道のりやん食堂 | 居酒屋 | 家庭料理"}</title>
      <meta
        name="description"
        content={
          description ||
          "車道のりやん食堂で美味しいお料理とお酒をご賞味ください。"
        }
      />

      <meta property="og:title" content={title || "車道のりやん食堂"} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={url || ""} />
      <meta property="og:image" content={image || ""} />
      <meta property="og:article:author" content="NagoyaYoshi" />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="車道のりやん食堂" />
      <meta
        name="twitter:description"
        content="車道のりやん食堂で美味しいお料理とお酒をご賞味ください。"
      />
      <meta name="twitter:site" content="@website NagoyaYoshi" />
      <meta name="twitter:image" content={image || ""} />

      <link rel="canonical" href={url || ""} />
    </Head>
  );
}
