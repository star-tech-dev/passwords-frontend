import React from 'react'

interface IconOptions extends React.HTMLAttributes<any> {}

function InfoIcon (props: IconOptions) {
  return (
    <div {...props} className="icon -cross">
      <svg width="18px" height="18px" viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
          <g transform="translate(-410.000000, -395.000000)" fill="currentColor" fillRule="nonzero">
            <g transform="translate(121.000000, 380.000000)">
              <g id="information" transform="translate(289.000000, 15.000000)">
                <path d="M9,0 C13.9626,0 18,4.03745455 18,9.00005455 C18,13.9626545 13.9626,18 9,18 C4.0374,18 0,13.9626545 0,9.00005455 C0,4.03745455 4.0374,0 9,0 Z M9,7.63636364 C8.54814545,7.63636364 8.18181818,8.00269091 8.18181818,8.45454545 L8.18181818,13.3636364 C8.18181818,13.8154909 8.54814545,14.1818182 9,14.1818182 C9.45185455,14.1818182 9.81818182,13.8154909 9.81818182,13.3636364 L9.81818182,8.45454545 C9.81818182,8.00269091 9.45185455,7.63636364 9,7.63636364 Z M8.99989091,3.81818182 C8.39847273,3.81818182 7.9092,4.30778182 7.9092,4.90958182 C7.9092,5.51083636 8.39847273,6 8.99989091,6 C9.60130909,6 10.0905818,5.51083636 10.0905818,4.90958182 C10.0905818,4.30778182 9.60130909,3.81818182 8.99989091,3.81818182 Z"></path>
              </g>
            </g>
          </g>
        </g>
      </svg>
    </div>
  )
}

export default InfoIcon
