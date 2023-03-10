import React from 'react'
import { Footer } from 'flowbite-react'

export default function Footerweb() {
    return (
        <Footer container={true} className='absolute bottom-0'>
            <Footer.LinkGroup>
                <p className='font-semibold mr-3'>Contact Me</p><span></span>
                <a href="https://github.com/pp13coolpowder">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/3536/3536505.png"
                        className="mr-3 h-3 sm:h-6"
                        alt="Logo" />
                </a>
                <a href="https://github.com/pp13coolpowder">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/732/732200.png"
                        className="mr-3 h-3 sm:h-6"
                        alt="Logo" />
                </a>
                <a href="https://github.com/pp13coolpowder">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2504/2504922.png"
                        className="mr-3 h-3 sm:h-6"
                        alt="Logo" />
                </a>
                <a href="https://www.freecodecamp.org/Phongphath-Luangphithak">
                    <img
                        src="https://d33wubrfki0l68.cloudfront.net/bbfa33a202e8612d49b6c1ed05c1fdd8e4001566/bbdd1/img/fcc_secondary_small.svg"
                        className="mr-3 h-3 sm:h-6"
                        alt="Logo" />
                </a>
                <a href="https://stackoverflow.com/users/20932162/tompp-lpt">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/2111/2111628.png"
                        className="mr-3 h-3 sm:h-6"
                        alt="Logo" />
                </a>
                <a href="https://github.com/pp13coolpowder">
                    <img
                        src="https://cdn-icons-png.flaticon.com/512/25/25231.png"
                        className="mr-3 h-3 sm:h-6"
                        alt="Logo" />
                </a>
            </Footer.LinkGroup>
            <Footer.Copyright
                href="/Profile"
                by="Profile Me ™"
                year={2023} />
        </Footer>
    )
}
