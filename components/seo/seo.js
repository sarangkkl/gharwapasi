import React from 'react';
import Head from 'next/head'


const Seo = ({title,description,keywords}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        {/* <meta property="og:title" content={`${blog?.title} | The Local Feet`} /> */}
        {/* <meta property="og:description" content={blog?.subtitle} />
        <meta
          property="og:url"
          content={`${process.env.NEXT_PUBLIC_WEBSITE_LINK}/travel-tips/${blog?.slug}`}
        />
        <meta property="og:image" content={urlFor(blog?.mainImage).url()} />
        <meta property="og:image:alt" content={blog?.title} /> */}
      </Head>
        
    </>
  )
}

export default Seo