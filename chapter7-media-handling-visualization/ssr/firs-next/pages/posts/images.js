import Image from 'next/image';
import Head from 'next/head';

export default function images() {
    return (
        <>
            <Head>
                <title>Images</title>
            </Head>
            <Image
          src="/images/profile.jpg" // Route of the image file
          height={144} // Desired size with correct aspect ratio
          width={144} // Desired size with correct aspect ratio
          alt="Your Name"
        />
        </>
      );
}