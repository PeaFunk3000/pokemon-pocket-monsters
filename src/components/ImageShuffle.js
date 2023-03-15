const imgs = [
  `${process.env.PUBLIC_URL}/images/background1.png`,
  `${process.env.PUBLIC_URL}/images/background2.png`,
  `${process.env.PUBLIC_URL}/images/background3.png`,
  `${process.env.PUBLIC_URL}/images/background4.png`,
];

export default function ImageShuffle() {
  return (
    <div>
          <img class="backgroundImg" src={imgs[Math.floor(Math.random() * imgs.length)]}/>
    </div>
  )
}
