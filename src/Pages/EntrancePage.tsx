import { Link } from "react-router-dom"

// The overlay links are styled as buttons. They must BE the anchor, not wrap one:
// a <Link> nested inside a <button> only makes the text itself clickable, so the
// button's own padding swallowed clicks and the nav felt like it needed a second try.
const buttonClass =
    "block w-full text-center bg-white/80 text-gray-800/90 hover:text-black " +
    "text-[14px] px-3 py-2 font-bold rounded-lg hover:bg-white transition-all duration-300"

export default function EntrancePage() {
    return (<>
        <div className="w-screen h-screen">

            <div className="relative w-screen h-screen ">
                <iframe
                    // src="pano/pano1/index.html"
                    src="https://futeservices.com/25-26/V2/VR_10/index.html"
                    className="w-full h-full border-0 z-[4000]" // prevents iframe from blocking clicks
                    title="Pano2VR Tour"
                ></iframe>

                {/* Overlay Buttons bg-[rgb(253,175,23,0.7)]*/}
                <div className="absolute  top-0 right-4 h-full flex flex-col justify-center items-center z-30 pointer-events-auto">
                    <div className="flex w-full flex-col gap-2">
                        <Link to="/arena" className={buttonClass}>THE ARENA</Link>

                        <Link to="https://elena.futeservices.in" className={buttonClass}>ELENA</Link>

                        <Link to="https://ebony.futeservices.in" className={buttonClass}>EBONY</Link>

                        {/* <Link to="https://hiranandanigoldenwillows.futeservices.in">GOLDEN WILLOWS</Link> */}
                        {/* <Link to="/goldenwillows">GOLDEN WILLOWS</Link>  */}
                        <Link to="https://hiranandanigoldenwillows.com" className={buttonClass}>GOLDEN WILLOWS</Link>

                        {/* <Link to="https://hiranandanigoldenwillows.com/club-house.php"> */}
                        <Link to="/club-house" className={buttonClass}>CLUB HOUSE</Link>

                        <Link to="/quality" className={buttonClass}>QUALITY</Link>

                    </div>
                </div>
            </div>

        </div>
    </>)
}
