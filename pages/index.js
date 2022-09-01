import Head from "next/head";
import styles from "../styles/Home.module.css";
import AirportDistanceForm from "@/ui/forms/AirportDistanceForm";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Montauk Labs Assessment</title>
        <meta name="description" content="Montauk Labs Assessment" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main + " xs:p-0 md:p-10"}>
        <h1 className={styles.title}>Montauk Labs Assessment</h1>

        <p className={styles.description}>
          This app should calculate the distance between two United States
          airports in nautical miles, using auto-complete for the airport
          fields. All United States Airports should be searchable by name or 3
          digit code. Bonus: plot the flying (not driving) route on Google maps,
          the map should display the United States, not the entire earth.
        </p>

        <AirportDistanceForm />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/drewdrewthis"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by drewdrewthis
        </a>
      </footer>
    </div>
  );
}
