import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <div className="flex flex-col">
            <main className="flex flex-1">
                {   
                    slug ? <Video lessonSlug={slug} /> : 
                    <div className="flex-1 w-full p-5 flex justify-center bg-gray-700">
                        <div className="mt-56">
                            <div className="flex justify-center">
                                <h1 className="mt-8 text-[2.5rem] leading-tight">
                                    Aprenda React <strong className="text-blue-500">gratuitamente</strong> com o Professor <strong className="text-blue-500">Matheus Battisti</strong>
                                </h1>
                            </div>

                            <div className="flex justify-center">
                                <p className="mt-4 text-gray-200 leading-relaxed">
                                    Em apenas 11 minutos você terá uma introdução na prática de uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                                </p>
                            </div>

                            <div className="flex justify-center">
                                <p className="mt-4 text-gray-200 leading-relaxed">
                                    <strong className="text-blue-500">Para começar clique em uma aula no menu ao lado &gt;</strong>
                                </p>
                            </div>
                        </div>
                    </div>
                }
                <Sidebar />
            </main>
        </div>
    );
}