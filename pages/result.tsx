import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SpeechBubble from '../components/SpeechBubble';
import FourPillarsTable from '../components/FourPillarsTable';
import coverImg from '../image/image.jpg.jpg';

export default function ResultPage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const id = setTimeout(() => setLoading(false), 3000);
    return () => clearTimeout(id);
  }, []);
  //결과 페이지로 넘어가기전에 3초정도 딜레이 후 결과 페이지로 넘어가기

  return (
    <>
      <Head>
        <title>오늘의 운세</title>
      </Head>
      <main className="min-h-screen w-full flex items-start justify-center bg-neutral-100 py-6 md:py-10">
        <div className="w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden">

          {loading ? (
            <section className="p-6 flex flex-col items-center gap-4">
              <SpeechBubble tail="bottom" variant="comic" className="text-center">
                오늘의 운세를 살펴봐요...
              </SpeechBubble>
              <p className="text-xs text-gray-500">약 3초 정도 소요됩니다</p>
              <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div className="h-full bg-black animate-pulse" style={{ width: '60%' }} />
              </div>
            </section>
          ) : (
            <>
              <section className="p-4 space-y-4">
                <div className="relative w-full h-56 bg-neutral-200 rounded-xl overflow-hidden">
                  <Image src={coverImg} alt="인물" fill className="object-cover" />
                </div>
                <div className="flex gap-2 items-start">
                  <SpeechBubble tail="right" className="ml-auto max-w-[75%]">
                    사주팔자를 통해 대략적인 흐름을 살펴봐요.
                  </SpeechBubble>
                </div>
              </section>
              <section className="p-4 pt-0">
                <h2 className="sr-only">사주팔자 표</h2>
                <FourPillarsTable />
              </section>
            </>
          )}
        </div>
      </main>
    </>
  );
}


