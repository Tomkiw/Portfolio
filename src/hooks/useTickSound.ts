import { useEffect } from "react";
import { EFFECT_TARGETS, TICK_SOUND } from "@/lib/constants";

/**
 * Plays a short synthesized tick when the pointer enters a link, a button or a card.
 * Ticks once per element: moving between an element's own children stays silent
 * (the design ticked again on every child, e.g. a button's icon).
 */
export function useTickSound(isEnabled: boolean) {
  useEffect(() => {
    if (!isEnabled) return;

    // Created only after the visitor turned sound on — browsers block audio without a gesture.
    const context = new AudioContext();
    let currentTarget: Element | null = null;

    const playTick = () => {
      if (context.state === "suspended") void context.resume();

      const oscillator = context.createOscillator();
      const gain = context.createGain();
      const now = context.currentTime;

      oscillator.type = "sine";
      oscillator.frequency.value =
        TICK_SOUND.baseFrequencyHz + Math.random() * TICK_SOUND.frequencySpreadHz;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(TICK_SOUND.peakGain, now + TICK_SOUND.attackS);
      gain.gain.exponentialRampToValueAtTime(TICK_SOUND.floorGain, now + TICK_SOUND.decayS);

      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start(now);
      oscillator.stop(now + TICK_SOUND.stopS);
    };

    const handleMouseOver = (event: MouseEvent) => {
      const target =
        event.target instanceof Element ? event.target.closest(EFFECT_TARGETS.tick) : null;
      if (target && target !== currentTarget) playTick();
      currentTarget = target;
    };

    window.addEventListener("mouseover", handleMouseOver);
    return () => {
      window.removeEventListener("mouseover", handleMouseOver);
      void context.close();
    };
  }, [isEnabled]);
}
