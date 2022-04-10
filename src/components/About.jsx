export default function About() {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
      <div className='flex flex-col justify-center items-center w-full h-full'>
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl fontbold inline border-b-4 border-white-600'>
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
          <div className='sm:text-right text-4xl font-bold'>
            <p>Hi. I'm Brian Lee.</p>
          </div>
          <div>
              <p>
              I am a Full Stack Web Developer who is inspired to provide creative solutions to open ended problems and driven to master his craft. With my experience in the social service industry, I am confident on how adaptable I am working under any environment while being able to provide exceptional communication and feedback to my team members. Skilled in JavaScript, React, Web Design, and Customer Engagement.
              </p>
          </div>
        </div>
      </div>
    </div>
  );
}
