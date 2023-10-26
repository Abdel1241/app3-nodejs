// pages/index.tsx
import TopMenu from '../components/TopMenu';
import PhotoGallery from '../components/PhotoGallery';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <TopMenu />
      <PhotoGallery />
      <Footer />
    </div>
  );
}
