import HTML from '../assets/html.png'
import Github from '../assets/github.png'
import JavaScript from '../assets/javascript.png'
import Node from '../assets/node.png'
import Mongo from '../assets/mongo.png'
import ReactImg from '../assets/react.png'
import CSS from '../assets/css.png'
import Git from '../assets/git.png'
export default function Skills() {
    return (
        <div name='skills' className='bg-[#0a192f] w-full h-screen text-gray-300'>
            {/* Container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div>
                    <p className='text-4xl font-bold inline border-b-4 border-600'>Skills</p>
                    <p className='py-4'>// Techonologies I have worked with</p>
                </div>
            {/* Container for all icons */}
                <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={HTML} alt="HTML logo" className='w-20 mx-auto'/>
                        <p className='my-4'>HTML</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={CSS} alt="CSS logo" className='w-20 mx-auto'/>
                        <p className='my-4'>CSS</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={JavaScript} alt="JavaScript logo" className='w-20 mx-auto'/>
                        <p className='my-4'>JavaScript</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={ReactImg} alt="React logo" className='w-20 mx-auto'/>
                        <p className='my-4'>React</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Node} alt="Node logo" className='w-20 mx-auto'/>
                        <p className='my-4'>Node</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Github} alt="Github logo" className='w-20 mx-auto'/>
                        <p className='my-4'>Github</p>
                    </div>

                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Git} alt="Git logo" className='w-20 mx-auto'/>
                        <p className='my-4'>Git</p>
                    </div>
                    
                    <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                        <img src={Mongo} alt="Mongo logo" className='w-20 mx-auto'/>
                        <p className='my-4'>Mongo DB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}