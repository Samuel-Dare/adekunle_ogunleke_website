import Style1 from '../ui/Style1';
import StyleThree from '../ui/StyleThree';
import StyleTitle from '../ui/StyleTitle';

function Biography() {
  return (
    <main>
      <div className="px-5">
        <Style1
          removeBgColor={true}
          title="Biography"
          image="assets/artist_photo.jpeg"
          paragraph1="AdeKunle Ogunleke is a versatile and accomplished Visual Artist
    currently pursuing a Masters of Fine Arts in Studio Art at the
    University of Missouri-Columbia, with a concentration in Drawing
    and Painting. Hailing from a background in English literature
    and international studies, Adekunle has seamlessly blended his
    passion for the arts with a rich academic journey."
          paragraph2=" His artistic prowess is evident in various exhibitions,
        including the forthcoming 'Artist Against Abuse Exhibition' at
        The Shoe Factory Social Club in Norwich. Notable past
        exhibitions include 'Rejuvenation' at the National Gallery of
        Art in Enugu and the ongoing 'The Color Black: 2nd Annual Group
        Gallery Show' at Orr Street Studios."
          paragraph3=" In addition to his academic pursuits and scholarship, Adekunle actively
        contributes to the art scene as a Gallery Assistant at George
        Bingham's Gallery in Columbia, Missouri. His dedication to the
        field is further highlighted by his involvement in the
        Interdisciplinary Migration Studies Institute at the University
        of Missouri-Columbia."
          paragraph4=" 
        Adekunle's achievements extend beyond exhibitions and academia,
        as he was honored as the winner of the Numatville Tourism
        Megacity Art Contest in 2018. This accolade showcases his
        ability to captivate audiences and leave a lasting impression
        with his artistic creations."
        />
      </div>

      <div>
        <StyleTitle title="Personal Statement" />
        <StyleThree
          paragraph="As a Nigerian and African artist, I am committed to translating historical and fascinating incidents from everyday life in Nigeria and Africa into abstract paintings. I gravitate towards abstract expressionism as a means of creating a psychological distance between myself, the artwork, and the audience. This deliberate distancing is crucial when addressing traumatic and psychologically disturbing experiences, allowing for contemplation without direct confrontation.

My artistic practice revolves around capturing the essence of these experiences without reproducing them in a literal sense. Through abstraction, I aim to evoke emotions and reflections, encouraging viewers to explore the complexity of historical narratives and their lasting effects on individuals and communities. 
"
          imageUrlPath="assets/abstract2.jpg"
          imageTitle="Image"
        />
      </div>
    </main>
  );
}

export default Biography;
