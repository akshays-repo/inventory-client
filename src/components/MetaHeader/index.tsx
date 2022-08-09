
import Head from 'next/head'
import { FC } from 'react';



type TmetaHeader = {
  title?:string,
  description?:string

}

const MetaHeader:FC<TmetaHeader> = ({title, description}) => {
  return (
    <Head>
      {/* <!-- Primary Meta Tags --> */}
      <title>{title}</title>
      <meta
        name="title"
        content={title}
      />
      <meta
        name="description"
        content={description}
      />
      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.brainwired.in" />
      <meta
        property="og:title"
        content="Brainwired Inventory"
      />
      <meta
        property="og:description"
        content=""

      />
      <meta property="og:image" content="" />
      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://www.brainwired.in" />
      <meta
        property="twitter:title"
        content="Brainwired Inventory"
      />
      <meta
        property="twitter:description"
        content="
"
      />
      <meta property="twitter:image" content="" />{" "}
    </Head>
  );
};
MetaHeader.defaultProps ={
  title:"Inventory",
  description:"Brainwired Inventory"
}

export default MetaHeader;
