function TopicTitle(args) {
  return (
      <div className="w-1/12 h-40 rounded-xl bg-gray-200 flex flex-col justify-center items-center text-center align-middle content-center">
          <img src={args.img} className="rounded-xl h-3/4 w-3/4 overflow-hidden"/>
          <h1 className="text-gray-500">{args.title}</h1>
      </div>
  );
}

export default TopicTitle;