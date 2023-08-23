import './App.css';
import { Download, Features, SectionWrapper } from './components';
import assets from './assets';
import styles from './styles/Global';
function App() {
  return (
    <>
      <SectionWrapper
      title="Your own store of Nifty NFTs. Start Selling & Growing"
      description="Buy, store, collect NFTs, exchange & earn crypto. Join 25+ million people using ProNef Marketplace.."
      showBtn
      mockupImage={assets.homeHero}
      banner="banner"
      />
      <SectionWrapper
      title="Smart User Interface Marketplace"
      description="Your chance to own one-of-a-kind digital treasures! ProNef offers a diverse collection of exclusive NFTs, each with its own story and rarity level. Start building your unique digital portfolio today.."
      mockupImage={assets.homeCards}
      reverse
      /> 
      <Features/>

      <SectionWrapper
      title="Deployment"
      description="ProNef is built using Expo which runs natively on all users devices. You can easily get your app into people's hands.."
      mockupImage={assets.feature}
      reverse
      />
      <SectionWrapper
      title="Showcasing the store"
      description="The app contains two screens. The first screen lists all NFTs while the second shows the details of a specific NFT.."
      mockupImage={assets.mockup}
      banner="banner02"
      /> 
      <Download/>

      <div className='px-4 py-2 justify-center items-center bg-purple-400 flex-col text-center banner04'>
        <p className={`${styles.pText} ${styles.whiteText}`}>Made with ♥ by {" "}
        <span className='bold'>MoreWare</span>
        </p>
      </div>
    </>
  );
}

export default App;
