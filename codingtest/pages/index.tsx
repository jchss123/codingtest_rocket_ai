import Head from 'next/head';
import { useRouter } from 'next/router';
import SpeechBubble from '../components/SpeechBubble';
import Image from 'next/image';
import coverImg from '../image/image.jpg.jpg';

export default function Home() {
  const router = useRouter();
  return (
    <>
      <Head>
        <title>프론트엔드 반응형 코딩 테스트</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Next.js + Tailwind responsive test with speech bubbles and Four Pillars table" />
      </Head>
      <main className="min-h-screen w-full flex items-start justify-center bg-neutral-100 py-6 md:py-10">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden">
          <div className="relative h-72">
            <div className="absolute inset-0">
              <Image src={coverImg} alt="배경 이미지" fill className="object-cover" />
            </div>
            <div className="relative h-full p-6 flex flex-col items-center gap-8 justify-center">
              <SpeechBubble tail="bottom" variant="comic" className="max-w-full text-center mt-4">
                오늘의 운세가 궁금하신가요?
              </SpeechBubble>
              <button
                className="w-full py-3 rounded-xl bg-black/80 backdrop-blur-sm text-white text-sm font-medium"
                onClick={() => router.push('/result')}
              >
                오늘의 운세 보기
              </button>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}


