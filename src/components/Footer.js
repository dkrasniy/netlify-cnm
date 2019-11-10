import React from 'react'
import { Link } from 'gatsby'
import CNMLogo from './CNMLogo'
import logo from '../img/logo.svg'
import facebook from '../img/social/facebook.svg'
import instagram from '../img/social/instagram.svg'
import twitter from '../img/social/twitter.svg'
import vimeo from '../img/social/vimeo.svg'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="bg-gray-900 p-20 text-center">
        <div className="w-32 block mx-auto">
        <CNMLogo fill={'#999'}/>
        </div>
        <i className="text-gray-500 block pt-2">Finest Political News</i>
        <a href="https://twitter.com/dkrasniy" target="_blank" className="hover:text-gray-100 text-gray-700 block text-sm">Built with &hearts; in California</a>

      </footer>
    )
  }
}

export default Footer
