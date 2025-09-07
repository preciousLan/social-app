import React from 'react'
import Image from 'next/image'


interface sidebarLinks{
text : string
Icon : React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, "ref"> & {
    title?: string;
    titleId?: string;
} & React.RefAttributes<SVGSVGElement>>
images: string


}



const SidebarLink = ({Icon,text,images}:sidebarLinks) => {
   return (
    <li className="flex items-center gap-3 text-xl py-2.5">
      <Icon className="h-7" />
      <span className="hidden xl:block">{text}</span>
      <Image className='hidden'
      src={images}
      alt='image'
      width={40}
      height={40}>
        
      </Image>
    
    </li>
  );
}

export default SidebarLink
