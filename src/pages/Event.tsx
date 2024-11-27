import { useParams } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { PythonLogo } from "../components/PythonLogo";
import { KivyLogo } from "../components/KivyLogo";
import { Header } from "../components/Header";

export function Event() {
    const { slug } = useParams<{ slug: string }>()

    return (
        <>
            <Header />
            <div className="flex flex-col lg:flex-row">
                <div className="w-full lg:w-[75%]">
                    {   
                        slug ? <Video lessonSlug={slug} /> : 
                        <div className="p-5 flex justify-center bg-gray-700">
                            <div className="mt-56">
                                <div className="flex justify-evenly mx-[450px]">
                                    <PythonLogo />
                                    <KivyLogo />
                                </div>

                                <div className="flex justify-center">
                                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                                        Construa um <strong className="text-blue-500">mini editor de imagens</strong> do zero com <strong className="text-blue-500">Python e Kivy</strong>
                                    </h1>
                                </div>

                                <div className="flex justify-center">
                                    <p className="mt-4 text-gray-200 leading-relaxed">
                                        Em apenas uma hora e meia você vai ter a introdução na prática de uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                                    </p>
                                </div>
                            </div>
                        </div>
                    }
                </div>

                <div className="w-full lg:w-[25%]">
                    <Sidebar />
                </div>
            </div>
        </>
    );
}