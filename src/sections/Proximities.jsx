import React from 'react'

const Proximities = () => {
  return (
    <section className="pb-8">
      <h1 className="md:text-4xl text-center py-8">Proximities</h1>
      <div className="flex flex-wrap justify-evenly items-stretch gap-2">
        <div className="w-[24%] min-w-[252px] flex flex-col justify-center md:border-r border-greenTheme border-solid border-r-1 ">
          <div className="py-4">
            <p className="text-center">2.5 Hours away from</p>
            <h3 className="text-center">Delhi</h3>
          </div>
          <div className="py-4">
            <p className="text-center">2.5 Hours away from</p>
            <h3 className="text-center">Delhi</h3>
          </div>
        </div>
        <div className="w-[24%] min-w-[252px] flex flex-col justify-center md:border-r border-greenTheme border-solid border-r-1">
          <div className="py-4">
          <p className="text-center">Bang on</p>
            <h3 className="text-center">Delhi-Dehradun</h3>
            <h3 className="text-center">Expressway</h3>
          </div>
          <div className="py-4">
            <p className="text-center">Bang on</p>
            <h3 className="text-center">Delhi-Dehradun</h3>
            <h3 className="text-center">Expressway</h3>
          </div>
        </div>
        <div className="w-[24%] min-w-[252px] flex flex-col justify-center lg:border-r border-greenTheme border-solid border-r-1">
          <div className="py-4">
            <p className="text-center">2 Hours away from</p>
            <h3 className="text-center">Saharanpur</h3>
          </div>
          <div className="py-4">
            <p className="text-center">2 Hours away from</p>
            <h3 className="text-center">Saharanpur</h3>
          </div>
        </div>
        <div className="w-[24%] min-w-[252px] flex flex-col justify-center">
          <div className="py-4">
            <p className="text-center">2.5 Hours away from</p>
            <h3 className="text-center">Delhi</h3>
          </div>
          <div className="py-4">
            <p className="text-center">2.5 Hours away from</p>
            <h3 className="text-center">Delhi</h3>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proximities
