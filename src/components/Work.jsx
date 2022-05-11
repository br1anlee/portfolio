import DevelUp from "../assets/develup.png";
import Valowiki from "../assets/valowiki.png";
import Meme from "../assets/meme.png";
import Bytez from "../assets/bytez.png";
export default function Work() {
  return (
    <div className="w-full md:h-screen text-gray-300 bg-[#0a192f]" name="work">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-600">
            Work
          </p>
          <p className="py-6">// Some of my recent work</p>
        </div>
        {/* Grid Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid item 4 */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Valowiki})` }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                ValoWIKI
              </span>
              <div className="pt-8 text-center">
                <a href="https://valo-wiki.herokuapp.com/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/br1anlee/valowiki" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 1 */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${DevelUp})` }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                DevelUp +
              </span>
              <div className="pt-8 text-center">
                <a href="https://develupp.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/br1anlee/Develup-client"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 2 */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Bytez})` }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Bytez
              </span>
              <div className="pt-8 text-center">
                <a href="https://food-bytez.herokuapp.com" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a href="https://github.com/br1anlee/bytez" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          {/* Grid item 3 */}
          <div
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
            style={{ backgroundImage: `url(${Meme})` }}
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Simon Meme Game
              </span>
              <div className="pt-8 text-center">
                <a href="https://simon-meme.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 mr-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/br1anlee/Simon-Meme-Game"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 bg-white text-gray-700 font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
