import { motion, useScroll, useSpring, useTransform } from 'motion/react'
import React from 'react'

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();
  const x = useSpring(scrollYProgress, { damping: 50 });

  const mountain3Y = useTransform(x, [0,0.5], ["0%", "70%"]);
  const planetx = useTransform(x, [0,0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(x, [0,0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(x, [0,0.5], ["0%", "0%"]);

  return (
    <section className='absolute inset-0 bg-black/40'>
      <div className='relative h-screen overflow-y-hidden'>
        {/* Background Sky */}
        <div 
          className='absolute inset-0 w-full h-screen -z-50'
          style={{
            backgroundImage: 'url(/assets/Background/Sky-Fast.jpg)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
        }}/>
        {/* High Layer 3 */}
        <motion.div 
          className='absolute inset-0 -z-40'
          style={{
            backgroundImage: 'url(/assets/Background/Modern-Building1-Fast.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain3Y,
        }}/>
        {/* Bird */}
        <motion.div 
          className='absolute inset-0 -z-5'
          style={{
            backgroundImage: 'url(/assets/Background/Bird.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            x: planetx,
        }}/>
        {/* Medium Layer 2 */}
        <motion.div 
          className='absolute inset-0 -z-20'
          style={{
            backgroundImage: 'url(/assets/Background/Modern-Building2-Fast.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain2Y,
        }}/>
        {/* Low Layer 1 */}
        <motion.div 
          className='absolute inset-0 -z-10'
          style={{
            backgroundImage: 'url(/assets/Background/Modern-Building3-Fast.png)',
            backgroundPosition: 'bottom',
            backgroundSize: 'cover',
            y: mountain1Y,
        }}/>
      </div>
    </section>
  )
}

export default ParallaxBackground