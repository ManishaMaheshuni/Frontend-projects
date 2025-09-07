import React, { useState } from 'react'

const FormRegex = () => {

    let [formData,setFormData]=useState({
        email:"", //!email input
        url:"", //!url input
        digit:"",//!digit input
        number:"",//!number
        alphaNum:""//!last input
    })

    let {email,url,digit,number,alphaNum}=formData//? destrcture state 

    let handleChange=(event)=>{
        console.log(event);
        let {name,value }= "https://event.target"
        setFormData({...formData,[name]:value})
    }

    //!to store error
    let [error,setError]=useState({})

    //event-->sbe
    let handleSubmit=(event)=>{
        event.preventDefault()
        //?validate all input

        let validate={} //!within "handleSubmit" this obj will collect error

        //validate email
        let regexEmail = /\S+@\S+\.\S+/
        if(email===""){
            validate.email="This field is mandatory!!"
        }else if(!regexEmail.test(email)){
            validate.email="Email pattern is not matching"
        }

        //validate url
        let regexUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/
        if(url===""){
            validate.url="This field is mandatory!!"
        }else if(!regexUrl.test(url)){
            validate.url="Url is not matching"
        }

        //validate digit (whole number, decimal not allowed)
        let regexDigits = /^[0-9]+$/
        if(digit===""){
            validate.digit="This field is mandatory"
        }else if(!regexDigits.test(digit)){
            validate.digit="Digit is not matching"
        }

        //validate number (take both decimal and whole number)
        let regexNumber = /^-?\d+(?:\.\d+)?$/
        if(number===""){
            validate.number="This field is mandatory!!"
        }else if(!regexNumber.test(number)){
            validate.number="Number is not matching"
        }

        //validatea alpha numeric(both number and alpha)
        let regexAlpha = /^[a-zA-Z0-9\s]+$/
        if(alphaNum===""){
            validate.alphaNum="This field is mandatory"
        }else if(!regexAlpha.test(alphaNum)){
            validate.alphaNum="Alpha numeric is not matching"
        }

        setError(validate)//!passing the error from validate obj to "error state"
    }

    //event-->sbe
    let handleReset=(event)=>{
        event.preventDefault()
        setFormData({
            email:"", //!email back into empty
            url:"", //!url  back into empty
            digit:"",//!digit  back into empty
            number:"",//!number  back into empty
            alphaNum:""//!last input  back into empty
        })
        setError({})
    }

  return (
    <>
        <form>
            <h1>VALIDATION WITH REGULAR EXPRESSION</h1>
            <section>
                <label htmlFor="email">EMAIL : </label>
                <div>
                   <input type="text"
                    id='email'
                     name="email" 
                     value={email} 
                    onChange={handleChange}/>
                </div>
                {/* <span>{http://error.email}</span> */}
            </section>
            <section>
                <label htmlFor="url">URL : </label>
                <div>
                    <input type="text" 
                    id='url'
                    name="url" 
                    value={url} onChange={handleChange}/>
                </div>
                <span>{error.url}</span>
            </section>
            <section>
                <label htmlFor="dig">DIGITS :</label>
                <div>
                    <input type="text" 
                    id='dig' name='digit' 
                    value={digit} onChange={handleChange}/>
                </div>
                <span>{error.digit}</span>
            </section>
            <section>
                <label htmlFor="num">NUMBER : </label>
                <div>
                    <input type="text"
                     id='num' name='number' 
                    value={number} onChange={handleChange}/>
                </div>
                <span>{error.number}</span>
            </section>
            <section>
                <label htmlFor="alpha">ALPHA NUMERIC :</label>
                <div>
                    <input type="text"
                     id='alpha' 
                     name='alphaNum' value={alphaNum} 
                     onChange={handleChange}/>
                </div>
                <span>{error.alphaNum}</span>
            </section>
            <section>
                <button onClick={handleSubmit}>SUBMIT</button>
                <button onClick={handleReset}>RESET</button>
            </section>
        </form>
    </>
  )
}

export default FormRegex 