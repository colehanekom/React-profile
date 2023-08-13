import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#111111] flex justify-center items-center p-4'>
      <div className='flex flex-col justify-center items-center w-full h-full text-white'>
          <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-left pb-4 pl-4'>
              <p className='text-4xl font-bold '>Contact <span className='text-[#10C623]'>Me</span></p>
            </div>
            <div></div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div>
                  <p className='text-3xl pb-2'>If You Have Any Project In Mind</p>
                  <p>I would be delighted to hear from you! Please don't hesitate to reach out using the contact information provided below. Whether you have a question, a potential collaboration in mind, or simply want to connect, I am always open to new opportunities. Feel free to email me or connect with me on LinkedIn. I strive to be responsive and will do my best to get back to you promptly. Let's connect and explore how we can work together to create amazing things in the world of technology. I look forward to hearing from you!</p>
                </div>

            <div>
            <form action="" className='flex flex-col max-w-[600px] w-full'> 
          <input className=' bg-white text-[#111111] p-2' type="text" placeholder='Your Name' name='name' required/>
          <input className='my-3 p-2 bg-white text-[#111111]' type="email" placeholder='Your Email' name='email' required/>
          <input className='p-2 bg-white text-[#111111]' type="text" placeholder='Your Mobile Number' name='mobile' required/>
          <textArea className='my-3 bg-white p-2' name="message" rows='8' placeholder='How can I help you?' required></textArea>
          <button className='text-white border-2 bg-[#10C623] px-4 py-3 my-2 mx-auto rounded-md flex items-center'>Submit</button>
        </form>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Contact 