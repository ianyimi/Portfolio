import Head from 'next/head'

const titleDefault = "Isaiah Anyimi 2022 Portfolio"
const url = 'https://ianyimi.com'
const description =
  'Recent Graduate & Front End Developer'
const author = 'Isaiah Anyimi'

const Header = ({title = titleDefault}) => {
  return (
    <>
      <Head>
        {/* Recommended Meta Tags */}
        <meta charSet='utf-8'/>
        <meta name='language' content='english'/>
        <meta httpEquiv='content-type' content='text/html'/>
        <meta name='author' content={author}/>
        <meta name='designer' content={author}/>
        <meta name='publisher' content={author}/>
        
        {/* Search Engine Optimization Meta Tags */}
        <title>{title}</title>
        <meta name='description' content={description}/>
        <meta
          name='keywords'
          content='Software Engineer,Product Manager,Label Manager,Data Scientist,Computer Scientist'
        />
        <meta name='robots' content='index,follow'/>
        <meta name='distribution' content='web'/>
        {/* 
      Facebook Open Graph meta tags
        documentation: https://developers.facebook.com/docs/sharing/opengraph */}
        <meta name='og:title' content={title}/>
        <meta name='og:type' content='site'/>
        <meta name='og:url' content={url}/>
        {/*<meta name='og:image' content={'/icons/share.png'}/>*/}
        <meta name='og:site_name' content={title}/>
        <meta name='og:description' content={description}/>
        
        
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/icons/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/icons/favicon-16x16.png"/>
        <link rel="manifest" href="/site.webmanifest"/>
        <link rel="mask-icon" href="/icons/safari-pinned-tab.svg" color="#5bbad5"/>
        <link rel="shortcut icon" href="/icons/favicon.ico"/>
        <meta name="msapplication-TileColor" content="#da532c"/>
        <meta name="msapplication-config" content="/browserconfig.xml"/>
        
        {/* Meta Tags for HTML pages on Mobile */}
        {/* <meta name="format-detection" content="telephone=yes"/>
        <meta name="HandheldFriendly" content="true"/>  */}
        <meta
          name='viewport'
          content='width=device-width, minimum-scale=1, initial-scale=1.0'
        />
        <meta name='theme-color' content='#000'/>
        
        {/* 
      Twitter Summary card
        documentation: https://dev.twitter.com/cards/getting-started
        Be sure validate your Twitter card markup on the documentation site. */}
        <meta name='twitter:card' content='summary'/>
        <meta name='twitter:site' content='@yonkozay_'/>
      </Head>
    </>
  )
}

export default Header
