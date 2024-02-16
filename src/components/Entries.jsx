// label & input in form
const Entry = ({ name, type }) => {

  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="relative">
      <input type={type} id={name} placeholder={capitalize(name)}
        className="w-[90%] py-5 px-3 text-sm tracking-wider border border-[#ccc] mb-7 bg-transparent border-b-4"
      />
      <label htmlFor={name}
        className="absolute top-0 left-2 py-3 font-size text-base text-gray-50 pointer-events-none transition-[0.5s]"
      >
        {capitalize(name)}
      </label>
    </div>
  )
}

export default Entry
