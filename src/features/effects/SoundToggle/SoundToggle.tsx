import { SoundOffIcon, SoundOnIcon } from "@/components/icons";
import styles from "./SoundToggle.module.scss";

type SoundToggleProps = {
  isOn: boolean;
  onToggle: () => void;
};

const SOUND_ICON_SIZE = 18;

/** Floating on/off switch for the hover tick sounds. */
export function SoundToggle({ isOn, onToggle }: SoundToggleProps) {
  return (
    <button
      type="button"
      className={styles.toggle}
      aria-label="Sound effects"
      aria-pressed={isOn}
      title={isOn ? "Sound on" : "Sound off"}
      onClick={onToggle}
    >
      {isOn ? <SoundOnIcon size={SOUND_ICON_SIZE} /> : <SoundOffIcon size={SOUND_ICON_SIZE} />}
    </button>
  );
}
