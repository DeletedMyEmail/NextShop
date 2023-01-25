import MiddleBlock from "@/components/home/middleblock";

function MiddleSection() {
    return (
        <div className="bg-gray-50 w-screen flex flex-col space-y-10 justify-center align-middle content-center items-center p-8">
            <MiddleBlock turn={true} title="Title 1" img="cutePenguinArt_transparent.png" description="Facilisis faucibus expetenda graeci diam principes eirmod adolescens. Magna impetus definitiones mi placerat."/>
            <hr className="h-px my-8 bg-gray-200 border-0"/>
            <MiddleBlock turn={false} title="Title 2" img="penguinArt.png" description="Ligula sapientem praesent quo principes indoctum equidem nihil quaerendum. Nec penatibus movet risus rutrum volumus magna senserit conclusionemque. Duo potenti parturient nisl prompta ceteros fuisset agam nominavi dignissim. .Facilisis faucibus expetenda graeci diam principes eirmod adolescens. Magna impetus definitiones mi placerat."/>
            <hr className="h-px my-8 bg-gray-200 border-0"/>
            <MiddleBlock turn={true} title="Title 3" img="cutePenguinArt_transparent.png" description="Facilisis faucibus expetenda graeci diam principes eirmod adolescens. Magna impetus definitiones mi placerat."/>
        </div>
    )
}

export default MiddleSection;