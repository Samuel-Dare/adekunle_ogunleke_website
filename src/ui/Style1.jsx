import Animation from '../utils/Animation';
import Button from '../utils/Button';
import StyleTitle from './StyleTitle';

function Style1({
  reverseOrder = false,
  removeBgColor = false,
  title,
  image,
  btn,
  btnRouteTo,
  paragraph1,
  paragraph2,
  paragraph3,
  paragraph4,
}) {
  return (
    <main
      className={`${
        removeBgColor ? '' : 'bg-colorGrey600 shadow-lg '
      } container mx-auto mb-14 px-3 md:px-0`}
    >
      <Animation type="1">
        <StyleTitle title={title} />
        <div className=" md:grid md:grid-cols-2 md:items-center md:justify-center md:gap-5">
          <Animation type={reverseOrder ? '3' : '2'}>
            <div
              className={`${removeBgColor ? '' : 'p-2 md:p-5'} ${
                reverseOrder ? 'md:order-2' : 'md:order-1'
              }text-left`}
            >
              {paragraph1 && <p className="mb-3">{paragraph1}</p>}
              {paragraph2 && <p className="mb-3">{paragraph2}</p>}
              {paragraph3 && <p className="mb-3">{paragraph3}</p>}

              {btn && (
                <Button type="pointer" to={btnRouteTo}>
                  {btn}
                </Button>
              )}
            </div>
          </Animation>

          <div
            className={`${reverseOrder ? 'md:order-1' : 'md:order-2'} overflow-hidden rounded-full shadow-lg`}
          >
            <Animation type={reverseOrder ? '2' : '3'}>
              <img
                src={image}
                alt="Image"
                className={`h-full w-full md:mx-auto`}
              />
            </Animation>
          </div>
        </div>
        {paragraph4 && <p className="mt-4">{paragraph4}</p>}
      </Animation>
    </main>
  );
}

export default Style1;
