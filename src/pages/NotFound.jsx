import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className='h-screen overflow-hidden bg-[url("./src/assets/404.jpg")] bg-center bg-cover bg-no-repeat bg-fixed text-gray-200'>
      <article className='flex h-full flex-col items-center justify-center gap-10 bg-[#000000aa] align-middle'>
        <h1 className='text-center text-9xl max-sm:max-md:text-5xl font-hazelnut'>404</h1>
        <p className='text-center text-2xl max-sm:max-md:text-sm sm:px-8 md:px-10 lg:px-12'>The page you requested was not found</p>
        <Link to={'/'}>Go back</Link>
      </article>
    </div>
  )
}

export default NotFound