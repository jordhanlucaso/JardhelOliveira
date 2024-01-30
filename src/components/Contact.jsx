import React, { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import emailjs from '@emailjs/browser'
import { styles } from '../styles'
import { EarthCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { slideIn } from '../utils/motion'
import { artstation } from '../assets'
import { instagram } from '../assets'

const Contact = () => {
  const formRef = useRef()
  const [ form, setForm ] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    emailjs.send(
      'service_1scinb8',
      'template_l9xsu2k',
      { 
        from_name: form.name, 
        to_name: 'Jardhel', 
        from_email: form.email, 
        to_email: 'jardhel@gmail.com',
        message: form.message
      },
      'LfGQuAs6c59RwNsBJ'
    )
      .then(() => {
        setLoading(false)
        alert('Thank you. I will get back to you as soon as posible.')

        setForm({
          name: '',
          email: '',
          message: ''
        }, (error) => {
          setLoading(false)

          console.log(error)

          alert('Something went wrong.')
        })
      })
  }

  return (
    <div className='xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 overflow-hidden'>
      <motion.div
        variants={slideIn('left', 'tween', 0.2, 1)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact</h3>

        <form 
          ref={formRef}
          onSubmit={handleSubmit}
          className='mt-12 flex flex-col gap-8'
        >
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your Name"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="What's your Email"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>
          <div className="flex justify-between card-img_hover">
            <button
              type='submit'
              className='inline-flex justify-start bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'
            >
              {loading ? 'Sending...' : 'Send'}
            </button>

            <div className='flex justify-end'>
              <div
                onClick={() => window.open('https://www.instagram.com/deru3dart/', 'blank')}
                className=" w-11 h-11 mr-3 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={instagram}
                  alt="artstation"
                  className="object-contain"
                />
              </div>

              <div
                onClick={() => window.open('https://www.artstation.com/deru3dart', 'blank')}
                className="w-10 h-10 mx-3 rounded-full flex justify-center items-center cursor-pointer"
              >
                <img
                  src={artstation}
                  alt="artstation"
                  className="object-contain"
                />
              </div>
            </div>
            
          </div>
        </form>
      </motion.div>
      <motion.div 
        variants={slideIn('right', 'tween', 0.2, 1)}
        className='xl:flex-1 xl:h-auto md:h-[550px] h[350px]'
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, 'contact')