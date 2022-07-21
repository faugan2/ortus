import React from 'react'

export default function Footer() {
    const h_style="text-base font-semibold";
    const li_style="text-xs text-gray-700 hover:opacity-50 cursor-pointer";
  return (
    <div 
    className="absolute bottom-0 w-full border border-l-0 border-b-0 border-r-0 flex justify-between p-2" 
    style={{minHeight:200}}>
        <div>
            <h1 className={`${h_style}`}>Titre 1</h1>
            <ul>
                <li className={`${li_style}`}>lorem lorem lorem</li>
                <li className={`${li_style}`}>lorem lorem lorem</li>
                <li className={`${li_style}`}>lorem lorem lorem</li>
                <li className={`${li_style}`}>lorem lorem lorem</li>
            </ul>
        </div>
        <div>
        <h1 className={`${h_style}`}>Titre 2</h1>
        <ul>
        <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
        </ul>
        </div>
        <div>
        <h1 className={`${h_style}`}>Titre 3</h1>
        <ul>
        <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
        </ul>
        </div>
        <div>
        <h1 className={`${h_style}`}>Titre 4</h1>
        <ul>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
            <li className={`${li_style}`}>lorem lorem lorem</li>
        </ul>
        </div>
    </div>
  )
}
