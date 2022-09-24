export default function Index() {
  return (
    <div className="flex flex-col items-center px-[20%]">
      <div className="flex flex-col items-center">
        <h1 className="text-[40px]">Hello! 👋 I'm William</h1>
        <h4 className="text-xl">I'm a fullstack web developer</h4>
        <h5 className="flex flex-col items-center gap-1 mt-5">
          <span>
            I can help you build and getting live that idea you have in mind
          </span>
          <span>For that I use this tools:</span>
        </h5>
      </div>

      <div className="flex gap-10 my-16">
        <div className="w-[100%]">
          <h2 className="text-2xl">Technologies I've worked with</h2>
          <div className="flex flex-wrap gap-5 mt-3">
            <img className="w-20" src="/img/html5.svg" alt="" />
            <img className="w-20 h-20" src="/img/css3.svg" alt="" />
            <img className="w-20" src="/img/js.svg" alt="" />
            <img className="w-20" src="/img/ts.svg" alt="" />
            <img className="w-20" src="/img/react.svg" alt="" />
            <img className="w-20" src="/img/vue.svg" alt="" />
            <img className="w-20" src="/img/tailwind.svg" alt="" />
            <img className="w-20 px-1 bg-white" src="/img/next.svg" alt="" />
            <img className="w-40 bg-white" src="/img/expressjs.svg" alt="" />
            <img className="w-40" src="/img/nestjs.svg" alt="" />
          </div>
        </div>
        <div className="w-[100%]">
          <h2 className="text-2xl">What I'm learning now</h2>
          <div className="flex flex-wrap gap-5 mt-3">
            <img className="bg-white" src="/img/apollo.svg" alt="" />
            <img className="bg-white" src="/img/graphql.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
