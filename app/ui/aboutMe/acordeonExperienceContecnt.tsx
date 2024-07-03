

export const AcordeonExperienceContecnt = ({ data }: any) => {
    return (
      <div className="flex flex-col flex-wrap justify-end md:justify-center items-start gap-5 h-full w-full px-10 ">
        <div className="flex w-full items-center justify-between flex-wrap-reverse px-2">
            <span className="text-2xl font-bold underline">{data.cargo}</span>
            <span>{data.fecha}</span>
        </div>
        <div>
          <p className="text-xl text-justify">{data.descripcion}</p>
          {data.items &&data.items.map((item: any, index: number) => (
            <div className="flex flex-col items-start justify-between w-full px-2 py-2" key={index}>
              <p className="text-lg text-justify"><span className="text-lg font-bold ">• {item.title}</span> {item.description}</p>
            </div>
          ))}

        </div>
      </div>
     )
   }
   
   export default AcordeonExperienceContecnt