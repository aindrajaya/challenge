
import Link from 'next/link';

const FirstPost = () => {
  return (
    <div>
        <h1 className="title">
        Read{' '}
        <Link href="/">
          <a>this page!</a>
        </Link>
      </h1>
    </div>
  )
}

export default FirstPost