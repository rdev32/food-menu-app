import { Link } from 'react-router-dom'

const Landing = () => {
  return (
    <div className='h-screen overflow-hidden bg-[url("./src/assets/landing.jpg")] bg-center bg-cover bg-no-repeat bg-fixed text-gray-300'>
      <article className="flex h-full flex-col items-center justify-center gap-10 bg-[#000000aa] align-middle ">
        <h1 className="border-8 border-dashed px-12 py-8 text-center text-9xl max-sm:max-md:text-5xl font-hazelnut">
          Cookeet
        </h1>
        <p className="flex flex-col text-center text-2xl max-sm:max-md:text-sm sm:px-8 md:px-10 lg:px-12">
          <span
            style={{
              fontFamily: 'Courier New',
              fontWeight: 'bold',
              textAlign: 'left',
            }}
          >
            {"/'kʊkit,/"}
          </span>
          <p className=''>
            An app for storing your recipees, handle your budgets and
            build your diet.
          </p>
        </p>
        <div className="flex items-center justify-center gap-10 align-middle max-sm:max-md:flex-col">
          <Link
            className="max-sm:max-md:text-sm rounded border-4 border-gray-300 px-12 py-2 text-center text-2xl transition duration-300 ease-in-out hover:border-gray-50 hover:bg-[#ffffff50] hover:text-gray-50"
            to="/home"
          >
            Let me in!
          </Link>
          <Link
            className="max-sm:max-md:text-sm rounded border-4 border-gray-300 px-12 py-2 text-center text-2xl transition duration-300 ease-in-out hover:border-gray-50 hover:bg-[#ffffff50] hover:text-gray-50"
            to="/signup"
          >
            Sign up
          </Link>
        </div>
        <div className="fixed bottom-4 sm:w-auto lg:w-full">
          <div className="flex w-full items-center justify-between align-middle">
            <Link
              className="max-sm:max-md:text-sm px-12 py-2 text-2xl transition duration-300 ease-in-out hover:text-gray-50"
              to="/terms"
            >
              Terms
            </Link>
            <Link
              className="max-sm:max-md:text-sm px-12 py-2 text-2xl transition duration-300 ease-in-out hover:text-gray-50"
              to="/about"
            >
              About
            </Link>
          </div>
        </div>
      </article>
    </div>
  )
}

export default Landing
