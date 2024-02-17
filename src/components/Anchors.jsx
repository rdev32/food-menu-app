import { Link } from 'react-router-dom'

const Anchor = ({ children, url }) => {
  return (
    <Link
      className="max-sm:text-md px-12 py-2 text-2xl transition duration-300 ease-in-out hover:text-gray-50"
      to={url}
    >
      {children}
    </Link>
  )
}

const AnchorButton = ({ children, url }) => {
  return (
    <Link
      className="max-sm:text-md flex-1 rounded border-4 border-gray-300 px-12 py-2 text-center text-2xl transition duration-300 ease-in-out hover:border-gray-50 hover:bg-[#ffffff50] hover:text-gray-50 max-sm:w-full"
      to={url}
    >
      {children}
    </Link>
  )
}

export { Anchor, AnchorButton }
