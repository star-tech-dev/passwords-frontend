import React from 'react'

import './_index.scss'

interface LoaderOptions {
  theme: 'default' | 'dark'
}

function RoundLoader ({ theme }: LoaderOptions) {
  return (
    <div className="component -loader-round">
      <svg className="svg" width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-629.000000, -385.000000)" fill="currentColor" fillRule="nonzero">
            <path d="M631.20799,398.4917 C631.37363,398.8603 631.2091,399.2933 630.8405,399.459 C630.4719,399.6246 630.03881,399.4601 629.873162,399.0915 C629.300253,397.8166 629,396.4285 629,395 C629,389.47726 633.47726,385 639,385 C644.5227,385 649,389.47726 649,395 C649,400.5227 644.5227,405 639,405 C636.65339,405 634.42972,404.1881 632.65267,402.7281 C632.34042,402.4715 632.29526,402.0105 632.55179,401.6982 C632.80833,401.386 633.26941,401.3408 633.58166,401.5973 C635.09934,402.8442 636.9955,403.5366 639,403.5366 C643.7145,403.5366 647.5366,399.7145 647.5366,395 C647.5366,390.28549 643.7145,386.46341 639,386.46341 C634.28549,386.46341 630.46341,390.28549 630.46341,395 C630.46341,396.2208 630.71947,397.4046 631.20799,398.4917 Z" id="Path"></path>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default RoundLoader
