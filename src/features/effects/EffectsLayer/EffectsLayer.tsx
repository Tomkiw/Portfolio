"use client";

import { useState } from "react";
import { CustomCursor } from "@/features/effects/CustomCursor";
import { NowPlaying } from "@/features/effects/NowPlaying";
import { Preloader } from "@/features/effects/Preloader";
import { SoundToggle } from "@/features/effects/SoundToggle";
import { VimMode } from "@/features/effects/VimMode";
import { useTickSound } from "@/hooks/useTickSound";

/**
 * All the playful extras in one client island, so the page itself stays a server component.
 * As in the design, everything except the preloader appears only after it finishes.
 */
export function EffectsLayer() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [isSoundOn, setIsSoundOn] = useState(false);
  useTickSound(isSoundOn);

  return (
    <>
      <Preloader onDone={() => setIsIntroDone(true)} />
      {isIntroDone ? (
        <>
          <CustomCursor />
          <VimMode />
          <NowPlaying />
          <SoundToggle isOn={isSoundOn} onToggle={() => setIsSoundOn((wasOn) => !wasOn)} />
        </>
      ) : null}
    </>
  );
}
