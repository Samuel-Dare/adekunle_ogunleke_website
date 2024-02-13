import { useScreenSize } from '../contexts/ScreenSize';
import Animation from '../utils/Animation';

export function HeaderOverlayContent() {
  return (
    <Animation type="1">
      <div className=" flex flex-col items-center justify-center space-y-5 bg-colorGrey800 px-5 py-10 opacity-85 shadow-lg md:w-[400px]  md:p-5">
        <p className="text-center text-xl font-bold text-colorBrand2">
          "<span className="text-colorBrand">Art </span>
          enables us to find ourselves and lose ourselves at the same time" -
          Thomas Merton
        </p>
      </div>
    </Animation>
  );
}

function Header() {
  const { isSmallScreen } = useScreenSize();

  return (
    <main
      className={`relative h-auto md:h-screen ${isSmallScreen ? 'h-auto' : 'mb-0'}`}
    >
      <div
        className="h-full w-full justify-center md:flex md:items-end 
      "
      >
        <div className="relative h-full w-full">
          <video
            autoPlay
            muted
            loop
            className="h-full w-full object-cover object-center grayscale filter md:absolute md:inset-0"
          >
            <source src="assets/video1.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 hidden items-center justify-center md:flex">
            <div>
              <HeaderOverlayContent />
            </div>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <HeaderOverlayContent />
      </div>
    </main>
  );
}

export default Header;
