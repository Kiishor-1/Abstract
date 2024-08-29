export default function Card({card}) {
  return (
    <div className="w-[30rem] h-[10rem] border border-gray-400 bg-gray-100 rounded-md">
      <h4 className="w-full px-2 py-1 border-b border-gray-400 font-semibold">{card.title}</h4>
      <p className="text-sm px-2 py-1">{card.description}</p>
    </div>
  )
}
