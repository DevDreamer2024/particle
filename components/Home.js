import styles from '../styles/Home.module.css';
import ParticlesComponent from './ParticlesBackground';

function Home() {
  return (
    <div className={styles.container}>
      <ParticlesComponent />
      <div className={styles.navbar}>
      <main className={styles.main}>
          <h1 className={styles.title}>Welcome to Next.js!</h1>
      </main>
      </div>
    </div>
  );
}

export default Home;
