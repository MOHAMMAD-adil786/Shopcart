import Hero from '@/components/Hero';
import CuratedRealms from '@/components/CuratedRealms';
import TheSelection from '@/components/TheSelection';
import ChosenForYou from '@/components/ChosenForYou';
import Newsletter from '@/components/Newsletter';

export default function Home() {
  return (
    <main className="bg-white min-h-screen">
      <Hero />
      <CuratedRealms />
      <TheSelection />
      <ChosenForYou />
      <Newsletter />
    </main>
  );
}
