import { Anchor } from '../components/Anchors'

const NotFound = () => {
  return (
    <div className='h-screen overflow-hidden bg-[url("./src/assets/404.jpg")] bg-cover bg-fixed bg-center bg-no-repeat text-gray-200'>
      <article className="flex h-full flex-col items-center justify-center gap-10 bg-[#000000aa] align-middle">
        <h1 className="text-center font-hazelnut text-9xl max-sm:max-md:text-5xl">
          404
        </h1>
        <p className="text-center text-2xl max-sm:max-md:text-sm sm:px-8 md:px-10 lg:px-12">
          La pagina solicitada no fue encontrada
        </p>
        <Anchor url={'/'}>Regresar</Anchor>
      </article>
    </div>
  )
}

export default NotFound
