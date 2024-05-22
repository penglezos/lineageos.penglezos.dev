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
      <p className="mb-10">You can read more about LineageOS by visiting their <a href="https://lineageos.org" className="underline" target="_blank" >official website.</a></p>
      <h2 className="mb-4 text-2xl ont-semibold tracking-tighter">Changes from official LineageOS sources:</h2>
      <ul className="mb-10 list-disc list-inside">
        <li>Play Integrity/Safetynet passes out of the box</li>
        <li>Google Photos spoof to allow unlimited storage</li>
        <li>Require unlocking to use sensitive QS tiles</li>
        <li>Allow disabling ripple effect on unlock</li>
        <li>Improved scrolling friction</li>
        <li>Improved scrolling cache</li>
        <li>Double tap on home screen to turn off screen</li>
        <li>Various log spam fixes</li>
        <li>Misc backend optimizations</li>
      </ul>
    </section>
  )
}
