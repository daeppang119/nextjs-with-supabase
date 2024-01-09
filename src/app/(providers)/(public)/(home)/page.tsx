import Page from "@/components/Page";
import Link from "next/link";

export default function Home() {
  return (
    <Page>
      <h1>홈</h1>

      <Link href="/">책 목록</Link>
    </Page>
  );
}
