import React, { useState } from "react";
import Layout from "../components/Layout";
import RadioGroup from "../components/Radio";
import {  Check, X } from "react-feather";
import { Link, graphql,navigate } from "gatsby";
import Helmet from "react-helmet";



const RussianAssetCheck = ({ data }) => {

  const [name, setName] = useState('');
  const [
    antiCorruptionOptionSelected,
    setAntiCorruptionOptionSelected
  ] = useState('');
  const [isRussianAsset, setIsRussianAsset] =  useState(null)
  const [showResults, setShowResults] = useState(false)
  const [validatingRunning, setValidatingRunning] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault();
  setValidatingRunning(true)
  navigate(`russian-asset-check/?${name.replace(/ /g,"-")}`)
  
   setTimeout(function() {
    window.scrollTo(0,0);
    if(antiCorruptionOptionSelected == 'true'){
      setIsRussianAsset(true)
    } else {
      setIsRussianAsset(false)
    }
    setShowResults(true)
    setValidatingRunning(false)
  }, 1800);
  };

  const CheckMark = () => (<div className="flex items-center border-b mb-2 pb-2 border-gray-200"><div className="bg-red-500 p-1 inline-block text-white rounded-full mr-2"><X strokeWidth={4}/></div><span className="block text-2xl lg:text-2xl font-semibold">{name}, you're a Russian Asset</span><img className="w-12 ml-auto shadow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Flag_of_Russia.svg/1599px-Flag_of_Russia.svg.png"/></div>)
  const NoMark = () => (<div className="flex items-center border-b mb-2 pb-2 border-gray-200"><div className="bg-green-500 p-1 inline-block text-white rounded-full mr-2"><Check strokeWidth={4}/></div><span className="block text-2xl lg:text-2xl font-semibold">Not a Russian Asset</span><img className="w-12 ml-auto shadow" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Logo_of_Hillary_Clinton_campaign_2016_%28blue_and_red%29.svg/600px-Logo_of_Hillary_Clinton_campaign_2016_%28blue_and_red%29.svg.png"/></div>)

const YesAssetResults = () => {

  switch(Math.floor(Math.random() * 3)) {
    case 0:
      return (<><CheckMark/><h1 className="text-xl lg:text-2xl text-center py-6 text-gray-700">{name}, there’s a pretty great chance you are buddies with Vlad Putin! Your similarities are too striking!</h1></>)
      break;
    case 1:
      return (<><CheckMark/><h1 className="text-xl lg:text-2xl text-center py-6 text-gray-700">Woah there {name}, nothing says Kremlin asset more than your lack of support for corruption in the democratic party!</h1></>)
      break;
    case 2:
      return (<><CheckMark/><h1 className="text-xl lg:text-2xl text-center py-6 text-gray-700">{name}, nothing shows you are being controlled by Putin more than being against the corrupt DC establishment!</h1></>)
      break;
      default:
      return (<><CheckMark/><h1 className="text-xl lg:text-2xl text-center py-6 text-gray-700">Anti-corruption, {name}? You aren't even trying to mask your support for Vladimir Putin and it really shows.</h1></>)
     }

}

const NoAssetResults = () => {
  switch(Math.floor(Math.random() * 2)) {
    case 0:
      return (<><NoMark/><h1 className="text-xl lg:text-2xl text-center py-6 text-gray-700">Right on {name}, still with her!</h1></>)
      break;
    default:
      return (<><NoMark/><h1 className="text-xl lg:text-2xl text-center py-6 text-gray-700">You're in the clear {name}! Keep fighting against pie in the sky proposals like Medicare-for-all and those crazy Bernie bros!</h1></>)
  }


}

return (<Layout>
   <Helmet
            title={'Russian Asset Check'}
            titleTemplate={`%s`}
            meta={[
              {
                property: "og:title",
                content: 'Russian Asset Check'
              },
              {
                property: "twitter:title",
                content: 'Russian Asset Check'
              },
              {
                property: "twitter:description",
                content: "Are you a Russian Asset? Find out with CNM's Russian Asset Checker!"
              },

              {
                name: "description",
                content: "Are you a Russian Asset? Find out with CNM's Russian Asset Checker!"
              },
              {
                property: "og:image",
                content:
                "https://cnmnews.org" +
                data.fileName.childImageSharp.fixed.src
              },
              {
                property: "twitter:image",
                content:
                "https://cnmnews.org" +
                data.fileName.childImageSharp.fixed.src
              },

              {
                property: "og:image:url",
                content:
                "https://cnmnews.org" +
                data.fileName.childImageSharp.fixed.src
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                name: "twitter:card",
                content: "summary_large_image"
              },
              {
                name: "twitter:creator",
                content: "dkrasniy"
              }
            ]}
          />
{showResults ?   <div className="max-w-xl mx-auto p-6 md:p-12 py-12 bg-white">
        {isRussianAsset ? <YesAssetResults/>:<NoAssetResults/>}
        <button type="button" onClick={()=>{setIsRussianAsset(null); setShowResults(false); setAntiCorruptionOptionSelected('')}} className="mt-4 bg-gray-200 hover:bg-gray-300 bg-transition focus:outline-none p-3 w-full rounded-full cursor-pointer font-semibold">Run another test</button>
      </div>  : <> <div className="max-w-xl mx-auto p-6 md:p-12 py-12 bg-white">
        <h1 className="text-3xl lg:text-4xl font-semibold">
          Are you a russian asset?
        </h1>
        <p className="text-gray-700 mb-3">
          Based on your policy positions, CNM will run your responses against
          the Hillary approved policy database to determine if you are an agent
          of Russia. Fill out the fields below and run a check!
        </p>
        <form onSubmit={handleSubmit} className="max-w-lg">
          <div className="py-3">
            <label
              htmlFor="name"
              className="font-semibold px-2 block mb-1"
            >
              Your Name
            </label>
            <input
              id="name"
              required
              className="rounded-full bg-white focus:outline-none p-3 bg-gray-100 w-full max-w-lg"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="py-3">
            <label
              htmlFor="name"
            
              className="font-semibold px-2 block mb-2"
            >
              Do you support Bernie's anti-establishment, anti-corruption
              message?
            </label>
            <RadioGroup
              name="antiCorruptionOption"
              selectedItem={antiCorruptionOptionSelected}
              options={[
                { label: "Yes", value: "true" },
                { label: "No", value: "false" }
              ]}
              onChange={e => setAntiCorruptionOptionSelected(e.target.value)}
            />
          </div>
          <div className="py-4">
            <input className={`bg-transition focus:outline-none p-3 w-full rounded-full  font-semibold ${antiCorruptionOptionSelected == '' || name == '' ? 'bg-gray-200 text-gray-500' :'bg-gray-900 text-white cursor-pointer'}`} type="submit" value={validatingRunning ? 'Asking Hillary now...' : "Run Check"} disabled={antiCorruptionOptionSelected == '' || name == ''}  />
               </div>
        </form>
      </div></>}
</Layout>)

};

export default RussianAssetCheck;



export const imageQuery = graphql`
query AssetImage{
  fileName: file(relativePath: { eq: "images/racheck.png" }) {
    childImageSharp {
      fixed(width: 800, height: 420, quality: 80) {
        width
        height
        src
        srcSet
        srcWebp
      }
    }
  }
}`
