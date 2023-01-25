import TopicTitle from "@/components/home/topictitle";
import TopicDescription from "@/components/home/topicdescription";

function MiddleBlock(args) {
    return (
        <div className=" w-screen flex justify-center flex-row space-x-5 mt-5">
            {args.turn ? <TopicTitle img={args.img} title={args.title}/> : <TopicDescription description={args.description}/>}
            {args.turn ? <TopicDescription description={args.description}/> : <TopicTitle img={args.img} title={args.title}/>}
        </div>
    )
}

export default MiddleBlock