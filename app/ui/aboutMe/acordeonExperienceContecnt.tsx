

export const AcordeonExperienceContecnt = ({ data }: any) => {
    return (
      <div className="flex flex-col flex-wrap justify-end md:justify-center items-start gap-5 h-full w-full px-10 ">
        <div className="flex w-full items-center justify-between flex-wrap-reverse px-2">
            <span className="text-xl font-bold underline">{data.cargo}</span>
            <span>{data.fecha}</span>
        </div>
        <p className="text-xl text-justify">{data.descripcion}</p>
      </div>
     )
   }
   
   export default AcordeonExperienceContecnt