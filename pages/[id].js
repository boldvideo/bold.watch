import Image from 'next/image'
import Link from 'next/link'
import Head from 'next/head'
import MuxPlayer from "@mux/mux-player-react";
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function Watch({data}) {
  console.log(data)
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r">
      <Head>

        <meta name="twitter:card" content="summary" key="twcard" />
        <meta name="twitter:creator" content={'@veryboldvideo'} key="twhandle" />

        {/* Open Graph */}
        <meta property="og:url" content={`https://bold.watch/${data.data.id}`} key="ogurl" />
        <meta property="og:image" content={`${data.data.thumbnail}?width=1200&height=630&fit_mode=smartcrop`} key="ogimage" />
        <meta property="og:site_name" content={'bold.watch'} key="ogsitename" />
        <meta property="og:title" content={`Bold: ${data.data.title}`} key="ogtitle" />
        <meta property="og:description" content={data.data.description} key="ogdesc" />

      </Head>
      <header className="h-24">
        <Link href="https://wearebold.af" target="_blank">
          <a>
            <div className="h-12 mt-6 relative flex">
              <Image src="/BOLD-logo-primary.svg" layout="fill" objectFit="contain" alt="Bold Video" />
              <div className="flex-1">&nbsp;</div>
            </div>
          </a>
        </Link>

      </header>
      <main className="flex-1 flex flex-col items-center"> 
        <div className="aspect-video w-full max-w-[1440px] mb-12 ">
          <MuxPlayer
            className="w-full h-full"
            autoPlay
            streamType="on-demand"
            playbackId={data.data.playback_id}
            metadata={{
              video_id: `video-id-${data.data.id}`,
              video_title: data.data.title,
            }}
          />
        </div>

        <div className="flex-1 max-w-3xl w-full px-8">
          <h2 className="text-3xl font-medium mb-8">{data.data.title}</h2>
          <p className="text-xl markdown"><ReactMarkdown remarkPlugins={[remarkGfm]}>{data.data.description}</ReactMarkdown></p>


        </div>

      </main> 

      <footer className="text-center bg-gray-800 h-12 flex items-center justify-end px-8 text-gray-400">
        <span>
          <Link href="https://wearebold.af" target="_blank">
            <a className="hover:text-purple-400">
            powered by BOLD</a>
          </Link>
        </span>
      </footer>

    </div>
  )
}

export async function getServerSideProps({params}) {

  const res = await fetch(`https://app.boldvideo.io/api/videos/${params.id}`, {
    headers: {
      'Authorization': process.env.BOLD_API_KEY,
    }
  })
  const data = await res.json()

  // Pass data to the page via props
  return { props: { data } }

}


