import Container from "@/components/container";
import { GameProps } from "@/utils/types/game";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRightSquare } from "react-icons/bs";

async function getDalyGame() {
  try {
    const res = await fetch(
      `${process.env.NEXT_API_URL}/next-api/?api=game_day`,
      { next: { revalidate: 320 } }
    );

    return res.json();
  } catch (err) {
    throw new Error("Failed to fetch data");
  }
}

export default async function Home() {
  const dalyGame: GameProps = await getDalyGame();

  return (
    <main className="w-full">
      <Container>
        <h1 className="text-xll font-bold text-center mt-8 mb-5">
          Separamos um jogo exclusivo para você
        </h1>

        <Link href={`/game/${dalyGame.id}`}>
          <section className="w-full bg-black rounded-lg">
            <div className="relative w-full max-h-96 h-96 rounded-lg">
              <div className="absolute bottom-0 z-20 flex items-center gap-2 p-3">
                <p className="text-white font-bold text-xl">{dalyGame.title}</p>
                <BsArrowRightSquare size={24} color="#fff" />
              </div>

              <Image
                src={dalyGame.image_url}
                alt="Imagem do jogo"
                priority
                quality={100}
                fill={true}
                sizes="(max-width:768px) 100vw, (max-width:1200px) 44vw"
                className="max-h-96 object-cover rounded-lg absolute opacity-50 hover:opacity-100 transition-all duration-300"
              />
            </div>
          </section>
        </Link>
      </Container>
    </main>
  );
}
