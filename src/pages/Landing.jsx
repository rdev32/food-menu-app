import { useRef, useEffect } from 'react'
import { AnchorButton } from '../components/Anchors'

const Landing = () => {
  const containerRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (e) => {
      const container = containerRef.current
      if (!container) return

      const velocity = 80

      const mouse = {
        x: e.pageX - container.offsetLeft,
        y: e.pageY - container.offsetTop,
      }

      const ctx = {
        width: container.offsetWidth,
        height: container.offsetHeight,
      }

      const position = {
        x: (mouse.x / ctx.width) * velocity,
        y: (mouse.y / ctx.height) * velocity,
      }

      container.style.transition = 'background-position 0.5s ease'
      container.style.backgroundPosition = `${position.x}% ${position.y}%`
    }
    
    const handleMouseOut = () => {
      container.style.transition = 'background-position 0.5s ease'
      container.style.backgroundPosition = 'center'
    }

    const container = containerRef.current
    if (!container) return

    container.addEventListener('mousemove', handleMouseMove)
    container.addEventListener('mouseout', handleMouseOut)

    return () => {
      container.removeEventListener('mousemove', handleMouseMove)
      container.removeEventListener('mouseout', handleMouseOut)
    }
  }, [containerRef])

  return (
    <div
      className="h-dvh overflow-hidden bg-[url('./src/assets/landing.jpg')] bg-fixed bg-center bg-no-repeat text-gray-300"
      ref={containerRef}
    >
      <div className="h-full w-full bg-[#000000aa]">
        <article className="flex h-full w-full flex-col items-center justify-center gap-10 align-middle">
          <div className="flex w-[40em] flex-col items-center justify-center gap-8 align-middle">
            <h1 className="w-full border-8 border-dashed border-gray-300 px-12 py-8 text-center font-hazelnut text-9xl max-sm:w-[80%] max-sm:text-6xl">
              Cookeet
            </h1>
            <div className="max-sm:text-md flex flex-col justify-center px-14 align-middle text-2xl max-sm:w-[80%] max-sm:px-2">
              <span
                style={{
                  fontFamily: 'Courier New',
                  fontWeight: 'bold',
                  textAlign: 'left',
                }}
              >
                {"/'kʊkit,/"}
              </span>
              <p>
                Crea y organiza tus dietas. Presupuesta tus ingredientes y
                comparte tus recetas, todo en un solo lugar.
              </p>
            </div>
            <div className="flex w-full items-center justify-between gap-12 align-middle max-sm:w-[80%] max-sm:flex-col max-sm:gap-5">
              <AnchorButton url="/login">Entrar</AnchorButton>
              <AnchorButton url="/register">Conocer mas</AnchorButton>
            </div>
            {/*
            <div className="fixed bottom-4 sm:w-auto lg:w-full">
              <div className="flex w-full items-center justify-around align-center">
                <Anchor url="/terms">Informacion</Anchor>
                <Anchor url="/terms">Asistencia</Anchor>
                <Anchor url="/terms">Contacto</Anchor>
                <Anchor url="/terms">Legalidades</Anchor>
                <Anchor url="https://github.com/rdev32">Creador</Anchor>
              </div>
            </div>
            */}
          </div>
        </article>
      </div>
    </div>
  )
}

export default Landing
