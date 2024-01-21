import React from 'react'

export default function About(props) {
  return (
    <div>
      <div className="container ">
      <h1 className={`my-3 text-${props.mode === 'light'? "secondary":"white"}`}>About TextWiz</h1>
      </div>
      <div className='container '>
        <p className={`text-justify fs-5 fw-light lh-sm text-wrap text-${props.mode === 'light'? "black":"white"}`}>
        Welcome to TextWiz, your ultimate online destination for all your text editing needs. 
        At TextWiz, we believe that words have the power to shape ideas, inspire change, and spark creativity. 
        Our platform is designed with you in mind, offering a user-centric approach to enhance your writing 
        experience. Whether you're a student, a professional, or an aspiring wordsmith, our intuitive tools and 
        features are tailored to help you craft flawless content. With a passionate team dedicated to empowering 
        your words, we are committed to providing an interactive and seamless editing experience. Join our 
        ever-growing community of satisfied users, and let TextWiz be your trusted companion on your journey to 
        perfect prose. Together, let's make your words shine and leave a lasting impact on the world.
        </p>
      </div>
    </div>
  )
}
