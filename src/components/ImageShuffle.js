const imgs = [
  `${process.env.PUBLIC_URL}/images/background1.jpg`,
  `${process.env.PUBLIC_URL}/images/background2.jpg`,
  // `${process.env.PUBLIC_URL}/images/background3.jpg`,
  // `${process.env.PUBLIC_URL}/images/background4.jpg`,
  // `${process.env.PUBLIC_URL}/images/background5.jpg`,
  // `${process.env.PUBLIC_URL}/images/background6.jpg`,
  // `${process.env.PUBLIC_URL}/images/background7.jpg`,
];

export default function ImageShuffle() {
  return (
    <div id="bgHolder">
          <img alt="pokemon background" className="backgroundImg" src={imgs[Math.floor(Math.random() * imgs.length)]}/>
    </div>
  )
}
