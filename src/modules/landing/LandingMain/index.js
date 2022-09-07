import React from 'react'
import { Container } from '../../../components'
import {LandingBackground, WeddingIlustrator} from '../../../asset'

function LandingMain() {
    return (
        <Container>
            <div className='h-[90vh] w-screen flex flex-row items-start md:items-center' style={{background: `url(${LandingBackground})`,backgroundRepeat:'no-repeat',backgroundSize:'cover'}}>
            <img className='w-[300px] bottom-0 absolute right-0 block md:hidden' src={WeddingIlustrator}/>
                <div className='md:w-1/2 flex flex-row justify-center ml-0 md:ml-32'>
                    <div className='bg-transparent p-5 rounded-lg w-fit text-neutral-600'>
                    <p className='text-2xl font-semibold'>Buat Undangan Digital Dengan Mudah</p>
                    <p>Dengan masa aktif selamanya dan banyak pilihan design !</p>
                    <p className='font-semibold'>Fitur terlengkap dan bayar SEIKHLASNYA</p>
                    <button className='bg-primary-30 text-white font-semibold px-5 py-2 rounded-lg mt-5'>
                        Buat Sekarang
                    </button>
                    </div>
                </div>
                <img className='w-1/2 h-[400px] bottom-0 absolute right-0 hidden md:block' src={WeddingIlustrator}/>
            </div>
        </Container>
    )
}

export default LandingMain
