import Animation from '../utils/Animation';

const Style2 = ({
  title,
  subTitle1,
  subTitle2,
  subTitle3,
  subTitle4,
  body1,
  body2,
  body3,
  body4,
  p1,
  p2,
}) => {
  return (
    <Animation type="1">
      <div className="p-10 md:p-16 lg:p-20">
        <div className="mx-auto">
          <h2 className="text-colorBrand mb-6 text-center text-3xl font-bold md:text-4xl">
            {title}
          </h2>
          {p1 && <p className="mb-10 text-center text-base">{p1}</p>}

          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            {subTitle1 && body1 && (
              <div className="flex flex-col">
                <Animation type="2">
                  <img
                    src="assets/branding-solutions.png"
                    width="300"
                    alt="Service 1"
                    className="mx-auto mb-4 h-auto rounded-md"
                  />
                </Animation>
                <Animation type="1">
                  <h3 className="mb-5 text-2xl font-semibold">
                    &#10003;{' '}
                    <span className="text-colorBrand">{subTitle1}</span>
                  </h3>
                  <p className="text-justify">{body1}</p>
                </Animation>
              </div>
            )}
            {subTitle2 && body2 && (
              <div className="flex flex-col">
                <Animation type="3">
                  <img
                    src="assets/marketing-solutions.png"
                    width="300"
                    alt="Service 1"
                    className="mx-auto mb-4 h-auto rounded-md"
                  />
                </Animation>
                <Animation type="1">
                  <h3 className="mb-5 text-2xl font-semibold">
                    &#10003;{' '}
                    <span className="text-colorBrand">{subTitle2}</span>
                  </h3>
                  <p className="text-justify">{body2}</p>
                </Animation>
              </div>
            )}
            {subTitle3 && body3 && (
              <div className="flex flex-col">
                <Animation type="2">
                  <img
                    src="assets/img.jpg"
                    width="300"
                    alt="Service 1"
                    className="mx-auto mb-4 h-auto rounded-md"
                  />
                </Animation>
                <Animation type="1">
                  <h3 className="mb-5 text-2xl font-semibold">
                    &#10003;{' '}
                    <span className="text-colorBrand">{subTitle3}</span>
                  </h3>
                  <p className="text-justify">{body3}</p>
                </Animation>
              </div>
            )}

            {subTitle4 && body4 && (
              <div className="flex flex-col">
                <Animation type="3">
                  <img
                    src="assets/img.jpg"
                    width="300"
                    alt="Service 1"
                    className="mx-auto mb-4 h-auto rounded-md"
                  />
                </Animation>
                <Animation type="1">
                  <h3 className="mb-5 text-2xl font-semibold">
                    &#10003;{' '}
                    <span className="text-colorBrand">{subTitle4}</span>
                  </h3>
                  <p className="text-justify">{body4}</p>
                </Animation>
              </div>
            )}
          </div>
          <Animation type="1">
            {p2 && <p className="mt-10 text-base">{p2}</p>}
          </Animation>
        </div>
      </div>
    </Animation>
  );
};

export default Style2;
