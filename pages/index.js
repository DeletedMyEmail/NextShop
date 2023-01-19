import TopSection from "@/components/home/topsection";
import MiddleSection from "@/components/home/middlesection";
import OverflowSection from "@/components/home/overflowsection";

function Home() {
  return (
      <div className="bg-gray-50 h-screen w-screen p-0 m-0 ">
          <TopSection/>
          <OverflowSection/>
          <MiddleSection/>
      </div>
  )
}

export default Home