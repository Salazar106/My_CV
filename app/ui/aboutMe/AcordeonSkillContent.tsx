import { Tooltip } from "@nextui-org/react"
import NextImage from "next/image"
import { Image } from "@nextui-org/react"

const AcordeonContent = ({ data }: any) => {

    return (
      <div className="flex flex-wrap justify-end md:justify-center items-start gap-5 h-full w-full px-10 ">
        {data.map((item: any,index: number) => (
          <Tooltip
            key={index}
            classNames={{
              base: [
                "before:bg-neutral-400 dark:before:bg-white",
              ],
              content: [
                "py-2 px-4 shadow-xl",
                "text-black bg-gradient-to-br from-gray-200 to-neutral-700",
              ],
            }}
            content={
              <div className="px-1 py-2">
                <div className="text-small font-bold">Mis Habilidades con {item.nombre}</div>
                {item.habilidades && item.habilidades.map((habilidad: any, i: number) => (
                  <div key={i} className="text-tiny break-words max-w-80">
                    <strong>{habilidad.tittle}:</strong> {habilidad.description}
                  </div>
                ))}
                
              </div>
            }
          >
            <div key={item.key} className="flex justify-center items-center flex-nowrap text-center cursor-pointer ">
              <div className="flex flex-col flex-nowrap w-full text-center items-center justify-center">
                <Image as={NextImage} isBlurred src={item.image} alt="mail" width={35} height={35} />
                <div className="text-[20px]">{item.nombre}</div>
              </div>
              
              {item.description}
            </div>
          </Tooltip>
        ))}
      </div>
    )
  }

export default AcordeonContent