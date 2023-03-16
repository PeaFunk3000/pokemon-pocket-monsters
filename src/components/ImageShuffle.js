const imgs = [
  `${process.env.PUBLIC_URL}/images/background1.jpg`,
  `${process.env.PUBLIC_URL}/images/background2.jpg`,
  `${process.env.PUBLIC_URL}/images/background3.jpg`,
];

export default function ImageShuffle() {
  return (
    <div id="bgHolder">
          <img className="backgroundImg" src={imgs[Math.floor(Math.random() * imgs.length)]}/>
    </div>
  )
}
