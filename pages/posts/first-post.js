import Link from "next/link";
import Image from "next/image";
import Layout from "../../components/Layout";
export default function FirstPost() {
  return (
    <>
      <Layout>
        <h1>First Post</h1>
        <img src="/images/profile.jpg" alt="Your Name" />
        <Image
          src="/images/profile.jpg"
          height={144}
          width={144}
          alt="Your Name"
        />
        <Link href="/">
          <a>Back to Home</a>
        </Link>
      </Layout>
    </>
  );
}
