import { cn } from '@/lib/utils'
import { Image as ImageType} from '@/types'
import { Tab } from '@headlessui/react'
import Image from 'next/image'
import React from 'react'

interface GalleryTabProps {
    image: ImageType
}

const GalleryTab: React.FC<GalleryTabProps> = ({
    image
}) => {
  return (
    <Tab className='relative flex aspect-square cursor-pointer items-center justify-center rounded-md bg-white'>
        {({selected}) => (
            <>
                <span className='absolute h-full aspect-square inset-0 overflow-hidden rounded-md'>
                    <Image 
                    fill
                    src={image.url}
                    alt='Gallery Image'
                    className='object-cover'
                    />
                </span>
                <span className={cn("absolute inset-0 rounded-md ring-2 ring-offset-2", selected ? "ring-black" : "ring-transparent")}></span>
            </>
        )} 
    </Tab>
  )
}

export default GalleryTab