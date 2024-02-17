// label & input in form
const Entry = ({ name, type }) => {
  function capitalize(str) {
    return str[0].toUpperCase() + str.slice(1)
  }

  return (
    <div className="relative">
      <input
        type={type}
        id={name}
        placeholder={capitalize(name)}
        className="mb-7 w-[90%] border border-b-4 border-[#ccc] bg-transparent px-3 py-5 text-sm tracking-wider"
      />
      <label
        htmlFor={name}
        className="font-size pointer-events-none absolute left-2 top-0 py-3 text-base text-gray-50 transition-[0.5s]"
      >
        {capitalize(name)}
      </label>
    </div>
  )
}

export default Entry
