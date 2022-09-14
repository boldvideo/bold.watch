import MuxPlayer from "@mux/mux-player-react";

export default function Watch({data}) {
  console.log(data)
  return (
    <div className="aspect-video">
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


