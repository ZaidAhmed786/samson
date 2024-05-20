import { NafiabProvider } from '@/context/NafiabContext';
import '../public/assets/css/bootstrap.min.css';
import '../public/assets/css/flaticon.css';
import '../public/assets/css/fontAwesome5Pro.css';
import '../public/assets/css/main.css';
import '../public/assets/scss/main.scss';
import 'swiper/scss';
import SearchModal from '@/component/modal/SearchModal';
import VideoModal from '@/component/modal/VideoModal';
import Sidebar from '@/component/sidebar/Sidebar';
import BackToTopIcon from '@/component/backToTop/BackToTopIcon';
import CartModal from '@/component/modal/CartModal';

export default function App({ Component, pageProps }) {
  return (
    <NafiabProvider>
      <Component {...pageProps} />
      <SearchModal/>
      <CartModal/>
      <VideoModal/>
      <Sidebar/>
      <BackToTopIcon/>
    </NafiabProvider>
  )
}
