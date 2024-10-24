import MyNavbar from '../components/MyNavbar';
import RightSection from '../components/RightSection';
import LeftSection from '../components/LeftSection';
import BottomNavBar from '../components/BottomNavBar';

const Home = () => {
  return (
    <>
      <MyNavbar />
      <div className="content">
        <LeftSection />
        <RightSection />
      </div>
      <BottomNavBar />
    </>
  );
};

export default Home;
