import { useNavigate } from "react-router-dom";
import Logo  from "../assets/LOGO.png";
import CodeMockup from '../assets/code-mockup.png';

export function Subscribe() {
    const navigate = useNavigate()

    function handleSubscribed() {
        navigate('/event')
    }

    return (
        <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
            <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
                <div className="max-w-[640px]">
                    <img src={Logo} alt="" />

                    <h1 className="mt-8 text-[2.5rem] leading-tight">
                        Aprenda o básico de Python e construa um <strong className="text-blue-500">mini editor de imagens</strong> do zero com <strong className="text-blue-500">Python e Kivy</strong>
                    </h1>
                </div>

                <div className="p-8 bg-gray-700 border border-gray-500 rounded">
                    <button 
                        type="button"
                        onClick={handleSubscribed}
                        className="bg-blue-500 uppercase py-4 px-8 rounded font-bold text-sm text-black hover:bg-blue-500 hover:bg-opacity-75 transition-colors"
                    >
                        Acessar curso
                    </button>
                </div>
            </div>

            <img src={CodeMockup} className="mt-10" alt="" />
        </div> 
    )
}