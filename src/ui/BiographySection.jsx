import Style1 from './Style1';

function BiographySection() {
  return (
    <div className="px-5">
      <Style1
        title="Biography"
        image="assets/artist_photo.jpeg"
        paragraph1="AdeKunle Ogunleke is a versatile and accomplished Visual Artist
        currently pursuing a Masters of Fine Arts in Studio Art at the
        University of Missouri-Columbia, with a concentration in Drawing
        and Painting. Hailing from a background in English literature and
        international studies, Adekunle has seamlessly blended his passion
        for the arts with a rich academic journey.
"
        paragraph2='His artistic prowess is evident in various exhibitions, including
              the forthcoming "Artist Against Abuse Exhibition" at The Shoe
              Factory Social Club in Norwich. Notable past exhibitions include
              "Rejuvenation" at the National Gallery of Art in Enugu and the
              ongoing "The Color Black: 2nd Annual Group Gallery Show" at Orr
              Street Studios.
              '
        btn="Read More"
        btnRouteTo="/biography"
      />
    </div>
  );
}

export default BiographySection;
