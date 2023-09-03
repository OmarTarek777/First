
import Htext from '@/shared/Htext'
import { SelectedPage } from '@/shared/types'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'



type Props = {
    setSelectedPage: (value: SelectedPage) => void
}

const Contactus = ({setSelectedPage}: Props) => {

  const inputs = ` mt-5 w-full rounded-lg bg-primary-300 px-5 py-3 placeholder-white`;

  const {
    register,
    trigger,
    formState: {errors}
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
} 
  return (
<section id='contactus' className=' mx-auto w-5/6 pt-24 pb-32 '>
  <motion.div onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}>
    <motion.div
    className='md:w-3/5 '
    initial="hidden"
    whileInView="visable"
    viewport={{ once: true, amount: 0.5}}
    transition={{duration: 0.7}}
    variants={{
      hidden:{opacity: 0, x: -50},
      visable:{opacity:1, x:0},
    }}
    >
      <Htext>
        <span className='text-primary-500'>Join Now</span> to Get in Shape
      </Htext>
      <p className='my-5'> See you can send what you want and actually contact us but most probably we wont reply but hey!... give it your best try.</p>
    </motion.div>

    {/* the form it self bruva */}
    <div className='mt-10 justify-between gap-8'>
        <motion.div
        className='mt-10 basis-3/5 md:mt-0'
        initial="hidden"
    whileInView="visable"
    viewport={{ once: true, amount: 0.5}}
    transition={{duration: 0.7}}
    variants={{
      hidden:{opacity: 0, y: 50},
      visable:{opacity:1, y: 0},
    }}>
        <form 
        target='_blank'
        onSubmit={onSubmit}
        action='https://formsubmit.co/omartarek6000@gmail.com'
        method='Post'
        >
            {/* Input for name */}
            <input className = { inputs} 
            type='text'
            placeholder='breh what the hell?'
            {...register("name", {
              required: true,
              maxLength: 100,
            })}
            />
            {errors.name && (
              <p className='mt-1 text-primary-500'>
                {errors.name.type === "required" && "this field is required breh"}
                {errors.name.type === "maxLength" && "BREEEEEH"}
              </p>
            )}

            {/* Input for email */}
            <input className = { inputs} 
            type='text'
            placeholder='just type smth breh'
            {...register("email", {
              required: true,
              pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            })}
            />
            {errors.email && (
              <p className='mt-1 text-primary-500'>
                {errors.email.type === "required" && "this field is required breh"}
                {errors.email.type === "pattern" && "BREEEEEH"}
              </p>
            )}
            
            {/* Input for massege */}
            <textarea className = { inputs}
            rows={4}
            placeholder='Massege'
            {...register("massege", {
              required: true,
              maxLength: 2000,
            })}
            />
            {errors.massege && (
              <p className='mt-1 text-primary-500'>
                {errors.massege.type === "required" && "this field is required breh"}
                {errors.massege.type === "maxLength" && "BREEEEEH"}
              </p>
            )}
              <button type='submit'
              className='mt-5 rounded-lg bg-secondary-500 px-20 py-3 transition duration-500 hover:bg-slate-500'>
                Submit
              </button>
        </form>
      </motion.div>
    </div>
  </motion.div>
</section>  )
}

export default Contactus