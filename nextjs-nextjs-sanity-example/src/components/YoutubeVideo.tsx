import { FC } from "react";
import { YoutubeData } from "@/types/YoutubeData";

type YoutubeVideoProps = YoutubeData;

export const YoutubeVideo: FC<YoutubeVideoProps> = ({ url }) => {
  const videoId = new URL(url).searchParams.get("v") || url.split("/").pop();

  return (
    <section className={"w-full mx-auto max-w-5xl py-8"}>
      <div
        style={{
          position: "relative",
          paddingBottom: "56.25%",
          height: 0,
          overflow: "hidden",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
          }}
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
