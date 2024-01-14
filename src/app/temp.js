{projects.map(project=>
    (<div className="hover:scale-125 hover:-rotate-12 duration-100 m-4 gap-2 w-[250px] flex flex-col items-center justify-center h-[250px] bg-stone-500 border-4 rounded-tr-3xl">
                      <span className="">{project.projectTile}</span>
                      <div className={`bg-cover	bg-center	bg-no-repeat w-[200px] h-[100px] ${project.source}`}>

                      </div>
                      <a href={project.link} target="blank" className="text-white bg-blue-600 py-1  px-2 rounded-xl	">View</a>
                      <div>
                        {project.techstack.map(tech=>
                          (<span className="m-1 bg-slate-800	p-1 rounded-xl">{tech}</span>)
                        )}
                      </div>
                      {/* <span className="flex justify-center items-center gap-1"><FaRegEye/> 175</span> */}
    </div>
    
))
  }