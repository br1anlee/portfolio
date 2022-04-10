export default function Contact () {
    return (
        <div className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4' name='contact'>
            <form method='POST' action="https://getform.io/f/46fd1815-1753-4a8f-a78c-faedddbc64a6" className='flex flex-col max-w-[600px] w-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-600 text-gray-300'>
                        Contact
                    </p>
                    <p className='text-gray-300 py-4'>Submit the form below or email me at joonmolee3@gmail.com</p>
                </div>
                <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name'/>
                <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email'/>
                <textarea name="message"  rows="10" className='bg-[#ccd6f6] p-2' placeholder='Message'></textarea>
                <button className='text-white border-2 hover:bg-blue-500 hover:border-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Connect!</button>
            </form>
        </div>
    )
}