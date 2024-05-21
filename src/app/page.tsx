export default function Home() {
  return (
    <section>
      <div className="flex justify-center items-center">
        <img src="lineage.png" width="300"></img>
      </div>
      <h1 className="mb-12 text-4xl font-semibold tracking-tighter text-center">
        LineageOS builds by penglezos
      </h1>
      <h2 className="mb-4 text-2xl ont-semibold tracking-tighter">What is LineageOS?</h2>
      <p className="mb-4">
        {`LineageOS Android Distribution is a free and open-source operating system for various devices, 
        based on the Android mobile platform.`}
      </p>
      <p className="mb-4">You can read more about LineageOS by visiting their <a href="https://lineageos.org" className="underline" target="_blank" >official website.</a></p>
    </section>
  )
}
