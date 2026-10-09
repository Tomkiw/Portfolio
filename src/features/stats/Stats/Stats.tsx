import { Container } from "@/components/Container";
import { CountUp } from "@/components/CountUp";
import { Section } from "@/components/Section";
import { Sparkline } from "@/components/Sparkline";
import { STATS } from "@/lib/content/stats";
import { padNumber } from "@/lib/utils/format";
import styles from "./Stats.module.scss";

export function Stats() {
  return (
    <Section hasTopPadding={false}>
      <Container>
        <ul className={styles.stats}>
          {STATS.map((stat, index) => (
            <li key={stat.id} className={styles.stat}>
              <span className={styles.index} aria-hidden="true">
                {padNumber(index + 1)} ▍
              </span>
              <p className={styles.value}>
                <CountUp end={stat.value} />
                {stat.unit ? <sup>{stat.unit}</sup> : null}
              </p>
              <p className={styles.label}>{stat.label}</p>
              <Sparkline values={stat.trend} className={styles.sparkline} />
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
}
