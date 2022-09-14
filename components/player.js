import MuxPlayer from "@mux/mux-player-react";

export default function VideoPlayer({data}) {
  return (
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

  )
}
