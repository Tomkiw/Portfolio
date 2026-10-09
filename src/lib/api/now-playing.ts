import { NOW_PLAYING_DEMO_TRACKS } from "@/lib/content/activity";
import type { NowPlayingFeed } from "@/types/activity";

/**
 * Tracks for the Now Playing widget. A demo playlist for now, labelled "demo" in the widget.
 * A real version would read Spotify's "currently playing" through a server route
 * with a token from .env (never a NEXT_PUBLIC_ variable).
 */
export function getNowPlaying(): NowPlayingFeed {
  return { isDemo: true, tracks: NOW_PLAYING_DEMO_TRACKS };
}
