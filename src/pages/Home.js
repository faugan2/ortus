import React from 'react'
import { Link } from 'react-router-dom'
import Menu from "../components/Menu";
import Footer from "../components/Footer";

export default function Home() {
  return (
   <div className="flex flex-col">
    <Menu />
    <div></div>
    <Footer />
   </div>
  )
}
