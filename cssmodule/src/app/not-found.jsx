import Link from "next/link"

const NotFound = () => {
  return (
    <>

<div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-8xl font-bold text-red-500">
        404
      </h1>

      <h2 className="text-3xl font-semibold mt-4">
        Page Not Found!
      </h2>

      <Link
        href="/"
        className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
      >
        Back to Home
      </Link>
    </div>    


</>
  )
}

export default NotFound