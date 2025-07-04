// Index page
import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/globals.css';

const IndexPage = () => {
  return (
    <div>
      <Head>
        <title>Manga Website</title>
      </Head>
      <h1>Welcome to the manga website</h1>
      <Image
        src="https://images.pexels.com/photos/5994830/pexels-photo-5994830.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="A variety of pills scattered on a vivid red surface, showcasing different shapes and colors."
        width={4543}
        height={3029}
      />
      <Image
        src="https://images.pexels.com/photos/9843280/pexels-photo-9843280.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Close-up of a luxury car emblem on a glossy red surface displaying elegance and style."
        width={4791}
        height={3194}
      />
      <Image
        src="https://images.pexels.com/photos/5994302/pexels-photo-5994302.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        alt="Incense sticks and packaging on vibrant red background for aromatherapy and relaxation."
        width={4215}
        height={2810}
      />
    </div>
  );
};

export default IndexPage;