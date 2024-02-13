import Button from './Button';
import { useOverlay } from '../contexts/OverlayContext';

function OverlayContent({ children, values, source }) {
  const { isOverlayVisible, handleCloseOverlay } = useOverlay();

  return (
    <>
      {isOverlayVisible && (
        <div className="fixed left-0 top-0 z-10 flex h-full w-full justify-center overflow-y-auto p-5">
          <div className="relative z-20 h-fit w-full bg-colorGrey300 p-10 md:w-[400px]">
            <div className="border-colorBrand bg-colorBrand hover:border-colorBrand hover:bg-colorBrand absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border-2">
              <Button type="pointer" onClick={handleCloseOverlay}>
                ✖
              </Button>
            </div>
            <div className="text-lg">{children}</div>
          </div>
          <div className="fixed left-0 top-0 h-full w-full bg-colorGrey100 opacity-80"></div>
        </div>
      )}
    </>
  );
}

export default OverlayContent;
